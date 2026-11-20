---
name: Super Maps Pointer
description: A geography game where the world map is the playing field.
colors:
  primary: "#065758"
  primary-night: "#2B7071"
  primary-deep: "#033C3D"
  primary-ink: "#022C2D"
  secondary: "#C46960"
  secondary-deep: "#AF4C44"
  mint-paper: "#E2F0EF"
  sea-glass: "#A2CFD1"
  sea-glass-deep: "#8FC3C6"
  shallow-water: "#82C3C5"
  shallow-water-deep: "#52A1A3"
  night-sea: "#0B171B"
  night-ocean: "#10232A"
  night-land: "#2A3B40"
  night-track: "#1E2D31"
  paper-white: "#FFFFFF"
  ocean-fog: "#F2F2F2"
  border-ink: "#333333"
  border-mist: "#9AA5A8"
  graticule-grey: "#AFAFB6"
  graticule-night: "#33444A"
typography:
  display:
    fontFamily: "Raleway, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Raleway, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Raleway, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Raleway, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Raleway, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  lg: "8px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "20px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    height: "40px"
    padding: "0 16px"
  icon-button:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    size: "40px"
  game-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper-white}"
    padding: "8px 16px"
  level-card:
    textColor: "{colors.paper-white}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.md}"
  gauge-track:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    height: "16px"
    width: "320px"
  gauge-fill:
    backgroundColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
---

# Design System: Super Maps Pointer

## Overview

**Creative North Star: "The Explorer's Atlas"**

The game reads like a well-travelled atlas: a deep lagoon teal for the instruments, sunbaked terracotta for anything you press, and pale mint and sea-glass for land and water. The map is the main subject, and everything around it (the game bar, the menus, the celebration screens) stays calm so the player's eye can go back to the map.

Surfaces are flat colour fields with no shadows; depth comes from tone. Shapes are round and friendly, like pills, soft cards and layered waves, so the game feels welcoming without being childish. Playfulness comes from motion and sound (confetti, emojis, sound effects) rather than from decoration on the chrome.

Light and dark modes are equally important. Dark mode is a night sea, not an inverted page: teal goes deeper, the land turns to slate and the ocean to dark blue-green.

**Key Characteristics:**

- The map dominates; chrome is a thin frame of flat colour.
- Two voices: teal for structure, terracotta for action.
- Round shapes: pill buttons, 16px cards, wave dividers.
- Flat at rest; depth through tonal layering.
- Every colour has a light and a dark value.

## Colors

A coastal atlas palette: one deep teal, one warm terracotta, and a family of pale mints for the map itself.

### Primary

- **Deep Lagoon Teal** (`primary`): the game bar and structural chrome. In dark mode the bar uses **Lagoon Depths** (`primary-deep`) and interactive teal brightens to **Night Lagoon** (`primary-night`). **Lagoon Ink** (`primary-ink`) is the bar's bottom border in both modes.

### Secondary

- **Sunbaked Terracotta** (`secondary`): every primary action (Start, Skip, Next Level, sound toggle), the progress gauge fill and the "How to play" section. In dark mode the section becomes **Burnt Terracotta** (`secondary-deep`).

### Tertiary

- **Sea Glass** (`sea-glass`): a hovered country in light mode; **Deep Sea Glass** (`sea-glass-deep`) when it is pressed.
- **Shallow Water** (`shallow-water`): a country already found in light mode; **Deep Shallow Water** (`shallow-water-deep`) in dark mode.

### Neutral

- **Mint Paper** (`mint-paper`): the hero background and the game background in light mode.
- **Night Sea** (`night-sea`): the same surfaces in dark mode, and the map's outer sphere in dark mode.
- **Paper White** (`paper-white`): land and sphere in light mode, text on teal and terracotta, the gauge track in light mode.
- **Ocean Fog** (`ocean-fog`) / **Night Ocean** (`night-ocean`): the sea, light and dark.
- **Night Land** (`night-land`): land in dark mode. **Night Track** (`night-track`): the gauge track in dark mode.
- **Border Ink** (`border-ink`) / **Border Mist** (`border-mist`): country borders, light and dark.
- **Graticule Grey** (`graticule-grey`) / **Graticule Night** (`graticule-night`): latitude and longitude lines.

### Named Rules

**The Terracotta Means Press Rule.** Terracotta is reserved for things the player acts on and for progress toward the goal. Structure never uses it.

**The Token-Only Rule.** Colours come from the semantic tokens in `theme/system.ts`, read through `colorVar()` or the Chakra CSS variables. Components never hard-code hex values, so both modes stay in sync.

