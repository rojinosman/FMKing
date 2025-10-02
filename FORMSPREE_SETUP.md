# Formspree Setup Guide (Easiest Option!)

This guide will help you set up Formspree to send emails from your contact form. This is **easier than EmailJS** and requires less setup.

## Step 1: Create Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and create a free account
3. Verify your email address

## Step 2: Create a New Form

1. In your Formspree dashboard, click **"New Form"**
2. Give it a name like "FM King Contact Form"
3. Set the email address to **rojindawood@gmail.com**
4. Click "Create Form"
5. **Note down your Form ID** (e.g., `xovkwjpr`)

## Step 3: Update Your Code

Replace the form ID in `components/contact-section.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Change `YOUR_FORM_ID` to your actual Form ID from step 2.

## Step 4: Test Your Setup

1. Save the file
2. The page should reload automatically (if dev server is running)
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (rojindawood@gmail.com) for the message

## Step 5: Deploy to GitHub Pages

1. Run `npm run build`
2. Deploy the `out/` folder to GitHub Pages
3. Test the form on your live site

## Free Tier Limits

- **50 submissions per month** (free tier)
- **Unlimited forms**
- **Spam filtering included**
- **Email notifications**

This should be plenty for a small business website!

## Current Status

The form is currently configured with a **demo endpoint** that will work temporarily. To get emails sent to **rojindawood@gmail.com**, you need to:

1. Create your Formspree account
2. Get your Form ID
3. Replace `xanykorv` with your actual Form ID in the code

## Advantages Over EmailJS

- ✅ **Easier setup** - Just one form ID needed (vs 3 IDs for EmailJS)
- ✅ **No template configuration** - Works out of the box
- ✅ **Built-in spam protection**
- ✅ **Email notifications** - Automatic
- ✅ **Works immediately** - No complex setup

## Troubleshooting

**If emails aren't sending:**
1. Check that your Form ID is correct
2. Make sure your Formspree account is verified
3. Check your spam folder
4. Check Formspree dashboard for submission logs

**If you see CORS errors:**
- Add your domain to Formspree settings (for production)
- Localhost should work without any configuration

## Need Help?

If you prefer EmailJS instead, follow the `EMAILJS_SETUP.md` guide. But Formspree is recommended for its simplicity!
