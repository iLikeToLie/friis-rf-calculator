---
version: alpha
name: CME Tracker
description: A dark, science-forward tracking system with monospaced editorial typography and a warm solar accent.
colors:
  primary: "#ffb347"
  primary-90: "#f0a63c"
  primary-80: "#d98f22"
  primary-20: "#4a3514"
  secondary: "#d7ddee"
  tertiary: "#1e2540"
  neutral: "#090b12"
  surface: "#0f1420"
  on-surface: "#d7ddee"
  muted: "#8ea0bf"
  border: "#27344a"
  accent-glow: "#ff8c00"
  success: "#34d399"
  error: "#ff6b6b"
typography:
  headline-display:
    fontFamily: "SF Mono"
    fontSize: "49px"
    fontWeight: 700
    lineHeight: "55.86px"
    letterSpacing: "-1.6px"
  headline-lg:
    fontFamily: "SF Mono"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "38px"
    letterSpacing: "-0.8px"
  headline-md:
    fontFamily: "SF Mono"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: "29.9px"
    letterSpacing: "-0.4px"
  headline-sm:
    fontFamily: "SF Mono"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "24px"
  title-md:
    fontFamily: "SF Mono"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "22px"
  body-lg:
    fontFamily: "SF Mono"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  body-md:
    fontFamily: "SF Mono"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "24.75px"
  body-sm:
    fontFamily: "SF Mono"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "20px"
  label-lg:
    fontFamily: "SF Mono"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.04em"
  label-md:
    fontFamily: "SF Mono"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
  caption:
    fontFamily: "SF Mono"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "14px"
rounded:
  none: 0px
  sm: 6px
  md: 7px
  lg: 10px
  xl: 12px
  full: 9999px
spacing:
  xs: 2px
  sm: 10px
  md: 18px
  lg: 26px
  xl: 40px
  gutter: 22px
  section: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: "11px 17px"
    height: "36px"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "11px 17px"
    height: "36px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "22px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "11px 14px"
  chip-live:
    backgroundColor: "{colors.success}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# CME Tracker design direction

## Overview

The interface should feel like a premium mission-control dashboard for technically literate users. The mood is dark, cinematic, and data-dense, while the warm amber accent keeps it energetic rather than sterile. Monospaced typography and compact controls give it an instrument-panel character.

For the Friis RF calculator, this direction is applied to the working interface rather than a marketing page. The live Tx-to-Rx geometry, received-power result, objective state, thresholds, and editable model inputs remain the first-class visual hierarchy.

## Visual system

- Use `#090b12` as the deep-space canvas and `#0f1420` for framed instrument surfaces.
- Use `#ffb347` for primary actions, live RF emphasis, and the central link path.
- Use `#d7ddee` for readable foreground content and `#8ea0bf` for supporting labels.
- Use `#27344a` for fine structural borders rather than heavy shadows.
- Reserve green for successful or live states, blue for sensitivity references, and red for interference or error states.
- Use SF Mono with Cascadia Code, JetBrains Mono, Menlo, and Consolas fallbacks throughout.
- Keep uppercase labels compact and tracked; keep longer explanatory copy in sentence case.

## Layout

Use a centered, fixed-max-width technical workspace. Navigation is a compact horizontal instrument bar. The calculator view presents the live link geometry and received-power result first, followed by editable model inputs and supporting metrics. Other views retain the same surface, control, and data hierarchy.

Spacing follows a tight but consistent rhythm. Cards use approximately 22px internal padding and 10px corner radii. Section spacing is generous enough to separate analytical tasks without reducing information density.

## Elevation and depth

The design is materially flat. Use layered dark tones, fine borders, and restrained amber glow inside RF visualizations. Avoid large ambient shadows and soft floating cards.

## Components

- Primary buttons use amber fill, dark text, compact height, and 6–7px corners.
- Secondary buttons use transparent backgrounds and navy borders.
- Cards are dark framed instruments with fine borders and 10px radii.
- Inputs share the surface and border language, with amber focus treatment.
- Status chips are concise, high contrast, and use semantic colours.
- Charts use amber for received power, blue for sensitivity, and red for interference thresholds.
- The live Tx-to-Rx graphic uses antenna endpoints, a warm link path, and compact loss readouts.

## Do and do not

- Do keep the palette dark and space-oriented.
- Do use monospaced typography consistently.
- Do rely on borders, tonal layers, and restrained glow for hierarchy.
- Do keep controls compact and efficient.
- Do preserve generous section spacing with tight internal card spacing.
- Do not introduce unrelated saturated UI colours.
- Do not switch routine interface copy to a proportional sans-serif.
- Do not use heavily rounded cards or large soft shadows.