**The Found Country Rule.** A found country is always marked with Shallow Water, which is also what hover and press resolve to on micro-countries, so the map reads as "found" at a glance.

## Typography

**Display Font:** Raleway (with sans-serif)
**Body Font:** Raleway (with sans-serif)

**Character:** A single humanist geometric sans throughout. Raleway's open, slightly elegant forms keep the atlas feel without adding a second voice.

### Hierarchy

- **Display** (700, 2.25rem, 1.2): the country to find, in uppercase with its flag, centered in the game bar; also the introduction title on desktop.
- **Headline** (700, 1.875rem, 1.25): section titles such as "How to play", and the introduction title on mobile.
- **Title** (700, 1.125rem, 1.4): level names on the level cards.
- **Body** (400, 1.125rem, 1.55): game bar information, the introduction and the rules text. Rules paragraphs are capped at about 42rem.
- **Label** (400, 1rem, 1.5): buttons, level status, small counters.

### Named Rules

**The Country Is the Headline Rule.** During a run, the target country is the only display-size text on screen.

Only the 400 weight of Raleway is loaded (`next/font`), so bold text is synthesized by the browser. Load the 700 weight before adding more bold text.

## Layout

The game is full-screen: the map fills the viewport and the game bar is pinned to the top over it. The bar has three zones: information on the left (timer, instruction, projection), the target country in the wider middle zone (three times the width of each side), and controls on the right (skip, sound, colour mode, level, tries, gauge).

Menu screens are vertically centered single columns. The introduction is a full-height hero (logo 256px, 400px from `md`), followed by a "How to play" section with a max width of 56rem and a level grid that goes from one column to two at `sm` (640px). The rhythm uses 16px side padding, 16px gaps, 20px card padding and 64px section padding.

The interface is touch-first: targets must be easy to hit with a finger, and the bar must stay readable on a phone.

## Elevation & Depth

The system is flat. Depth comes from tonal layering: the mint hero above the terracotta section, translucent white cards (`white/10`) on the terracotta, the teal bar over the pale map. The only shadow is a small one on the gauge track.

### Named Rules

**The Flat Atlas Rule.** Surfaces have no shadow at rest. To separate a layer, change its tone, not its elevation.

## Shapes

The form language is rounded and continuous: pill buttons (`full`), 16px level cards, an 8px gauge track and fill, and a three-layer wave divider between the hero and the "How to play" section, in the section's colour at 25%, 50% and 100% opacity. The map itself is the dominant shape, drawn with 0.5px borders and graticules.

## Components

### Buttons

- **Shape:** fully rounded pills (`full`).
- **Primary:** Chakra solid button with the terracotta palette: Sunbaked Terracotta background, white text.
- **Hover / Focus:** Chakra's solid-variant hover and a terracotta focus ring.
- **Icon button:** the same pill treatment on a square icon button (sound toggle), with a translated `aria-label`.

### Cards / Containers

- **Corner Style:** gently curved (16px).
- **Background:** translucent white (`white/10`) on Sunbaked Terracotta.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Internal Padding:** 20px.

### Navigation

- **Game bar:** Deep Lagoon Teal background (Lagoon Depths in dark mode), a Lagoon Ink bottom border, white text, 8px × 16px padding. It holds the timer, instruction, projection name, the target country, controls and progress.

### Progress Gauge

- A 320 × 16px track with an 8px radius, a thin black border and a small shadow; the fill is Sunbaked Terracotta, followed by a `score / goal` counter in white.

### World Map (signature)

- Countries are drawn in Paper White (Night Land in dark mode) with 0.5px Border Ink borders. Hovering turns them Sea Glass, pressing turns them Deep Sea Glass, and found countries are Shallow Water.
- Micro-countries are drawn as small circles so they can be tapped; they resolve to Shallow Water on hover and when found.
- The map can be zoomed, and its projection changes between levels.

## Do's and Don'ts

### Do:

- **Do** read every colour from a semantic token with a light and a dark value (`theme/system.ts`, `colorVar()`).
- **Do** use Sunbaked Terracotta pills for every primary action.
- **Do** keep the game chrome flat and let the map carry the screen.
- **Do** keep touch targets large enough for a finger, including micro-countries.
- **Do** design both light and dark modes together.

### Don't:

- **Don't** hard-code hex values in components.
- **Don't** add shadows to separate surfaces; change the tone.
- **Don't** use terracotta for structural chrome or decoration.
- **Don't** add a second typeface.
- **Don't** put display-size text on the game screen other than the target country.
