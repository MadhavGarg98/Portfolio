# Contact Form Setup Guide

Your contact form is now fully functional with comprehensive validation, error handling, and loading states! Here's how to complete the setup to make it actually send emails.

## 🚀 What's Already Working

✅ **Form Validation**: Real-time validation for name, email, and message fields  
✅ **Error Handling**: Beautiful error messages and visual feedback  
✅ **Loading States**: Spinner animation while sending  
✅ **Success/Error Notifications**: Professional notification system  
✅ **Responsive Design**: Works perfectly on all devices  
✅ **Accessibility**: Proper form labels and keyboard navigation  

## 📧 EmailJS Setup (Recommended)

EmailJS is perfect for portfolio sites as it doesn't require a backend server. Here's how to set it up:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Madhav,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### Step 5: Update Configuration
1. Open `frontend/src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
}
```

### Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email!

## 🔧 Alternative: Custom API Backend

If you prefer to use your own backend, you can create an API endpoint:

### Backend Example (Node.js/Express)

```javascript
// server.js
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
      }
    })
    
    // Send email
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'madhavgarg3300@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    })
    
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
```

Then update the form to use the API instead of EmailJS:

```javascript
// In App.jsx, replace sendEmailViaEmailJS with:
const sendEmailViaEmailJS = async () => {
  return await sendEmailViaAPI(formData)
}
```

## 🎨 Customization Options

### Change Email Template
Edit the template in EmailJS dashboard or modify the `getEmailTemplateParams` function in `emailjs.js`.

### Modify Validation Rules
Update the `validateForm` function in `App.jsx`:

```javascript
const validateForm = () => {
  const errors = {}
  
  // Custom validation rules
  if (!formData.name.trim()) {
    errors.name = "Name is required"
  }
  
  // Add more custom rules here
  
  setFormErrors(errors)
  return Object.keys(errors).length === 0
}
```

### Change Notification Duration
Update the timeout in `notification.jsx`:

```javascript
const timer = setTimeout(() => {
  onClose()
}, 8000) // Change from 5000 to 8000 for 8 seconds
```

### Add Form Fields
1. Add new fields to `formData` state
2. Add validation rules
3. Update the form JSX
4. Update EmailJS template

## 🔒 Security Considerations

- EmailJS public key is safe to expose in frontend code
- Consider rate limiting on your backend if using custom API
- Validate all inputs on both frontend and backend
- Use environment variables for sensitive data

## 🚀 Deployment

The contact form will work immediately after setting up EmailJS. No additional deployment steps needed!

## 📞 Support

If you need help with the setup:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)

## ✨ Features Summary

Your contact form now includes:
- ✅ Real-time form validation
- ✅ Professional error handling
- ✅ Loading states with spinner
- ✅ Success/error notifications
- ✅ EmailJS integration
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Clean, modern UI

The form is production-ready and will provide a great user experience for your portfolio visitors! 