import Image from "next/image";

export default function ProofSection() {
  return (
    <section className="relative py-20 md:py-28 px-5 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative order-1">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 -z-10" />
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-pink-100 border border-pink-100 aspect-[4/3] md:aspect-[3/4]">
            <Image
              src="/profesional-con-glucometro.png"
              alt="Veterinaria usando el glucómetro VQPET H"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating trust badge */}
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 shadow-lg border border-white/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-pink-200">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Tecnología validada</p>
              <p className="text-xs text-gray-500">Calibrado para fisiología veterinaria</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6 order-2 text-center md:text-left">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest self-center md:self-start">
            Confianza profesional
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            El mismo nivel de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              precisión
            </span>{" "}
            que usa tu veterinario.
          </h2>

          <p className="text-gray-500 leading-relaxed text-base md:text-lg">
            VQPET H no es una adaptación de glucómetro humano. Es un dispositivo diseñado desde cero para
            la fisiología de perros y gatos. Los mismos estándares que usan los profesionales, ahora
            en tus manos.
          </p>

          <ul className="flex flex-col gap-4">
            {[
              {
                icon: "🩺",
                title: "Para el uso clínico diario",
                text: "Resultados confiables para ajustes de insulina y control de diabetes en mascotas.",
              },
              {
                icon: "🏠",
                title: "Para el seguimiento en casa",
                text: "Sabés cómo está tu mascota sin necesitar una visita cada vez. Más tranquilidad, menos estrés.",
              },
              {
                icon: "📋",
                title: "Historial listo para el veterinario",
                text: "300 mediciones guardadas con fecha y hora. Llevás datos reales a cada consulta.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0 text-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#preventa"
            className="self-center md:self-start inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-pink-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            Conseguí el tuyo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
