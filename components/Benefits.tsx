const benefits = [
  {
    emoji: "🩸",
    title: "Precisión veterinaria real",
    description:
      "Los perros y gatos tienen mayor hematocrito y glóbulos rojos más grandes que los humanos. VQPET calibra sus resultados para la fisiología real de tu mascota, no para la tuya.",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-100 hover:border-pink-300",
    tag: "Tecnología GDH-FAD",
  },
  {
    emoji: "⚡",
    title: "Más rápido que el veterinario",
    description:
      "5 segundos. Eso es todo lo que necesitás para saber si tu perro está en rango, bajo o alto. Sin esperas, sin traslados innecesarios. El control en tus manos.",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-100 hover:border-amber-300",
    tag: "5 segundos exactos",
  },
  {
    emoji: "😌",
    title: "Tranquilidad para el dueño",
    description:
      "La diabetes en perros genera angustia constante. VQPET te da la paz mental de saber, en cualquier momento del día, cómo está tu compañero. Dormís mejor. Él vive mejor.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100 hover:border-violet-300",
    tag: "Control 24/7",
  },
  {
    emoji: "🐾",
    title: "Mínimo dolor para tu mascota",
    description:
      "La punción es micro. Solo 0.5 μL de sangre de la oreja, pata o zona ventral. Tu perro ni lo siente. El lancet de profundidad ajustable minimiza el estrés en cada medición.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100 hover:border-emerald-300",
    tag: "0.5 μL de muestra",
  },
  {
    emoji: "📊",
    title: "Registro para el veterinario",
    description:
      "300 mediciones guardadas con fecha y hora. La próxima vez que vayas al veterinario, llevás un historial completo. Diagnósticos más precisos, ajustes de dosis más seguros.",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-100 hover:border-sky-300",
    tag: "300 mediciones",
  },
  {
    emoji: "🔋",
    title: "Duración que acompaña",
    description:
      "Una sola batería para más de 1.000 mediciones. No te quedás sin energía en el peor momento. Compacto, liviano y fácil de transportar donde vayas con tu perro.",
    color: "from-lime-50 to-green-50",
    border: "border-lime-100 hover:border-lime-300",
    tag: "+1.000 mediciones",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 md:py-32 px-5 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent" />

      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pink-100 opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest mb-3">
            Por qué VQPET
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            El cuidado que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              tu mascota
            </span>{" "}
            merece
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Diseñado para dueños que aman a sus mascotas tanto como un veterinario cuida a sus pacientes.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`group relative flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br ${b.color} border ${b.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default`}
            >
              {/* Emoji icon */}
              <div className="text-4xl leading-none">{b.emoji}</div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-black text-gray-900 text-base leading-tight">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              {/* Tag */}
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                <span className="text-xs font-semibold text-pink-600">{b.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ticker strip */}
        <div className="mt-16 overflow-hidden py-4 border-t border-b border-gray-100">
          <div className="flex animate-ticker whitespace-nowrap gap-10">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-10 flex-shrink-0">
                {[
                  "Calibrado 100% veterinario",
                  "5 segundos",
                  "0.5 μL de sangre",
                  "300 mediciones guardadas",
                  "Auto-calibración",
                  "Rango 10–600 mg/dL",
                  "Perros y gatos",
                  "Lancet incluido",
                  "Tecnología GDH-FAD",
                ].map((item, j) => (
                  <span key={j} className="inline-flex items-center gap-2.5 text-sm font-semibold text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-pink-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
