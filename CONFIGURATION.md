# 🔑 HOOK Landing Page - Configuration Summary

## ✅ What's Been Created

Your complete HOOK landing page is ready! Here's what you have:

### 📁 Project Files
```
hook-landing/
├── index.html              ✅ Complete
├── css/styles.css          ✅ Complete
├── js/main.js              ⚠️ Needs URL configuration
├── google-apps-script/
│   └── Code.gs             ⚠️ Needs deployment
├── docs/
│   └── SETUP.md            ✅ Complete
├── SECRETS.md              ✅ Complete
└── README.md               ✅ Complete
```

---

## 🎯 What You Need to Do

### Step 1: Configure Google Sheets (Required)

**Follow this guide:** [docs/SETUP.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/docs/SETUP.md)

**Quick summary:**
1. Create a Google Sheet
2. Go to Extensions → Apps Script
3. Copy code from `google-apps-script/Code.gs`
4. Deploy as Web App
5. Copy the URL you receive

**Time needed:** ~10 minutes

---

### Step 2: Update Your JavaScript (Required)

**File to edit:** `js/main.js`

**Find this line (~142):**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
```

**Replace with your URL:**
```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec";
```

**Time needed:** ~1 minute

---

### Step 3: Test It (Required)

1. Open `index.html` in your browser
2. Scroll to the form at the bottom
3. Fill it out with test data
4. Click "Enviar Solicitud"
5. Check your Google Sheet for the data

**Expected result:** You should see a success message and your data in Google Sheets

**Time needed:** ~2 minutes

---

## 📋 URLs and Secrets Checklist

Use this checklist to track your configuration:

### Required Configurations

- [ ] **Google Sheet Created**
  - Name: HOOK Registros (or your choice)
  - Location: Your Google Drive

- [ ] **Google Apps Script Deployed**
  - Code copied from: `google-apps-script/Code.gs`
  - Deployed as: Web App
  - Access: Anyone

- [ ] **Web App URL Obtained**
  - Format: `https://script.google.com/macros/s/.../exec`
  - Must end with: `/exec`

- [ ] **JavaScript Updated**
  - File: `js/main.js`
  - Line: ~142
  - Variable: `GOOGLE_SCRIPT_URL`

- [ ] **Form Tested**
  - Test submission completed
  - Data appears in Google Sheets
  - Success message displays

### Optional Configurations

- [ ] **Email Sender Configured** (Optional)
  - File: `google-apps-script/Code.gs`
  - Line: 23
  - Variable: `EMAIL_REMITENTE`
  - Your email: `_________________`

- [ ] **Email Confirmations Enabled** (Optional)
  - File: `google-apps-script/Code.gs`
  - Line: 26
  - Variable: `ENVIAR_EMAIL_CONFIRMACION`
  - Set to: `true` or `false`

- [ ] **Sheet Name Customized** (Optional)
  - File: `google-apps-script/Code.gs`
  - Line: 20
  - Variable: `NOMBRE_HOJA`
  - Your sheet name: `_________________`

---

## 🚨 Important URLs to Save

Once you complete the setup, save these URLs:

### Google Apps Script Web App URL
```
https://script.google.com/macros/s/YOUR_ID_HERE/exec
```
**Where to use:** `js/main.js` line 142

### Google Sheet URL
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
```
**Where to use:** For your reference (to view registrations)

### Dashboard URL (Same as Web App URL without /exec)
```
https://script.google.com/macros/s/YOUR_ID_HERE/dev
```
**Where to use:** To view registrations in web format

---

## 📖 Documentation Quick Links

- **[README.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/README.md)** - Project overview
- **[docs/SETUP.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/docs/SETUP.md)** - Detailed setup guide (START HERE)
- **[SECRETS.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/SECRETS.md)** - Configuration details

---

## 🎨 Customization (Optional)

### Change Colors
Edit `css/styles.css` variables (line ~34):
```css
--color-background: #1a171b
--color-text: #e4e2dd
--color-accent: #bd000b
--color-soft: #fae1d5
```

### Change Events
Edit `index.html` select options (line ~165)

### Change Text
Edit `index.html` directly or use Element SDK

---

## ✅ Deployment Checklist

Once configured and tested:

- [ ] All configurations complete
- [ ] Form tested successfully
- [ ] Data appears in Google Sheets
- [ ] Files uploaded to hosting
- [ ] Production URL tested
- [ ] Mobile responsive verified
- [ ] Form submissions working in production

---

## 🎯 Next Step

**Open this file and follow it step by step:**

[docs/SETUP.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/docs/SETUP.md)

It will guide you through everything you need to do.

---

## 💡 Quick Tips

1. **Don't skip the setup guide** - It has detailed instructions with screenshots
2. **Test locally first** - Make sure everything works before deploying
3. **Save your URLs** - You'll need them for troubleshooting
4. **Check SECRETS.md** - It has the complete configuration checklist

---

**Project Location:**
```
/Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/
```

**Status:** ✅ Ready for configuration  
**Next:** Follow [docs/SETUP.md](file:///Users/eliasburgzzz/.gemini/antigravity/playground/axial-pathfinder/hook-landing/docs/SETUP.md)
