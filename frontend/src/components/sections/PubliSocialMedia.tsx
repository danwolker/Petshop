import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function PubliSocialMedia() {
  return (
    <section className="bg-gray-100 px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
      <div className="text-center sm:text-left space-y-1">
        <span className="block">Nos siga nas redes:</span>
        <div className="text-purple-800 flex flex-col sm:flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faInstagram} /> @Agropetdasgurias
          <FontAwesomeIcon icon={faFacebook} /> /agropetdasgurias
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="border border-gray-300 rounded px-3 py-2 text-sm w-64"
        />
        <button className="bg-purple-700 text-white px-4 py-2 rounded text-sm hover:bg-purple-800">
          Cadastre-se
        </button>
      </div>
    </section>
  );
}