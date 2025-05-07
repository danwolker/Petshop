import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function PubliSocialMedia() {
  return (
    <section className="flex flex-col items-center px-4 py-10 space-y-4 text-center bg-gray-100">
      <div>
        <p className="text-base font-medium">Nos siga nas redes:</p>
        <div className="flex items-center justify-center gap-4 mt-1 text-purple-800">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faInstagram} />
            @Agropetdasgurias
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faFacebook} />
            /agropetdasgurias
          </span>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-800">
          Cadastre-se e receba nossas promoções
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="px-3 py-2 text-sm border border-gray-300 rounded w-72"
        />
        <button className="px-4 py-2 text-sm text-white bg-purple-700 rounded hover:bg-purple-800">
          Cadastre-se
        </button>
      </div>
    </section>
  );
}
