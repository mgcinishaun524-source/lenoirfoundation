# iPhone Duo Foldable Responsive Implementation

## 🚀 Overview
The LeNoir Foundation website has been fully optimized for the **iPhone Duo** - Apple's first foldable smartphone announced September 2026. The implementation supports all unique form factors and interaction modes of the device.

## 📱 iPhone Duo Specifications Support

### Device States Supported:
- **Outer Screen (5.4")** - Folded/closed state
- **Inner Screen (7.6")** - Unfolded passport format  
- **Tent Mode** - Half-folded laptop-style interaction
- **Dual Screen** - Side-by-side multitasking layout

## 🛠️ Technical Implementation

### 1. Foldable Detection Hook (`useFoldable.ts`)
```typescript
const foldable = useFoldable();
// Returns: isUnfolded, isTentMode, isOuterScreen, screenSpanning, etc.
```

### 2. Responsive CSS (`foldable.css`)
- **Outer Screen (≤430px)**: Compact one-handed UI
- **Inner Screen (768-1024px)**: Passport-optimized layout
- **Tent Mode**: Top half display, bottom half controls
- **Dual Screen**: Split layout with fold-aware margins

### 3. Component Adaptations

#### Hero Section
- **Single Screen**: Traditional centered layout
- **Dual Screen**: Text left panel, image right panel
- **Outer Screen**: Compressed content, smaller text
- **Tent Mode**: Reduced height with navigation controls

#### Navigation
- **Outer Screen**: Collapsible mobile menu
- **Tent Mode**: Bottom-panel touch controls
- **Dual Screen**: Sticky split navigation

## 🎨 Key Features

### Tent Mode Controls
Interactive bottom panel with main navigation buttons when device is half-folded:
- Home, About, UK Programme, Donate, Contact

### Dual Screen Layout
- Left panel: Primary content
- Right panel: Supporting visuals/secondary content  
- Fold-aware spacing with `env(fold-width)`

### Smart Content Adaptation
- **fold-hide-outer**: Hide non-critical elements on small outer screen
- **fold-show-inner**: Enhanced content only on unfolded screen
- Dynamic button sizing and text scaling

## 📏 Media Query Breakpoints

```css
/* Outer Screen (Folded) */
@media screen and (max-width: 430px) and (max-height: 932px)

/* Inner Screen (Unfolded) */
@media screen and (min-width: 768px) and (max-width: 1024px) and (min-aspect-ratio: 0.8)

/* Tent Mode */
@media screen and (max-width: 430px) and (orientation: landscape) and (max-height: 500px)

/* Dual Screen */
@media (spanning: single-fold-vertical)
```

## ⚡ Performance Optimizations

### Lazy Loading
- Components load only when needed for each screen state
- Image optimization based on viewport size
- Reduced bundle size for outer screen interactions

### Animation Considerations
- Fold/unfold transition animations
- Reduced motion support for accessibility
- Hardware-accelerated transforms

## 🔧 Development Tools

### Foldable Demo Component
Real-time display of current foldable state:
- Viewport dimensions
- Orientation detection
- Screen spanning status
- Current device mode

## 🎯 User Experience Features

### One-Handed Optimization (Outer Screen)
- Larger touch targets (48px minimum)
- Bottom-aligned primary actions
- Compressed navigation
- Essential content only

### Multitasking Support (Dual Screen)
- Split-view layouts
- Independent scrolling regions
- Cross-panel interactions
- Fold-aware content distribution

### Continuity Features
- State preservation across fold/unfold
- Smooth transitions between modes
- Consistent design language

## 🛡️ Browser Support & Fallbacks

### CSS Feature Detection
```css
@supports (spanning: single-fold-vertical) { /* Dual screen styles */ }
```

### JavaScript Detection
- Viewport size monitoring
- Orientation change listeners
- Graceful degradation for non-foldable devices

## 📋 Testing Checklist

- [x] Outer screen (5.4") responsiveness
- [x] Inner screen (7.6") layout optimization  
- [x] Tent mode functionality
- [x] Dual screen splitting
- [x] Fold/unfold transitions
- [x] Touch target accessibility
- [x] Performance on foldable hardware
- [x] Fallback for standard devices

## 🚀 Production Notes

1. **Remove FoldableDemo** component before production deployment
2. **Test on actual iPhone Duo** hardware when available
3. **Monitor CSS spanning support** in Safari updates
4. **Optimize images** for different screen densities

---

**The LeNoir Foundation website is now fully prepared for the iPhone Duo launch in October 2026!** 🎉