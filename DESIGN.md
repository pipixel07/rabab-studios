# Design Brief

## Direction

Premium Dark Studio Minimalism — classy, warm-anchored dark theme for Rabab Studios (music & post-production). Full-image dark hero banners with grainy texture, grain overlay throughout for tactile, analog depth.

## Tone

Sophisticated darkness with warm brown soul. Minimalist, editorial, spacious. Warm brown (#4C2F26) as primary action color. Grainy texture as signature tactile detail. Pure Sans Serif typography throughout.

## Differentiation

Pervasive grain texture on all full-width backgrounds creates tactile, premium feel. Warm brown primary (#4C2F26) anchors entire dark palette. Hero banners: full-image, dark-overlaid, centered text over rich imagery.

## Color Palette

| Token      | OKLCH           | Hex      | Role                                                |
| ---------- | --------------- | -------- | --------------------------------------------------- |
| background | 0.06 0.01 55    | #0D0D0D  | Very dark base, maximizes contrast for text        |
| foreground | 0.95 0.01 60    | #F5F0EB  | Near-white, warm cream text                        |
| card       | 0.1 0.015 55    | #1A1A1A  | Elevated dark card surfaces                        |
| primary    | 0.4 0.12 30     | #5C3B2F  | Warm brown — buttons, active nav, accents          |
| accent     | 0.5 0.08 30     | #6B4D3F  | Lighter warm brown — hover states, highlights      |
| muted      | 0.18 0.01 55    | #2A2A2A  | Dark gray — secondary surfaces, disabled states    |

## Typography

- Display & Body: DM Sans (pure Sans Serif, no serif fonts)
- Mono: Geist Mono (code, technical content)
- Scale: hero `text-6xl md:text-7xl bold`, h2 `text-4xl md:text-5xl bold`, label `text-xs semibold uppercase`
- Weights: 400 body, 600 medium, 700 bold

## Elevation & Depth

Depth via layered surfaces: cards elevated via warm shadows (`shadow-subtle`, `shadow-elevated`), borders defining structure, grain texture providing tactile anchor. No gradients or neon.

## Structural Zones

| Zone    | Background               | Border                 | Pattern                                    |
| ------- | ------------------------ | ---------------------- | ------------------------------------------ |
| Header  | `bg-background grain`    | `border-b border-border` | Sticky nav, brown active indicator, logo   |
| Hero    | Full-image + dark overlay| —                      | `bg-cover`, grain, centered text/logo      |
| Content | `bg-background grain`    | —                      | Alternates `bg-card`/`bg-muted` sections   |
| Footer  | `bg-muted grain`         | `border-t border-border` | Muted foreground, contact info, spacing    |

## Spacing & Rhythm

Spacious, breathing layouts. Hero height `h-screen`, section gaps `py-16 md:py-24`, card grids `gap-6 md:gap-8`, micro-spacing `px-6 py-4`. White space prioritized over density.

## Component Patterns

- Buttons: `bg-primary text-primary-foreground rounded-md`, hover `bg-accent shadow-subtle transition-smooth`
- Cards: `bg-card border border-border rounded-md shadow-subtle gap-6`, grain optional
- Badges: `bg-muted text-foreground rounded-sm text-label`, no fill
- Nav: sticky header `bg-background`, links `text-foreground`, active link `text-primary font-bold border-b-2 border-primary`

## Motion

- Entrance: gentle fade-in via `transition-smooth`, no bounce/scale
- Hover: `shadow-elevated` + `bg-accent` color shift
- Decorative: none — focus on content clarity

## Constraints

- Dark mode always active (no light mode)
- Grain texture on all full-width backgrounds (header, hero, sections, footer)
- Primary color (#4C2F26) used sparingly for CTAs, active states, accents
- Pure Sans Serif typography only (Lora removed entirely)
- No neon, no gradients — editorial restraint
- Dark hero banners must be full-image with 50% dark overlay

## Signature Detail

Grain texture baked into every full-width background creates analog, tactile premium feel. Warm brown primary anchors minimalist dark interface. Full-image dark hero banners convey cinematic studio credibility.
