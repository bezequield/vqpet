import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VQPET — Glucómetro Veterinario para Perros y Gatos",
  description:
    "El primer glucómetro calibrado específicamente para mascotas. Monitoreá la glucosa de tu perro diabético en 5 segundos, sin dolor, desde casa.",
  keywords: ["glucómetro veterinario", "diabetes perros", "glucosa mascotas", "VQPET"],
  openGraph: {
    title: "VQPET — El futuro del cuidado diabético de tu perro",
    description: "Monitoreo de glucosa en 5 segundos. Calibrado para mascotas. No para humanos.",
    type: "website",
    url: "https://vqpet.vercel.app",
    images: [
      {
        url: "https://vqpet.vercel.app/profesional-con-glucometro.png",
        width: 1200,
        height: 630,
        alt: "Profesional veterinaria usando el glucómetro VQPET H",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VQPET — El futuro del cuidado diabético de tu perro",
    description: "Monitoreo de glucosa en 5 segundos. Calibrado para mascotas. No para humanos.",
    images: ["https://vqpet.vercel.app/profesional-con-glucometro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
