# Image Integration Guide for Divine CPA Website

## Current Status
The website currently uses SVG placeholder graphics. This guide explains where images are needed and how to add them.

---

## 🎯 Required Images

### 1. **Hero Background Image**
- **Location**: `index.html` - Main hero section
- **Current**: Gradient + SVG pattern
- **Needed**: Professional office/accounting workspace image
- **Dimensions**: 1920x1080px minimum
- **Suggestions**:
  - Professional office interior
  - Calculator/financial documents on desk
  - Modern workspace with computer
  - Abstract financial graphics

**Recommended Sources**:
- Professional photographer (best option)
- Stock sites: Unsplash, Pexels (free)
- Premium: Shutterstock, iStock

**To Replace**:
```css
/* In styles.css, line 158 */
.hero {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 64, 175, 0.95) 50%, rgba(59, 130, 246, 0.95) 100%),
                url('images/hero-office.jpg');  /* Replace with actual photo */
    background-size: cover;
    background-position: center;
}
```

---

### 2. **Team Member Photos** (CRITICAL)
- **Location**: `pages/about.html` - Team section
- **Current**: Generic SVG placeholders
- **Needed**: Professional headshots of:
  - **Hattie V. Divine, CPA** - Founder
  - **Shaye Divine** - Office Manager

**Requirements**:
- Professional headshots
- Neutral/office background
- Square format (400x400px minimum)
- Consistent lighting/style for both
- Professional attire
- Friendly, approachable expressions

**To Replace**:
```html
<!-- In pages/about.html -->
<img src="../images/hattie-divine.jpg" alt="Hattie V. Divine, CPA">
<img src="../images/shaye-divine.jpg" alt="Shaye Divine">
```

**File naming**:
- `images/hattie-divine.jpg`
- `images/shaye-divine.jpg`

---

### 3. **Office/Company Photos**
**Recommended locations to add images**:

#### Homepage - About Section
- Office exterior or lobby
- Team working together
- Professional consultation scene

#### About Page - Story Section
- Office interior
- Reception area
- Conference room

**Dimensions**: 800x600px minimum

---

### 4. **Service Section Images** (Optional but Recommended)
Add icons or photos to service cards on homepage:

**Suggestions**:
- Tax preparation: Calculator, forms, documents
- Business services: Handshake, meeting, planning
- QuickBooks: Computer screen with software

**Implementation**:
```html
<!-- In service cards, replace SVG icons with photos -->
<div class="service-icon">
    <img src="images/tax-service.jpg" alt="Tax Services">
</div>
```

---

## 📁 Recommended File Structure

```
Divine/
└── images/
    ├── hero/
    │   ├── hero-office.jpg (1920x1080)
    │   └── hero-office-mobile.jpg (768x1024)
    ├── team/
    │   ├── hattie-divine.jpg (600x600)
    │   └── shaye-divine.jpg (600x600)
    ├── office/
    │   ├── office-exterior.jpg (1200x800)
    │   ├── office-interior.jpg (1200x800)
    │   └── reception.jpg (1200x800)
    ├── services/
    │   ├── tax-services.jpg (400x400)
    │   ├── business-services.jpg (400x400)
    │   └── quickbooks-services.jpg (400x400)
    └── placeholders/ (keep current SVGs as backups)
```

---

## 🔧 How to Add Images

### Method 1: Direct Replacement (Simplest)
1. Save new images with exact names in `images/` folder
2. Images will automatically replace placeholders

### Method 2: Update HTML (More Control)
1. Save images with your preferred names
2. Update `src` attributes in HTML files
3. Test all pages

### Method 3: Responsive Images (Best Practice)
Use `<picture>` element for optimal loading:

```html
<picture>
    <source media="(max-width: 768px)" srcset="images/hero-mobile.jpg">
    <source media="(min-width: 769px)" srcset="images/hero-desktop.jpg">
    <img src="images/hero-desktop.jpg" alt="Divine CPA Office">
</picture>
```

---

## 📸 Image Optimization Tips

### Before Upload
1. **Resize**: Don't use oversized images
   - Hero: 1920x1080px max
   - Team photos: 600x600px
   - Other photos: 1200x800px max

2. **Compress**: Use online tools
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app)

