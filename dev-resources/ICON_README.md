# BLANXLAIT Icon Collection

This collection contains various versions of the BLANXLAIT icon for different use cases.

## 📁 Icon Files

### Basic Icons
- **`icon-static.svg`** - 64x64 static version (no animation)
- **`icon-animated.svg`** - 64x64 with pulsing dot animation
- **`icon-large.svg`** - 128x128 with animation
- **`icon-white-bg.svg`** - 128x128 with white background

### Special Versions
- **`icon-social.svg`** - 1024x1024 for social media profiles
- **`favicon.svg`** - 32x32 optimized for browser tabs
- **`apple-touch-icon.svg`** - 180x180 for iOS home screen

## 🎨 Design Elements

### Colors
- **Primary Gradient**: `#1e40af` → `#06b6d4` (blue to aquamarine)
- **Dot Color**: `#06b6d4` (aquamarine)
- **Background**: White or transparent

### Structure
- Square with rounded corners (gradient fill)
- Small circle positioned at top-right corner
- Optional pulsing animation on the dot

## ✨ Animation Details

### CSS Animation (for web use)
```css
.blanxlait-dot {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

### SVG Animation (built-in)
```xml
<animate 
  attributeName="opacity" 
  values="1;0.3;1" 
  dur="2s" 
  repeatCount="indefinite"
/>
```

## 📱 Usage Guidelines

### For Web
- Use `icon-animated.svg` for interactive elements
- Use `icon-static.svg` for print or static contexts
- Use `favicon.svg` for browser tabs

### For Social Media
- Use `icon-social.svg` (1024x1024) for profile pictures
- Use `icon-white-bg.svg` if platform requires background

### For Print/Business Cards
- Use `icon-static.svg` (no animation)
- Scale as needed (SVG format)

### For Mobile Apps
- Use `apple-touch-icon.svg` for iOS
- Create PNG versions if needed

## 🛠️ How to Convert to Other Formats

### Convert SVG to PNG (using command line)
```bash
# Install librsvg-dev (on macOS with Homebrew)
brew install librsvg

# Convert to PNG
rsvg-convert -h 512 icon-static.svg > icon-512.png
rsvg-convert -h 256 icon-static.svg > icon-256.png
rsvg-convert -h 128 icon-static.svg > icon-128.png
```

### Convert SVG to ICO (for Windows)
```bash
# Install ImageMagick
brew install imagemagick

# Convert to ICO
convert icon-static.svg -resize 32x32 favicon.ico
```

## 🎯 Brand Guidelines

### Do's
- ✅ Maintain the gradient direction (top-left to bottom-right)
- ✅ Keep the dot positioned at top-right
- ✅ Use exact color values provided
- ✅ Maintain proportions when scaling

### Don'ts
- ❌ Don't change the gradient colors
- ❌ Don't move the dot to other positions
- ❌ Don't use without the dot
- ❌ Don't add borders or outlines

## 📧 Contact
For questions about icon usage: ryan@blanxlait.com

---
*BLANXLAIT - AI-Native Software Solutions*
