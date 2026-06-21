---
name: Upcycle Frontend Design
description: Design system guidelines and tokens for the Upcycle frontend application.
---

# Upcycle Design System Configuration

```yaml
name: Upcycle
colors:
  surface: '#131412'
  surface-dim: '#131412'
  surface-bright: '#393938'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1b'
  surface-container: '#1f201f'
  surface-container-high: '#292a29'
  surface-container-highest: '#343534'
  on-surface: '#e4e2e0'
  on-surface-variant: '#c6c9ab'
  inverse-surface: '#e4e2e0'
  inverse-on-surface: '#30312f'
  outline: '#909378'
  outline-variant: '#454932'
  surface-tint: '#b8d300'
  primary: '#ffffff'
  on-primary: '#2c3400'
  primary-container: '#d2f000'
  on-primary-container: '#5d6b00'
  inverse-primary: '#576500'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#ffffff'
  on-tertiary: '#2e312d'
  tertiary-container: '#e1e3dd'
  on-tertiary-container: '#626560'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2f000'
  primary-fixed-dim: '#b8d300'
  on-primary-fixed: '#191e00'
  on-primary-fixed-variant: '#414c00'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e1e3dd'
  tertiary-fixed-dim: '#c5c7c1'
  on-tertiary-fixed: '#191c19'
  on-tertiary-fixed-variant: '#454843'
  background: '#131412'
  on-background: '#e4e2e0'
  surface-variant: '#343534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1440px
```

## Brand & Style
The design system is built for the precision of botanical engineering and the raw utility of landscape management. It balances the organic complexity of horticulture with the rigid structure of a technical operating system. The aesthetic is **High-Contrast Techno-Brutalism**: it rejects soft flourishes in favor of sharp 0px corners, high-impact whitespace, and an aggressive information density that feels both authoritative and futuristic.

The target audience consists of landscape architects, head gardeners, and campus facility managers who require a tool that feels like professional equipment. The UI should evoke a sense of "digital forestry"—efficient, unsentimental, and highly visible under various lighting conditions.

## Colors
The palette is rooted in a "Deep Forest" dark mode foundation. The primary background is an absolute black (#0A0B0A) to provide maximum contrast for the accent color. 

- **Primary (Volt Lime):** #DFFF00. Used for calls to action, active states, and critical data points. It represents vitality and high-visibility safety gear.
- **Surface Tier 1:** #1A1C19. A charcoal with a slight green undertone for primary containers.
- **Surface Tier 2:** #2D302C. Used for borders, dividers, and secondary UI elements.
- **Inert/Muted:** #6D736B. For secondary text and disabled states, ensuring the hierarchy remains focused on the vibrant accents.

## Typography
The typography strategy employs a stark contrast between **Inter** (tightened for maximum aggression in headlines) and **JetBrains Mono** for all technical metadata.

- **Headlines:** Set in Inter with heavy weights (800-900) and negative letter-spacing. They should feel massive and structural.
- **Body:** Inter Regular provides high legibility for botanical descriptions and maintenance logs.
- **Labels/Data:** JetBrains Mono is used for all "hard" data—GPS coordinates, pH levels, timestamps, and IDs. This reinforces the "instrumental" feel of the system. All labels should be uppercase to enhance the brutalist aesthetic.

## Layout & Spacing
This design system utilizes a **Strict Grid** model. All layouts must align to a 4px baseline and a 12-column grid on desktop.

- **Grid Lines:** Elements are separated by visible 1px borders rather than wide gutters where possible, creating a "blueprint" effect.
- **Margins:** Large, intentional blocks of whitespace (40px+) are used to separate major functional zones, preventing the high-density data from becoming overwhelming.
- **Mobile:** Reflows to a 4-column grid. Padding is reduced to 16px to maximize data visibility on handheld devices used in the field.

## Elevation & Depth
Elevation is expressed through **Tonal Stacking and Hard Borders**, never shadows. 

- **Level 0 (Base):** #0A0B0A. The deep background.
- **Level 1 (Panels):** #1A1C19 with a 1px solid border of #2D302C.
- **Active State:** Instead of a shadow, an active element is indicated by a 1px or 2px solid border of #DFFF00 or a full color inversion (Black text on Volt background).
- **Depth:** Overlays and modals do not use blurs; they use solid #1A1C19 fills with thick 2px #DFFF00 borders to "pop" from the background.

## Shapes
The shape language is strictly **Rectilinear**. 

- **Corners:** 0px radius across all components (buttons, inputs, cards, tags).
- **Strokes:** All borders are 1px solid, unless highlighting a selection, which increases to 2px.
- **Icons:** Use sharp-edged, stroke-based iconography. Avoid any rounded terminals or circular motifs unless they represent specific physical objects (e.g., a circular planter).

## Components
- **Buttons:** Rectangular with 0px radius. Primary buttons are #DFFF00 with #0A0B0A text. Secondary buttons are transparent with a 1px #DFFF00 border.
- **Technical Chips:** Used for plant species or soil status. Fixed-width JetBrains Mono text inside a #2D302C box.
- **Data Tables:** High-density, 1px #2D302C borders between all cells. Header cells use #DFFF00 text on #0A0B0A background.
- **Input Fields:** Bottom-border only or full 1px box. Labels are always JetBrains Mono, positioned above the field in uppercase.
- **Cards:** No shadows. Simple 1px #2D302C border. On hover, the border changes to #DFFF00.
- **Status Indicators:** Use the primary #DFFF00 for "Optimal," #6D736B for "Dormant," and a pure White (#FFFFFF) for "Critical Alert" to maintain the specific palette.
