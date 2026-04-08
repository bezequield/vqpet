export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        <div className="flex-1 flex flex-col min-w-0">
          <span className="text-xs text-gray-400 leading-none mb-0.5 truncate">VQPET H · Glucómetro Veterinario</span>
          <span className="text-sm font-black text-gray-900 truncate">Preventa activa · Stock limitado ✦</span>
        </div>
        <a
          href="#preventa"
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg shadow-pink-200 transition-all active:scale-95 whitespace-nowrap"
        >
          Conseguí el tuyo
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