3. **Format**:
   - Use JPEG for photos (.jpg)
   - Use PNG for graphics with transparency (.png)
   - Modern browsers: Consider WebP format

4. **File size**: Keep under 200KB per image

### After Upload
- Test loading speed
- Check mobile appearance
- Verify retina display quality

---

## 🎨 Photography Session Checklist

### For Team Photos
- [ ] Professional photographer or high-quality setup
- [ ] Neutral/office background
- [ ] Consistent lighting for both photos
- [ ] Professional attire (business casual)
- [ ] Multiple poses/expressions
- [ ] Square cropping for web
- [ ] High resolution (at least 1200x1200px)

### For Office Photos
- [ ] Clean, organized spaces
- [ ] Good natural lighting
- [ ] Remove personal/confidential information
- [ ] Show professional environment
- [ ] Wide shots for hero/backgrounds
- [ ] Detail shots for variety
- [ ] Consider different angles

---

## 🌐 Stock Image Resources (Free)

If professional photography isn't immediately available:

### Free Stock Photos
1. **Unsplash** (https://unsplash.com)
   - Search: "accounting office", "CPA", "tax preparation", "business office"
   - High quality, free for commercial use

2. **Pexels** (https://pexels.com)
   - Similar quality to Unsplash
   - Good business/office selection

3. **Pixabay** (https://pixabay.com)
   - Large selection
   - Free commercial use

### Search Terms
- "accounting office"
- "CPA professional"
- "tax preparation"
- "business consultation"
- "financial advisor"
- "professional office"
- "calculator documents"
- "business meeting"

### ⚠️ Stock Image Limitations
- Won't show your actual team
- Won't show your actual office
- Less personal connection
- Generic feel

**Recommendation**: Use stock images ONLY as temporary placeholders until professional photos are available.

---

## 📋 Image Replacement Checklist

### Priority 1: MUST HAVE
- [ ] Hattie Divine professional headshot
- [ ] Shaye Divine professional headshot
- [ ] Hero background image (office/workspace)

### Priority 2: HIGHLY RECOMMENDED
- [ ] Office exterior or reception photo
- [ ] Team working together photo (for About page)

### Priority 3: NICE TO HAVE
- [ ] Service section icons/photos
- [ ] Additional office interior shots
- [ ] Consultation/meeting photos

---

## 🚀 Quick Start: Temporary Stock Images

If you need images NOW while waiting for professional photos:

### 1. Download Temporary Team Photos
Use professional stock headshots as placeholders:
- Unsplash: Search "professional woman portrait"
- Choose business casual, office background
- Download 2 different people
- Save as `hattie-divine-temp.jpg` and `shaye-divine-temp.jpg`

### 2. Download Hero Background
- Search: "modern office interior" or "professional workspace"
- Choose bright, professional, welcoming
- Download high resolution
- Save as `hero-office.jpg`

### 3. Replace in Files
Update the paths in HTML/CSS files to use new images.

---

## 💰 Budget Considerations

### Professional Photography
- **Team headshots**: $200-500 (for 2 people)
- **Office photos**: $300-800 (session)
- **Total**: $500-1,300

### DIY Photography
- **Good smartphone camera**: Free (if already owned)
- **Basic lighting kit**: $50-150
- **Background/setup**: $50-100
- **Total**: $100-250

### Stock Photos (Temporary)
- **Free options**: Unsplash, Pexels, Pixabay
- **Premium single images**: $10-50 each
- **Stock subscription**: $30-100/month

---

## 📞 Next Steps

1. **Decide on photography approach**:
   - [ ] Hire professional photographer
   - [ ] DIY with good equipment
   - [ ] Use stock images temporarily

2. **Schedule photo session** (if applicable):
   - [ ] Book photographer
   - [ ] Prepare office/spaces
   - [ ] Schedule team availability

3. **Temporary solution** (if needed):
   - [ ] Download appropriate stock images
   - [ ] Add to website as placeholders
   - [ ] Plan for replacement with real photos

4. **Image optimization**:
   - [ ] Resize all images appropriately
   - [ ] Compress for web
   - [ ] Test on website

5. **Final review**:
   - [ ] Check all images display correctly
   - [ ] Test on mobile devices
   - [ ] Verify fast loading
   - [ ] Confirm professional appearance

---

**Contact for help**: jeremy@cioara.org
**Last updated**: December 4, 2024
