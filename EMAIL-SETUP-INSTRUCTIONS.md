# 📧 Email Notifications Setup - Quick Start Guide

## What I Did

I've set up your website to automatically send you emails when someone signs up! Here's what was changed:

### ✅ Files Created/Modified:

1. **email-config.js** - Configuration file for your email settings
2. **signup.html** - Updated with EmailJS integration and better design
3. **email-setup-guide.md** - Complete setup instructions

---

## 🚀 How to Complete Setup (5 minutes)

### Step 1: Get EmailJS Account (FREE)

1. Go to: **https://www.emailjs.com/**
2. Click "Sign Up" 
3. Use your email: **sksaikiran060@gmail.com**
4. Verify your email

### Step 2: Connect Your Gmail

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Sign in with: **sksaikiran060@gmail.com**
5. **COPY the Service ID** (looks like `service_abc123`)

### Step 3: Create Email Template

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New User Registration - {{user_role}}
```

**Body:**
```
Hello Admin,

A new user has registered:

Name: {{user_name}}
Email: {{user_email}}
Role: {{user_role}}
Date: {{registration_date}}

Please approve in admin dashboard:
https://your-website.com/admin.html

School Management System
```

4. Save and **COPY the Template ID** (looks like `template_xyz789`)

### Step 4: Get Public Key

1. Click **"Account"** → Find **"API Keys"**
2. **COPY your Public Key** (looks like `abcd1234efgh5678`)

### Step 5: Update Your Website

Open the file: **C:\Users\HP\OneDrive\Desktop\school-website\email-config.js**

Replace these lines:
```javascript
SERVICE_ID: 'YOUR_SERVICE_ID',        // Replace with your Service ID
TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // Replace with your Template ID
PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // Replace with your Public Key
```

With your actual IDs from EmailJS.

### Step 6: Test It!

1. Go to your signup page
2. Create a test account
3. Check your email: **sksaikiran060@gmail.com**
4. You should receive a notification! 🎉

---

## 📋 What You'll Need

Copy these 3 values from EmailJS:

- [ ] **Service ID:** `service_________`
- [ ] **Template ID:** `template_________`
- [ ] **Public Key:** `________________`

---

## ⚙️ How It Works Now

**Before:**
1. User signs up → Account created
2. You have to check Firebase manually ❌

**After:**
1. User signs up → Account created
2. **Email sent to you automatically!** ✅
3. You get notified instantly with user details

---

## 💡 Important Notes

- **Free Plan:** 200 emails/month (plenty for a school!)
- **Email Delay:** May take 1-2 minutes to arrive
- **Check Spam:** First email might go to spam folder
- **Works Offline:** Even if EmailJS is down, signup still works

---

## 🆘 Need Help?

If you get any errors:
1. Check that all 3 IDs are correct in `email-config.js`
2. Make sure Gmail is connected in EmailJS
3. Verify template parameter names match exactly

**That's it! Once you add your EmailJS credentials, you'll get email notifications automatically!** 🚀
