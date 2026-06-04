# Neural Animation — Hero Section

**Date:** 2026-06-04  
**Status:** Approved

## Goal

Replace the static dot-pattern texture in the hero section with a subtle, living particle-web animation that visually echoes the NeuralAI name — nodes connected by lines, like neurons — without distracting from the text.

## Decisions Made

| Question | Decision |
|---|---|
| Animation style | Particle web (floating dots connected by proximity lines) |
| Prominence | Whisper — very subtle, texture not feature |
| Mouse interaction | Yes — gentle repulsion on hover |
| Background | Keep existing cream (#fdfaf3) |
| Implementation | Self-contained canvas component, no new dependencies |

## Architecture

Two file changes, nothing else touched.

### New: `components/ui/neural-canvas.tsx`

A `'use client'` canvas component that:

- Mounts a `<canvas>` sized to its container via `ResizeObserver`
- Runs a `requestAnimationFrame` animation loop
- Manages 30 particles, each with position and velocity
- Draws connection lines between particles closer than 90px (max opacity 0.15, rust color)
- Draws each particle as a 1.8px dot at 0.25 opacity (rust color `#b0421a`)
- Applies gentle mouse repulsion within a 100px radius on `mousemove`
- Resets mouse position on `mouseleave`
- Cancels animation frame and disconnects ResizeObserver on unmount

Props: none. Colors and tuning constants are internal.

### Modified: `components/ui/hero-section.tsx`

- Remove the static dot-pattern div: `<div aria-hidden className="absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(...)]" />`
- Add `<NeuralCanvas className="absolute inset-0 -z-10" />` in its place
- Keep the existing gradient backdrop div unchanged
- No other modifications

## Particle System Parameters

| Parameter | Value | Reason |
|---|---|---|
| Particle count | 30 | Low enough to stay subtle |
| Dot size | 1.8px radius | Barely visible, texture-like |
| Dot opacity | 0.25 | Whisper level |
| Connection distance | 90px | ~3–5 connections per particle on average |
| Line max opacity | 0.15 | Lines even more subtle than dots |
| Mouse repulsion radius | 100px | Noticeable but not dramatic |
| Velocity damping | 0.97 per frame | Smooth, organic drift |
| Initial speed | ±0.45 px/frame | Slow enough to read as "alive" not "busy" |

## What This Does Not Change

- All other sections (About, Services, Blog, etc.) — untouched
- The gradient backdrop div in the hero — kept
- The grain CSS overlay on body — kept
- Nav, hero text, CTAs — untouched
- No new npm dependencies
