

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2lo52b3', // Your EmailJS Service ID
  TEMPLATE_ID: 'template_1jtp6wo', // Your EmailJS Template ID
  PUBLIC_KEY: 'orJwod4fhwuXdXr79', // Your EmailJS Public Key
}

// Email template variables that will be sent
export const getEmailTemplateParams = (formData) => ({
  name: formData.name,
  message: formData.message,
  email: formData.email, // for reply-to
  time: new Date().toLocaleString(), // optional
})

// Loads EmailJS script and sends email using the config above
export const loadEmailJS = async () => {
  if (window.emailjs) return window.emailjs;
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      resolve(window.emailjs);
    };
    script.onerror = () => reject(new Error('Failed to load EmailJS'));
    document.head.appendChild(script);
  });
};

// Send email using EmailJS
export const sendEmail = async (formData) => {
  // Check if EmailJS is configured
  if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
    // Demo mode - simulate email sending
    console.log('📧 Demo Mode: Email would be sent with data:', formData)
    console.log('📧 To enable real email sending:')
    console.log('   1. Go to https://www.emailjs.com/ and sign up')
    console.log('   2. Create an email service (Gmail, Outlook, etc.)')
    console.log('   3. Create an email template')
    console.log('   4. Update EMAILJS_CONFIG in src/config/emailjs.js with your credentials')
    console.log('   5. Check CONTACT_FORM_SETUP.md for detailed instructions')
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Demo mode - always succeed for better user experience
    return { success: true, data: { message: 'Demo email sent successfully' } }
  }
  
  try {
    const emailjs = await loadEmailJS()
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      getEmailTemplateParams(formData)
    )
    
    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error: error.message }
  }
}

// Alternative: Send to your own API endpoint
export const sendEmailViaAPI = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API Error:', error)
    return { success: false, error: error.message }
  }
} 