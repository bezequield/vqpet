import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Preparás a tu mascota",
    description:
      "Elegís el punto de extracción: pata, oreja o zona ventral. Solo necesitás una mínima gota de sangre. El lancet incluido hace que el proceso sea rápido y casi indoloro.",
    detail: "Solo 0.5 μL de sangre",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-3.595.719A9.001 9.001 0 0112 21a9.001 9.001 0 01-5.54-1.968l-3.595-.719c-1.718-.293-2.3-2.379-1.067-3.611L3.2 13.3" />
      </svg>
    ),
    title: "Insertás la tira reactiva",
    description:
      "La tira de 8 electrodos se calibra automáticamente al insertarse. Sin códigos manuales. Sin errores de configuración. El dispositivo reconoce la muestra de inmediato.",
    detail: "Auto-calibración instantánea",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Resultado en 5 segundos",
    description:
      "La pantalla muestra el valor exacto de glucosa en sangre, calibrado para el metabolismo de tu perro o gato. No es un glucómetro humano adaptado: es tecnología 100% veterinaria.",
    detail: "Rango 10–600 mg/dL",
  },
  {
    number: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Seguís el historial",
    description:
      "El dispositivo guarda las últimas 300 mediciones con fecha y hora. Llevás el registro completo al veterinario en cada visita. Sin apps, sin sincronización. Simple y confiable.",
    detail: "300 mediciones guardadas",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32 px-5 bg-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      {/* Glucómetro decorativo — visible solo en desktop */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.08] z-0">
        <Image
          src="/glucometro.png"
          alt=""
          width={440}
          height={440}
          className="w-[440px] h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest mb-3">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Cómo funciona VQPET
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cuatro pasos simples para tener el control total de la salud de tu mascota, desde casa.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-4 p-6 rounded-3xl border border-gray-100 bg-white hover:border-pink-200 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-pink-200 z-10" />
              )}

              {/* Number + icon */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 group-hover:bg-pink-500 flex items-center justify-center text-pink-500 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-pink-100 transition-colors leading-none">
                  {step.number}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-gray-900 text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Detail badge */}
              <div className="mt-auto">
                <span className="inline-block text-xs font-semibold text-pink-500 bg-pink-50 group-hover:bg-pink-100 px-3 py-1 rounded-full transition-colors">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Compatible con{" "}
            <span className="font-semibold text-gray-600">perros y gatos</span>. Kit completo incluye glucómetro,
            lancetas, tiras reactivas y estuche.
          </p>
        </div>
      </div>
    </section>
  );
}
