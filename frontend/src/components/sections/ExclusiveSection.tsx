import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function ExclusiveSection() {
  return (
    <section className="bg-white py-12 text-center px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Nossas Promoções</h2>
        <p className="text-gray-600 mb-4">Sessão exclusiva para anúncios de produtos de alto nível ou que estão em promoção relâmpago.</p>
        <Link to="/produtos" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
          Veja Mais <FontAwesomeIcon icon={faChevronCircleRight} />
        </Link>
      </div>
    </section>
  );
}