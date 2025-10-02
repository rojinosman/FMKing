# Email Setup Instructions

To enable the contact form to send emails to rojindawood@gmail.com, you need to set up environment variables.

## Steps:

1. Create a `.env.local` file in the root directory of your project
2. Add the following environment variables:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## Getting Gmail App Password:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password (not your regular Gmail password) in the `EMAIL_PASS` variable

## Important Notes:

- The `EMAIL_USER` should be the Gmail address that will send the emails
- The `EMAIL_PASS` should be the 16-character app password, not your regular password
- Make sure 2-Step Verification is enabled on your Google account
- Never commit the `.env.local` file to version control

## Testing:

Once configured, the contact form will send emails to rojindawood@gmail.com with all the form details including:
- Name
- Email
- Phone number
- Project type
- Project details
- Timestamp

The emails will be formatted as HTML with a professional layout.
