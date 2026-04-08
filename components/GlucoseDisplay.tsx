"use client";

import { useEffect, useState } from "react";

const readings = [87, 142, 95, 113, 76, 128, 101];

export default function GlucoseDisplay() {
  const [value, setValue] = useState(readings[0]);
  const [idx, setIdx] = useState(0);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setTimeout(() => {
        setIdx((i) => {
          const next = (i + 1) % readings.length;
          setValue(readings[next]);
          return next;
        });
        setScanning(false);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const status = value < 80 ? "Bajo" : value > 130 ? "Alto" : "Normal";
  const statusColor =
    value < 80
      ? "text-amber-500"
      : value > 130
      ? "text-rose-500"
      : "text-emerald-500";

  return (
    <div className="relative w-full max-w-sm">
      {/* Glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full border border-pink-200 opacity-40 animate-pulse-ring" />
        <div className="absolute w-48 h-48 rounded-full border border-pink-300 opacity-20 animate-pulse-ring delay-500" />
      </div>

      {/* Main card — device mock */}
      <div className="relative animate-float glass-pink rounded-3xl shadow-2xl shadow-pink-100 border border-pink-100 overflow-hidden mx-auto w-[280px]">
        {/* Scan line */}
        {scanning && (
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scanline z-10" />
        )}

        {/* Top bar */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-medium uppercase tracking-widest">VQPET H</p>
            <p className="text-white text-sm font-bold">Monitor Veterinario</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        {/* Screen */}
        <div className="px-5 py-6 bg-white/60">
          {/* Glucose value */}
          <div className="flex items-end gap-2 mb-1">
            <span className="text-6xl font-black text-gray-900 tabular-nums leading-none">{value}</span>
            <div className="flex flex-col pb-1">
              <span className="text-sm font-semibold text-gray-400">mg/dL</span>
              <span className={`text-xs font-bold ${statusColor}`}>{status}</span>
            </div>
          </div>

          {/* Graph bars */}
          <div className="flex items-end gap-1 h-12 my-4">
            {readings.map((r, i) => {
              const h = Math.round(((r - 70) / (160 - 70)) * 100);
              const isActive = i === idx;
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-500 ${
                    isActive ? "bg-pink-500" : "bg-pink-200"
                  }`}
                  style={{ height: `${Math.max(h, 8)}%` }}
                />
              );
            })}
          </div>

          {/* Info row */}
          <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3 mt-2">
            <span>Última medición</span>
            <span className="font-semibold text-gray-600">hace 5 seg</span>
          </div>

          {/* Range indicator */}
          <div className="mt-3 bg-gray-50 rounded-xl px-3 py-2 flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-amber-300 via-emerald-400 to-rose-400" />
            <span className="text-xs text-gray-400 whitespace-nowrap">10 – 600 mg/dL</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="px-5 pb-4 bg-white/40">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Conectado · Paciente: Max 🐾
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 glass rounded-2xl px-3 py-2 shadow-lg shadow-pink-100 flex items-center gap-2 border border-pink-100">
        <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-bold text-gray-700">5 segundos</span>
      </div>

      {/* Floating badge 2 */}
      <div className="absolute -bottom-3 -left-3 glass rounded-2xl px-3 py-2 shadow-lg shadow-pink-100 flex items-center gap-2 border border-pink-100">
        <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-bold text-gray-700">Calibrado para mascotas</span>
      </div>
    </div>
  );
}
