# BaziReader Landing Page

A modern, professional landing page for BaziReader - an AI-powered Bazi reading application targeting Vietnamese users.

## 🌟 Features

- **Vietnamese Language**: Complete Vietnamese content throughout
- **Modern Design**: Clean, professional aesthetics with feng shui-inspired colors
- **Mobile Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **AI-Focused**: Highlights AI-powered Bazi reading capabilities
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🎨 Design Elements

### Color Palette
- **Primary Gold**: #D4AF37 (Traditional feng shui gold)
- **Deep Red**: #8B0000 (Auspicious red)
- **Deep Blue**: #1E3A8A (Wisdom and depth)
- **Text Colors**: Various shades of gray for optimal readability

### Typography
- **Primary Font**: Inter (modern, clean)
- **Secondary Font**: Noto Sans (Vietnamese character support)
- **Responsive sizing**: Scales appropriately across devices

## 📁 File Structure

```
bazi-landingpage/
├── index.html              # Main landing page
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Mobile responsive styles
├── js/
│   └── main.js            # Interactive functionality
├── images/
│   ├── logo.svg           # BaziReader logo
│   ├── hero-illustration.svg # Hero section illustration
│   ├── favicon.ico        # Website favicon
│   ├── icons/             # Feature and social media icons
│   │   ├── ai-brain.svg
│   │   ├── vietnamese.svg
│   │   ├── instant.svg
│   │   ├── privacy.svg
│   │   ├── mobile.svg
│   │   ├── support.svg
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── youtube.svg
│   │   └── tiktok.svg
│   └── testimonials/      # User testimonial photos
│       ├── user1.jpg
│       ├── user2.jpg
│       └── user3.jpg
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in your web browser to view the landing page locally.

### 2. Web Server Setup

For best results, serve the files through a web server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
npx serve .
```

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 Responsive Breakpoints

- **Large Desktop**: 1200px+
- **Desktop**: 1199px and below
- **Tablet**: 768px and below
- **Mobile**: 480px and below
- **Small Mobile**: 360px and below

## 🎯 Key Sections

### 1. Hero Section
- Compelling headline about AI-powered Bazi reading
- Clear value proposition
- Primary CTA button to app.bazireader.com
- Trust indicators (user count, accuracy, support)

### 2. About Bazi Section
- Explanation of traditional Bazi reading
- How AI enhances the experience
- Visual representation of the process

### 3. Features Section
- 6 key features with icons and descriptions
- Focus on AI capabilities, Vietnamese language, and user benefits

### 4. Testimonials Section
- 3 user testimonials with photos and ratings
- Social proof to build trust

### 5. Pricing Section
- 3 pricing tiers (Free, Pro, Enterprise)
- Clear feature comparison
- Prominent CTA buttons

### 6. Footer
- Company information and links
- Social media links
- Contact information

## 🔧 Customization

### Updating Content
1. Edit the Vietnamese text in `index.html`
2. Modify colors in `css/style.css` (CSS custom properties at the top)
3. Replace placeholder images with actual photos
4. Update social media links and contact information

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add any interactive functionality in `js/main.js`

### Performance Optimization
- Replace placeholder images with optimized WebP/AVIF formats
- Implement lazy loading for images
- Minify CSS and JavaScript for production
- Use a CDN for faster global delivery

## 🌐 SEO Optimization

The landing page includes:
- Proper meta tags for search engines
- Open Graph tags for social media sharing
- Semantic HTML structure
- Alt text for all images
- Structured data markup ready

### Recommended Additions:
- Google Analytics tracking code
- Google Search Console verification
- Schema.org structured data
- XML sitemap
- Robots.txt file

## 📊 Analytics & Tracking

The JavaScript includes tracking for:
- CTA button clicks
- User engagement metrics
- Error logging
- Performance monitoring

To enable tracking, add your analytics codes:
- Google Analytics: Add gtag code
- Facebook Pixel: Add fbq code
- Other tracking platforms as needed

## 🔒 Security Considerations

- All external links use proper security attributes
- Form validation included (if forms are added)
- No sensitive data exposed in client-side code
- HTTPS recommended for production

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3 + CloudFront**: Scalable solution

### Traditional Hosting
- Upload all files to your web server's public directory
- Ensure proper file permissions
- Configure HTTPS certificate

## 📈 Performance Metrics

Target performance goals:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🐛 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful degradation**: Basic functionality on older browsers

## 📞 Support & Contact

For technical support or customization requests:
- Email: contact@bazireader.com
- Website: https://bazireader.com

## 📄 License

This landing page template is created for BaziReader. All rights reserved.

---

**Note**: Replace placeholder images and content with actual assets before deploying to production. Ensure all links and contact information are updated to reflect your actual business details.
