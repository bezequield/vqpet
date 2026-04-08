"use client";

import { useState } from "react";

const kitItems = [
  "Glucómetro VQPET H",
  "10 tiras reactivas",
  "10 lancetas",
  "Lancing device ajustable",
  "Solución de control",
  "Batería incluida",
  "Estuche de transporte",
  "Manual en español",
];

const wholesaleItems = [
  "Glucómetro VQPET H × 10",
  "100 tiras reactivas",
  "100 lancetas",
  "10 lancing devices",
  "Soluciones de control × 10",
  "Baterías incluidas",
  "Estuches de transporte",
  "Material de reventa",
];

export default function CTASection() {
  const [tab, setTab] = useState<"individual" | "mayorista">("individual");

  return (
    <section
      id="preventa"
      className="relative py-24 md:py-32 px-5 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      {/* Background gradient blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-50 to-rose-50 opacity-60 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest mb-3">
            Preventa exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3 leading-tight">
            Conseguí el tuyo hoy
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Disponible para dueños de mascotas y para distribuidores o clínicas veterinarias.
          </p>

          {/* Audience tabs */}
          <div className="mt-6 inline-flex items-center gap-1 bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setTab("individual")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "individual"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              🐾 Para mi mascota
            </button>
            <button
              onClick={() => setTab("mayorista")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "mayorista"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              🏪 Mayorista / Clínica
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: kit contents */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-1">
                {tab === "individual" ? "Kit Starter — Todo lo que necesitás" : "Lote Mayorista — Ideal para clínicas y revendedores"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tab === "individual"
                  ? "Sin compras adicionales. Listo para usar desde el primer día."
                  : "Precio diferencial por volumen. Incluye material de reventa y soporte comercial."}
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3">
              {(tab === "individual" ? kitItems : wholesaleItems).map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {tab === "mayorista" && (
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Para distribuidores</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Consultá condiciones especiales para clínicas veterinarias, pet shops y distribuidores. Precio diferencial, soporte técnico y materiales de marketing incluidos.
                </p>
              </div>
            )}

            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Compra segura · Enviamos a toda Argentina y Latinoamérica
            </p>
          </div>

          {/* Right: CTA card */}
          <div className="glass-pink rounded-3xl p-8 shadow-2xl shadow-pink-100 flex flex-col gap-6 border border-pink-100">
            {/* Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-pink-500 bg-pink-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
                {tab === "individual" ? "Preventa" : "Mayorista"}
              </span>
              <span className="text-xs text-gray-400 font-medium">Stock limitado</span>
            </div>

            {/* Price hint */}
            <div>
              <p className="text-sm text-gray-400 mb-1">
                {tab === "individual" ? "Precio preventa especial" : "Precio por volumen"}
              </p>
              <p className="text-4xl font-black text-gray-900">
                {tab === "individual" ? "Kit Starter" : "Lote Mayorista"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {tab === "individual"
                  ? "Consultá precio y disponibilidad vía Instagram o WhatsApp."
                  : "Escribinos para condiciones especiales, precios al por mayor y distribución."}
              </p>
            </div>

            {/* Primary CTA */}
            <a
              href="https://www.instagram.com/vqpet/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-pink-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {tab === "individual" ? "Conseguí el tuyo en Instagram" : "Consultá precio mayorista"}
            </a>

            {/* Secondary */}
            <a
              href={
                tab === "mayorista"
                  ? "https://wa.me/5491100000000?text=Hola%20soy%20Mayorista%2FClinica%20y%20me%20gustar%C3%ADa%20adquirir%20un%20lote%20de%20glucometros%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                  : "https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20VQPET%20Gluc%C3%B3metro"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-green-50 text-gray-700 hover:text-green-700 font-semibold py-4 px-6 rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribinos por WhatsApp
            </a>

            <p className="text-center text-xs text-gray-400">
              Respondemos en menos de 24 hs · Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
