// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header className="p-4 bg-gray-200 dark:bg-gray-800">
          <h1 className="text-2xl">Blog / Portfolio</h1>
          {/* Agrega cualquier otro elemento de navegación aquí */}
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
