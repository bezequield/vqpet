# BITÁCORA VQPET — Plan de Optimización Web

## Objetivos del sprint

- Integrar imágenes reales (glucómetro, logo VQPET, profesional con glucómetro) para dar humanismo
- Cambiar "Sumate a la preventa" → "Conseguí el tuyo"
- Adaptar la web para dos audiencias: **mayoristas** e **individuales**
- Optimizar para mobile

---

## Iteración 1 — Imágenes + CTA + Audiencia dual

### Tareas

- [x] Copiar imágenes a `public/` con nombres limpios
  - `glucometro.png` → `public/glucometro.png`
  - `logo vqpet.png` → `public/logo-vqpet.png`
  - `profesional con glucometro.png` → `public/profesional-con-glucometro.png`
- [x] **Navbar**: reemplazar círculo "VQ" por `logo-vqpet.png`
- [x] **Footer**: reemplazar círculo "VQ" por `logo-vqpet.png`
- [x] **HeroSection**: mostrar `glucometro.png` como imagen principal del producto
- [x] **HeroSection**: cambiar "Sumate a la preventa" → "Conseguí el tuyo"
- [x] **HeroSection**: ampliar headline a perros y gatos
- [x] **Nueva sección `ProofSection`**: imagen del profesional con glucómetro + copy humanizado
- [x] **CTASection**: agregar tabs/segmentos para mayoristas e individuales
- [x] `page.tsx`: incluir nueva sección `ProofSection`

---

## Iteración 2 — Mobile polish + refinamiento

### Tareas

- [x] Revisar y ajustar padding/font-sizes en mobile en todas las secciones
- [x] Optimizar imagen profesional en mobile (aspect ratio, object-fit)
- [x] `StickyCTA`: mejorar para mostrar contenido relevante a ambas audiencias
- [x] Ajustar grid de beneficios para 1 columna en mobile (<375px)
- [x] Mejorar contraste y legibilidad del ticker strip en mobile
- [x] Asegurar que el CTA de mayoristas sea visible sin scroll en tablet

---

## Notas técnicas

- Framework: Next.js (App Router) con Tailwind CSS 4
- Imágenes servidas desde `public/` usando `next/image`
- Las imágenes con espacios en el nombre fueron renombradas al copiarlas
- No se usaron mocks ni datos externos; todo el contenido es estático
