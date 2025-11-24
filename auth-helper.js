// auth-helper.js
// Helper functions for authentication and role management

/**
 * Get user role and profile data from Firestore
 * @param {string} uid - User ID
 * @returns {Promise<Object|null>} User data or null if not found
 */
async function getUserRole(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    } catch (error) {
        console.error('Error fetching user role:', error);
        return null;
    }
}

/**
 * Get redirect URL based on user role
 * @param {Object} userData - User data with role property
 * @returns {string} Redirect URL
 */
function getRedirectUrl(userData) {
    switch (userData.role) {
        case 'admin':
            return 'admin.html';
        case 'teacher':
            return 'teacher-dashboard.html';
        case 'student':
            return 'students.html';
        default:
            return 'login.html';
    }
}

/**
 * Check if user is authenticated and redirect if not
 */
async function requireAuth() {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                resolve(user);
            } else {
                window.location.href = 'login.html';
                reject('Not authenticated');
            }
        });
    });
}

/**
 * Check if user has specific role
 * @param {string} requiredRole - Required role
 * @returns {Promise<boolean>}
 */
async function checkUserRole(requiredRole) {
    try {
        const user = await requireAuth();
        const userData = await getUserRole(user.uid);

        if (userData && userData.role === requiredRole) {
            return true;
        } else {
            alert('Access denied. You do not have permission to view this page.');
            window.location.href = getRedirectUrl(userData || { role: 'student' });
            return false;
        }
    } catch (error) {
        console.error('Error checking user role:', error);
        return false;
    }
}

/**
 * Logout user
 */
async function logout() {
    try {
        await auth.signOut();
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error logging out:', error);
        alert('Error logging out. Please try again.');
    }
}
