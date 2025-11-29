# Altcha Integration Setup Guide

## Overview

Altcha is now integrated into the contact form to prevent spam and bot submissions. It's a privacy-first, GDPR-compliant CAPTCHA alternative that works without tracking.

## What Was Implemented

### 1. Packages Installed

- `altcha` - Client-side widget
- `altcha-lib` - Server-side challenge generation and verification

### 2. Files Created/Modified

#### New Files:

- `app/actions/altcha.ts` - Server actions for generating and verifying challenges
- `app/api/altcha/challenge/route.ts` - API endpoint to serve challenges to the widget

#### Modified Files:

- `components/ContactForm/ContactForm.tsx` - Added Altcha widget and verification
- `app/actions/contact.ts` - Added Altcha payload verification
- `lib/email-templates/customer-confirmation.hbs` - Removed uppercase CSS from content
- `lib/email-templates/owner-notification.hbs` - Removed uppercase CSS from content
- `.env.example` - Added ALTCHA_HMAC_KEY configuration

### 3. Environment Setup

Add to your `.env.local`:

```env
ALTCHA_HMAC_KEY=your-secret-hmac-key-change-this-in-production
```

**Important:** Generate a strong, random HMAC key for production. You can use:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## How It Works

1. **Widget Loads**: When the contact form loads, the Altcha widget fetches a challenge from `/api/altcha/challenge`
2. **User Solves**: The widget automatically solves the proof-of-work challenge in the browser (takes 1-3 seconds)
3. **Form Submit**: When solved, the payload is included with the form submission
4. **Server Verification**: Before sending emails, the server verifies the Altcha payload
5. **Email Sent**: Only if verification passes, emails are sent

## Features

- ✅ **Privacy-First**: No tracking, fully GDPR compliant
- ✅ **Accessible**: Works with screen readers and keyboard navigation
- ✅ **Self-Hosted**: No external dependencies or data sharing
- ✅ **Invisible to Users**: Solves automatically in the background
- ✅ **Bot Protection**: Proof-of-work prevents automated submissions
- ✅ **Email Content**: Now displays in normal case (not uppercase)

## Testing

1. Fill out the contact form
2. Wait for the Altcha widget to show a checkmark (1-3 seconds)
3. Submit the form
4. Should receive:
   - Success message on the form
   - Confirmation email to the submitted email address
   - Notification email to the owner's configured email

## Customization

The Altcha widget can be customized in `ContactForm.tsx`:

```tsx
<altcha-widget
  challengeurl="/api/altcha/challenge"
  hidefooter // Hides the "Protected by Altcha" footer
  hidelogo // Hides the Altcha logo
  style={{
    "--altcha-max-width": "100%",
  }}
/>
```

For more options, see: https://altcha.org/docs/widget/

## Security Notes

- The HMAC key should be kept secret and never committed to version control
- Use a different HMAC key for production vs development
- The challenge difficulty can be adjusted in `app/actions/altcha.ts` by changing `maxnumber`
- Lower `maxnumber` = faster solving but less bot protection
- Higher `maxnumber` = slower solving but better bot protection

## Troubleshooting

**Widget doesn't appear:**

- Check browser console for errors
- Ensure the API route is accessible at `/api/altcha/challenge`
- Verify ALTCHA_HMAC_KEY is set in `.env.local`

**Form won't submit:**

- Make sure the widget shows a green checkmark before submitting
- Check that altchaPayload is being captured (check browser console)
- Verify server-side verification in `app/actions/contact.ts`

**Verification fails:**

- Ensure the same HMAC key is used for generation and verification
- Check server logs for verification errors
- Verify the payload is being transmitted correctly
