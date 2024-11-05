// src/app/layout.js
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';

// Configuración de las fuentes locales
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Yixha - Recetas Personalizadas',
  description: 'Encuentra recetas usando los ingredientes que tienes en casa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-100 text-gray-800`}
      >
        {/* Header global para todas las páginas */}
        <Header />
        
        {/* Contenedor para el contenido principal */}
        <main className="max-w-4xl mx-auto p-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
