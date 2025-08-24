# How to Add BLANXLAIT Icon to Gmail Signature

## 🎯 **Method 1: Using Hosted Icon (Recommended)**

### **Step-by-Step Instructions:**

1. **Open Gmail Settings**
   - Go to Gmail
   - Click the gear icon (⚙️) in the top right
   - Select "See all settings"

2. **Navigate to Signature Section**
   - Click on the "General" tab
   - Scroll down to "Signature"

3. **Create New Signature**
   - Click "Create new" if you don't have one
   - Give it a name like "BLANXLAIT Signature"

4. **Add the HTML Code**
   - Copy the HTML from `gmail-signature.html`
   - In the signature editor, click the "Insert HTML" button (looks like `<>`)
   - Paste the HTML code
   - Click "Save"

5. **Test and Save**
   - Scroll to bottom and click "Save Changes"
   - Send yourself a test email to verify

### **Signature HTML Code:**
```html
<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
  <tr>
    <td style="padding-right: 15px; vertical-align: top;">
      <img src="https://blanxlait.com/icon-animated.svg" alt="BLANXLAIT" width="48" height="48" style="display: block; border: 0;">
    </td>
    <td style="vertical-align: top;">
      <div style="margin: 0; padding: 0;">
        <strong style="font-size: 16px; color: #1e40af;">Ryan Niemes</strong><br>
        <span style="color: #06b6d4; font-weight: 600;">Founder & CEO</span><br>
        <strong style="color: #1e40af;">BLANXLAIT</strong>
      </div>
      <div style="margin-top: 8px; font-size: 13px; color: #666;">
        📧 <a href="mailto:ryan@blanxlait.com" style="color: #1e40af; text-decoration: none;">ryan@blanxlait.com</a><br>
        🌐 <a href="https://blanxlait.com" style="color: #1e40af; text-decoration: none;">blanxlait.com</a><br>
        💡 <em style="color: #06b6d4;">AI-Native Software Solutions for SMBs</em>
      </div>
    </td>
  </tr>
</table>
```

## 🎯 **Method 2: Upload Icon as Attachment**

If Method 1 doesn't work:

1. **Download the Static Icon**
   - Right-click and save: https://blanxlait.com/icon-static.svg
   - Or convert to PNG if needed

2. **Insert as Image**
   - In Gmail signature editor
   - Click the image icon (🖼️)
   - Upload your downloaded icon
   - Resize to 48x48 pixels

## 📱 **Mobile Gmail App**

For the mobile app:
- The signature will sync from your web settings
- However, complex HTML might not display perfectly
- Consider using a simpler text-based signature for mobile

## ✅ **What Your Signature Will Include:**

- **Your animated BLANXLAIT icon** (48x48 pixels)
- **Your name** in brand blue
- **Title** in aquamarine
- **BLANXLAIT** company name
- **Contact info** with working links
- **Tagline** about AI-native solutions

## 🔧 **Customization Options:**

### Change Icon Size:
```html
width="32" height="32"  <!-- Smaller -->
width="64" height="64"  <!-- Larger -->
```

### Use Static Icon (no animation):
```html
src="https://blanxlait.com/icon-static.svg"
```

### Different Contact Info:
Replace the email and website URLs with your preferred contact methods.

## 🚨 **Troubleshooting:**

- **Icon not showing?** Some email clients block external images by default
- **Animation not working?** Use the static version for maximum compatibility
- **Formatting issues?** Try the simplified HTML version
- **Mobile problems?** Consider a text-only signature for mobile

## 📧 **Alternative Email Clients:**

- **Outlook**: Similar process, use "Insert > HTML"
- **Apple Mail**: Copy/paste usually works directly
- **Thunderbird**: Use "Insert > HTML"

---
*Need help? Contact ryan@blanxlait.com*
