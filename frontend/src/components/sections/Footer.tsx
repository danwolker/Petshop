import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 text-white bg-purple-900">
      <div className="grid items-center gap-6 p-6 mx-auto max-w-7xl md:grid-cols-2">
        {/* LOGO CENTRALIZADA VERTICAL E HORIZONTAL */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/logoprincipal.png"
            alt="Agropet das Gurias"
            className="object-contain h-24 sm:h-28 md:h-32"
          />
        </div>

        {/* LINKS ÚTEIS */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-lg font-bold">Links úteis</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/">Cupons de Desconto</Link></li>
            <li><Link to="/">Depoimentos</Link></li>
            <li><Link to="/">Política da Empresa</Link></li>
            <li><Link to="/">Contate-nos</Link></li>
          </ul>
        </div>
      </div>

      <div className="py-4 text-xs text-center border-t border-purple-800">
        © 2025 - Agropet das Gurias - Direitos Autorais
      </div>
    </footer>
  );
}
