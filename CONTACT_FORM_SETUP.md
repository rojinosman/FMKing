# Contact Form Setup for GitHub Pages

Since GitHub Pages only supports static sites (no server-side functionality), the original API route won't work. Here are your options:

## Option 1: Mailto Link (Current Implementation) ✅

**What it does:** Opens the user's default email client with a pre-filled message.

**Pros:**
- ✅ Works immediately on GitHub Pages
- ✅ No setup required
- ✅ Uses your existing email (rojindawood@gmail.com)

**Cons:**
- ❌ Requires user to have email client configured
- ❌ Less professional appearance

## Option 2: Formspree (Recommended for Production)

**Setup:**
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
5. Replace the fetch URL in `components/contact-section-formspree.tsx`

**Pros:**
- ✅ Professional form handling
- ✅ Spam protection
- ✅ Email notifications
- ✅ Free tier available

## Option 3: EmailJS (Client-Side Email)

**Setup:**
1. Go to [emailjs.com](https://emailjs.com)
2. Create account and connect your Gmail
3. Create email template
4. Get your service ID, template ID, and user ID
5. Replace the values in `components/contact-section-emailjs.tsx`

**Pros:**
- ✅ Sends emails directly from the form
- ✅ No server required
- ✅ Professional appearance

## Option 4: Netlify Forms (If using Netlify)

**Setup:**
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form
3. Forms are automatically handled

## Current Implementation

The contact form now uses a **mailto link** which:
- ✅ Works on GitHub Pages
- ✅ Pre-fills the email with form data
- ✅ Opens user's email client
- ✅ Sends to rojindawood@gmail.com

## To Switch to a Different Option:

1. **For Formspree:** Replace `components/contact-section.tsx` with `components/contact-section-formspree.tsx`
2. **For EmailJS:** Replace `components/contact-section.tsx` with `components/contact-section-emailjs.tsx`
3. **For Mailto:** Already implemented in `components/contact-section.tsx`

## Testing

The current mailto implementation will:
1. User fills out form
2. Clicks "Open Email Client"
3. Their default email app opens with:
   - To: rojindawood@gmail.com
   - Subject: "Contact Form: [Project Type]"
   - Body: All form data formatted nicely

This works on all devices and browsers!
