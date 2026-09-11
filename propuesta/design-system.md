# Design System — Propuesta de estilo `indexSKILL.html`

Basado en la skill **web-design-engineer** (garden-skills) → receta **`linear`** (Modern Tool / Builder SaaS), adaptada a la marca Megas.

## Design Read

```yaml
Design Read:
  artifact: landing (Home) corporativa — B2B energía GLP
  audience: hogares, comercios, industria, agroindustria (Colombia)
  visual-language: "quiet luxury industrial" — Modern Tool school (Linear)
  mode: overhaul (nueva propuesta visual, contenido y paleta intactos)
  visual-variance: 4
  motion-intensity: 3
  information-density: 5
  asset-dependence: 6 (slider + marca → asset > spec)
  brand-fidelity: 8 (paleta y contenido obligatorios)
```

## Posicionamiento (Step 3a)

- **Narrative role**: hero (impacto) → comercializador (autoridad B2B) → por qué elegirnos (valores) → seguridad (confianza) → CTA (conversión) → footer (solidez).
- **Viewing distance**: teléfono 10 cm / portátil 1 m.
- **Visual temperature**: primera mitad **energizado-contenido** (dark cálido), secciones de contenido **luminosas** (#f6f8fb), CTA/footer **dark** para cierre.
- **Capacity check**: hero 60/40 (texto/panel), secciones en rejillas de 2 y 4, siempre con desborde cero validado.

## Paleta — SOLO colores de marca (+ derivados estructurales oklch, sin matices nuevos)

| Rol | Valor | Origen |
|---|---|---|
| Ground (dark base) | `#18242c` | neutral de marca |
| Surface 1 (panel dark) | `oklch(0.20 0.02 210)` ≈ `#202c36` | derivado de ground |
| Surface 2 (dark raised) | `oklch(0.26 0.02 210)` ≈ `#2d3a45` | derivado de ground |
| Ink (texto dark) | `#f6f8fb` | neutral de marca |
| Ink dim (texto dark) | `#9fb0bb` | derivado ground→ink |
| Fondo claro | `#f6f8fb` | neutral de marca |
| Superficie clara | `#ffffff` | derivado |
| Texto claro muted | `#5d6775` | neutral de marca |
| **Acento único saturado** | `#f6811e` (naranja) | marca — <5 % del área |
| Verde secundario | `#5fbd44` | marca |
| Verde profundo / éxito | `#01825b` · `#2f8d3c` · `#0b4c28` | marca |
| Hairline dark | `rgba(255,255,255,0.07)` | derivado |
| Hairline light | `rgba(24,36,44,0.10)` | derivado |

**Excepción de marca** (skill: "cuando el brand spec lo usa deja de ser cliché"): naranja + verdes conviven por exigencias de identidad; se dosifican → 1 acento naranja vivo por vista y 1 verde como toque funcional (íconos/estado), nunca más de 3 saturados simultáneos.

## Tipografía
- **Display**: [Space Grotesk](https://fonts.google.com/specimen/Space Grotesk) 600/700 — `-0.03em` (no Inter/Roboto/sistema: prohibidos por la skill).
- **Cuerpo**: Manrope 400–700, 16–17px, line-height 1.6.
- **Labels**: 11–12px MAYÚSCULAS, letter-spacing `0.14em`.
- Ratio h1/cuerpo ≈ 4–5× (clamp fluid).

## Espaciado · Radio · Sombras · Motion
- **Spacing** (8pt): 4 / 8 / 16 / 24 / 40 / 64 / 96.
- **Radius**: 6 (UI) · 12 (tarjetas) · 16 (paneles). **Nunca > 16.**
- **Sombras**: mínimas, `0 12px 40px rgba(0,0,0,.35)` en paneles elevated; sin glow ni sombras de color.
- **Motion**: hover 150ms ease-out; transiciones de layout `cubic-bezier(0.22,1,0.36,1)` 350–450ms; zoom del slider 16s ease-in-out; **`prefers-reduced-motion: reduce`** → sin zoom, slider estático en la primera diapositiva.

## Reglas y anti-clichés aplicadas
- Hairlines `1px` separando paneles (firma Linear).
- Acento naranja solo en CTAs / estado activo / labels / focos — nunca en fondos de cuerpo.
- Otro sin emojis, sin gradientes púrpura, sin tarjetas con borde izquierdo, sin imágenes dibujadas en SVG.
- Logos y fotografías → **assets reales** (imgur), sin sustitutos de silueta CSS.
- `lang="es"`, `alt` descriptivos, focus visible naranja, targets táctiles ≥ 44px y ≥ 16px de texto.

## Assets de marca
- Logo header/footer: `https://i.imgur.com/dsjyB0p.png`
- Slider hero: `https://i.imgur.com/nrW9elB.png` (2239×1024, slides 1 y 2), `https://i.imgur.com/9P3znaP.png` (830×950, slide 3) → `object-fit: contain`, centradas, zoom Ken Burns.
- Marcas: `https://i.imgur.com/MRtZVE1.png` (GASMAX autoglp), `https://i.imgur.com/3nuryck.png` (GASMAX), `https://i.imgur.com/2Pjja9B.png` (TAME Gas).
- WhatsApp/CTAs: `https://wa.me/573225472787` · Tel `+573225472787` · Emergencias `312 505 6736`.

## Contenido
100 % replicado de `index.html` (sin inventar secciones ni datos). Único archivo de salida: **`indexSKILL.html`** (raíz de megasReboot). `index.html` y `css/` actuales no se modifican.