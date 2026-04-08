import GlucoseDisplay from "@/components/GlucoseDisplay";

export default function HeroSection() {
  return (
    <section className="hero-bg grid-dots relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-5 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-pink-100 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-pink-50 blur-3xl opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center self-center md:self-start gap-2 glass-pink rounded-full px-4 py-1.5 text-xs font-semibold text-pink-600 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Glucómetro Veterinario · Preventa Activa
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            El futuro del cuidado{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              diabético
            </span>{" "}
            de tu perro está aquí.
          </h1>

          {/* Sub */}
          <p className="animate-fade-up delay-200 text-base md:text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
            VQPET H es el primer glucómetro calibrado específicamente para mascotas. Resultados en{" "}
            <strong className="text-gray-700">5 segundos</strong>, con solo{" "}
            <strong className="text-gray-700">0.5 μL de sangre</strong>. Menos dolor, más precisión,
            más tranquilidad para vos y para él.
          </p>

          {/* Stats row */}
          <div className="animate-fade-up delay-300 flex items-center justify-center md:justify-start gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-black text-pink-500">5s</span>
              <span className="text-xs text-gray-400 font-medium">Resultado</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-black text-pink-500">0.5μL</span>
              <span className="text-xs text-gray-400 font-medium">De sangre</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-black text-pink-500">300</span>
              <span className="text-xs text-gray-400 font-medium">Mediciones</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#preventa"
              className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-pink-200 transition-all duration-200 hover:shadow-pink-300 hover:-translate-y-0.5"
            >
              Conseguí el tuyo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-pink-50 text-gray-700 font-semibold px-8 py-4 rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-200"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        {/* Product visual */}
        <div className="flex justify-center items-center order-1 md:order-2 animate-fade-up delay-200">
          <GlucoseDisplay />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-xs text-gray-400">Deslizá</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
