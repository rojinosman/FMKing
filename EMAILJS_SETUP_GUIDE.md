# EmailJS Setup Guide for FMKing Construction

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Connect Your Gmail
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Connect your Gmail account (`rojindawood@gmail.com`)
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** `New Quote Request from {{from_name}}`

**Template Body:**
```
New quote request from FMKing Construction website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}

Message:
{{message}}

---
Sent from FMKing Construction website contact form
```

4. **Copy the Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (looks like `xxxxxxxxxxxxx`)

### Step 5: Update the Code
In `components/contact-section.tsx`, replace these placeholders:

```typescript
// Replace these lines:
emailjs.init("5iRleN3XdIosIIwHB")
const result = await emailjs.send(
  'service_hv6ytks',      // Replace with your Service ID
  'template_z5odieu',     // Replace with your Template ID
```


### Step 6: Test
1. Save the file
2. Run `npm run build`
3. Deploy to GitHub Pages
4. Test the contact form

## Benefits of EmailJS

✅ **Works on GitHub Pages** - No server required
✅ **Seamless user experience** - No email client needed
✅ **Professional appearance** - Form sends directly
✅ **200 free emails/month** - Perfect for small business
✅ **Spam protection** - Built-in security
✅ **Email notifications** - You get notified immediately

## Troubleshooting

**If emails aren't sending:**
1. Check your Service ID, Template ID, and Public Key
2. Make sure Gmail is properly connected
3. Check browser console for error messages
4. Verify your EmailJS account is active

**If you get rate limited:**
- Free tier: 200 emails/month
- Upgrade if you need more

## Security Note

The Public Key is safe to use in client-side code - it's designed for public use.

---

Once configured, your contact form will send emails directly to `rojindawood@gmail.com` without requiring users to open their email client!
