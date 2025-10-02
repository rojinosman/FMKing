# EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form sends emails directly without opening the user's email client.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (since you want emails sent to rojindawood@gmail.com)
4. Follow the instructions to connect your Gmail account
5. **Note down your Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Submission - {{project_type}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Project Type: {{project_type}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. **Note down your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **"Account"** in your EmailJS dashboard
2. Find your **"Public Key"** (e.g., `user_abc123def456`)
3. **Note down your Public Key**

## Step 5: Update Your Code

Replace these values in `components/contact-section.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

## Step 6: Test Your Setup

1. Run `npm run dev`
2. Go to `http://localhost:3000`
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (rojindawood@gmail.com) for the message

## Step 7: Deploy to GitHub Pages

1. Run `npm run build`
2. Deploy the `out/` folder to GitHub Pages
3. Test the form on your live site

## Free Tier Limits

- **200 emails per month** (free tier)
- **2 email services** (free tier)
- **2 email templates** (free tier)

This should be plenty for a small business website!

## Troubleshooting

**If emails aren't sending:**
1. Check that all IDs are correct in the code
2. Make sure your Gmail account is properly connected
3. Check the EmailJS dashboard for error logs
4. Verify your email template has the correct variable names

**If you get CORS errors:**
- Make sure you're using the correct public key
- Check that your domain is added to EmailJS (if using custom domain)

## Security Note

The public key is safe to use in client-side code. EmailJS handles the security on their end.

## Alternative: Formspree

If you prefer, you can also use Formspree:
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Use the `components/contact-section-formspree.tsx` file instead

Both services work great for static sites like GitHub Pages!
