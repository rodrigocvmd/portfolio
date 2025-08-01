// src/app/curriculo/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo | Meu Portfólio",
  description: "Consulte meu currículo completo.",
};

export default function CurriculoPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl text-center mb-8">
        Meu Currículo
      </h1>
      <div className="relative w-full h-[80vh] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/files/curriculo.pdf"
          title="Currículo de Rodrigo Carvalho"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
