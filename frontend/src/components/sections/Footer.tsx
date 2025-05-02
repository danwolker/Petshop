import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white mt-12">
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        <div>
          <img src="/images/logoprincipal.png" alt="Agropet das Gurias" className="h-14 mb-2" />
          <p className="text-sm">MENSAGEM DA EMPRESA REFERENTE À MARCA</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Links úteis</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/">Cupons de Desconto</Link></li>
            <li><Link to="/">Depoimentos</Link></li>
            <li><Link to="/">Política da Empresa</Link></li>
            <li><Link to="/">Contate-nos</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-purple-800">
        © 2025 - Agropet das Gurias - Direitos Autorais
      </div>
    </footer>
  );
}
