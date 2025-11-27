# Render Deployment Guide

## Prerequisites
- A GitHub account
- Your code pushed to a GitHub repository
- A Render account (free tier available at https://render.com)

## Step 1: Push Your Code to GitHub

If you haven't already pushed your code to GitHub, follow these steps:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit for Render deployment"

# Create a new repository on GitHub, then add it as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Render

### Option A: Using the Render Dashboard (Recommended)

1. **Sign up/Login to Render**
   - Go to https://render.com
   - Sign up for a free account or login if you already have one
   - You can sign up using your GitHub account for easier integration

2. **Create a New Static Site**
   - Click on "New +" button in the top right
   - Select "Static Site"

3. **Connect Your GitHub Repository**
   - If this is your first time, authorize Render to access your GitHub repositories
   - Select the repository containing your school website
   - Click "Connect"

4. **Configure Your Static Site**
   - **Name**: `school-website` (or any name you prefer)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: Leave empty or use `echo "No build needed"`
   - **Publish Directory**: `.` (current directory)
   - Click "Create Static Site"

5. **Wait for Deployment**
   - Render will automatically deploy your site
   - This usually takes 1-2 minutes
   - You'll see the build logs in real-time

6. **Access Your Live Site**
   - Once deployed, you'll get a URL like: `https://school-website-xxxx.onrender.com`
   - Your site is now live! 🎉

### Option B: Using render.yaml (Blueprint)

Your project already has a `render.yaml` file configured. To use it:

1. Go to https://dashboard.render.com
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

## Step 3: Configure Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your site's dashboard on Render
2. Click on "Settings"
3. Scroll to "Custom Domain"
4. Add your domain and follow the DNS configuration instructions

## Important Notes

### Firebase Configuration
✅ **Good News**: Your website uses Firebase for backend services, which means:
- User authentication will work across all devices
- Data is stored in Firebase Firestore (not localStorage)
- All features will work properly when deployed

### Environment Variables
If you need to add any environment variables (API keys, etc.):
1. Go to your site's dashboard on Render
2. Click "Environment" in the left sidebar
3. Add your environment variables
4. Redeploy if necessary

### Automatic Deployments
Render automatically redeploys your site whenever you push changes to your GitHub repository's main branch. No manual redeployment needed!

### Free Tier Limitations
- Free static sites on Render have:
  - Unlimited bandwidth
  - Custom domains supported
  - Automatic SSL certificates
  - No credit card required

## Troubleshooting

### Issue: Site shows 404 errors
**Solution**: Make sure your `index.html` is in the root directory of your repository.

### Issue: Firebase not working
**Solution**: Verify that your `firebase-config.js` has the correct configuration and is properly linked in your HTML files.

### Issue: Build fails
**Solution**: Check the build logs on Render dashboard for specific error messages.

### Issue: Site not updating
**Solution**: 
1. Make sure you pushed your changes to GitHub
2. Check the Render dashboard to see if auto-deploy is enabled
3. Manually trigger a deploy from the Render dashboard if needed

## Updating Your Website

To update your website after initial deployment:

```bash
# Make your changes to the code
# Then commit and push to GitHub

git add .
git commit -m "Description of your changes"
git push origin main
```

Render will automatically detect the changes and redeploy your site within 1-2 minutes.

## Support

- Render Documentation: https://render.com/docs/static-sites
- Render Community: https://community.render.com
- Firebase Documentation: https://firebase.google.com/docs

---

**Your website is ready to go live! Follow the steps above and your school management system will be accessible to everyone on the internet.** 🚀
