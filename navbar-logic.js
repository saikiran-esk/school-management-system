// Navbar Logic (Logout & Admin Link)

// Global Logout Function
function logout() {
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().signOut().then(() => {
            window.location.href = "login.html";
        }).catch((error) => {
            console.error("Logout error:", error);
            window.location.href = "login.html";
        });
    } else {
        window.location.href = "login.html";
    }
}

// Function to initialize Navbar logic (call this after navbar HTML is loaded)
function initNavbarLogic() {
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().onAuthStateChanged(async user => {
            if (!user) return;

            const adminLink = document.getElementById("adminLink");
            if (!adminLink) return; // Navbar might not be loaded yet

            try {
                const res = await db.collection("users").doc(user.uid).get();
                if (res.exists && res.data().role === "admin") {
                    adminLink.style.display = "inline";
                }
            } catch (error) {
                console.error("Error checking admin role:", error);
            }
        });
    }
}
