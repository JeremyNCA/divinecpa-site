# Decap CMS Deployment Guide for Divine CPA Website

## What You Have Now

✅ **Decap CMS is configured and ready!**

Your site now has:
- CMS admin interface at `/admin`
- Newsletter content managed via CMS
- All configuration files in place

## Deployment Steps (10 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click **"New repository"**
3. Name it: `divine-cpa-website`
4. Set to **Public** or **Private** (your choice)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open Terminal in your project folder and run:

```bash
cd /Users/jeremycioara/NEO/Divine

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with Decap CMS"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/divine-cpa-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize Netlify
4. Select your `divine-cpa-website` repository
5. Leave build settings as default (blank)
6. Click **"Deploy site"**

**Your site will be live in 1-2 minutes!** 🎉

### Step 4: Enable Decap CMS (Authentication)

After your site deploys:

1. In Netlify, go to your site settings
2. Click **"Identity"** in the sidebar
3. Click **"Enable Identity"**
4. Under **Registration preferences**, choose **"Invite only"**
5. Click **"Enable Git Gateway"** (under Identity → Services)

### Step 5: Create Your Admin User

1. Click **"Invite users"** in Netlify Identity
2. Enter your email address
3. Check your email for the invitation link
4. Click the link and set your password

### Step 6: Access Your CMS

1. Go to: `https://your-site-name.netlify.app/admin`
2. Log in with your email/password
3. **You can now edit your newsletter via the web interface!** ✨

## Using the CMS

### To Update the Newsletter:

1. Go to `/admin`
2. Click **"Newsletter"** in the sidebar
3. Click on **"2025-12"** (or create a new issue)
4. Edit the content using the visual editor
5. Click **"Save"** then **"Publish"**
6. Changes go live immediately!

### To Create a New Newsletter Issue:

1. Go to `/admin`
2. Click **"Newsletter"** → **"New Newsletter"**
3. Fill in all fields:
   - Title
   - Issue Date
   - Feature Articles (add 2-3)
   - Tax Tips (add 3-5)
   - QuickBooks Tip
4. Click **"Publish"**

## Current Setup (Manual Update Method)

**Note:** For now, the newsletter page (`pages/newsletter.html`) is static HTML. When you edit via CMS, it saves to `_newsletters/2025-12.md`.

**Two options to use the CMS content:**

### Option A: Manual Update (Simplest)
- Edit via CMS
- Copy content from markdown file
- Update the HTML manually
- This works fine for monthly updates!

### Option B: Automatic Build (Future Enhancement)
- Add a static site generator (11ty, Hugo, or Jekyll)
- Content auto-updates from markdown files
- Requires build configuration

**Recommendation:** Start with Option A. It's simple and works great for monthly newsletter updates.

## Troubleshooting

**Can't access /admin?**
- Make sure you've enabled Git Gateway in Netlify Identity
- Check that your site is deployed

**Changes not showing?**
- CMS saves to GitHub → triggers Netlify rebuild
- Wait 1-2 minutes for deploy to complete
- Check Netlify deploy log for errors

**Forgot password?**
- Go to Netlify site → Identity → Users
- Click user → Send recovery email

## Next Steps (Optional Enhancements)

1. **Custom Domain**: Add your own domain in Netlify settings
2. **Form Handling**: Use Netlify Forms for contact/newsletter signup
3. **Automatic Newsletter Rendering**: Set up 11ty or similar static site generator
4. **Email Integration**: Connect newsletter to MailChimp/ConvertKit

## File Structure

```
Divine/
├── admin/
│   ├── config.yml          # Decap CMS configuration
│   └── index.html          # CMS admin interface
├── _newsletters/           # Newsletter content (managed by CMS)
│   └── 2025-12.md
├── _data/                  # Site settings (managed by CMS)
│   └── settings.yml
├── pages/
│   └── newsletter.html     # Newsletter display page
└── newsletter-loader.js    # Content loader (future use)
```

## Support

- **Decap CMS Docs**: https://decapcms.org/docs/
- **Netlify Docs**: https://docs.netlify.com/
- **GitHub Docs**: https://docs.github.com/

---

**You're all set!** The CMS is ready to use as soon as you complete the deployment steps above.
