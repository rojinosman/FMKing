# Quick Fix: Contact Form Not Sending

## The Problem

You're seeing "Error sending message" because the contact form needs to be connected to a service that can send emails.

## The Solution (Choose One)

### ✅ **Option 1: Formspree (RECOMMENDED - Easiest)**

**Setup time: 5 minutes**

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and set email to `rojindawood@gmail.com`
3. Copy your Form ID (looks like `xanykorv`)
4. In `components/contact-section.tsx`, find this line:
   ```typescript
   const response = await fetch('https://formspree.io/f/xanykorv', {
   ```
5. Replace `xanykorv` with your actual Form ID
6. Save and test!

**Benefits:**
- ✅ Easiest to set up
- ✅ Only need 1 ID
- ✅ 50 free emails/month
- ✅ Works immediately

### Option 2: EmailJS (More Setup Required)

**Setup time: 15 minutes**

Follow the complete guide in `EMAILJS_SETUP.md`

**Benefits:**
- ✅ 200 free emails/month
- ✅ More customization options

## Current Status

The form is using a **demo Formspree endpoint** that may or may not work. To ensure emails go to **rojindawood@gmail.com**, you need to:

1. Create your own Formspree account (free)
2. Get your Form ID
3. Update the code with your Form ID

## Testing

After setup:
1. Run `npm run dev` (if not already running)
2. Go to `http://localhost:3000`
3. Scroll to contact form
4. Fill it out and submit
5. Check `rojindawood@gmail.com` for the email

## Deploy to GitHub Pages

Once working locally:
1. Run `npm run build`
2. Deploy the `out/` folder to GitHub Pages
3. Test on your live site

## Need Help?

If you're still seeing errors:
1. Check browser console (F12) for error messages
2. Verify your Form ID is correct
3. Make sure you're using the free Formspree tier
4. Check spam folder for test emails

The form **will work** once you add your Formspree Form ID!
