import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

export default function BenefitsSection() {
    return (
        <section className="grid grid-cols-1 gap-4 px-4 py-8 mt-6 bg-white sm:grid-cols-3">
            <div className="flex items-center gap-4 p-4 transition rounded-lg shadow bg-pink-50 hover:shadow-md">
                <FontAwesomeIcon icon={faStar} className="text-2xl text-purple-600" />
                <div>
                    <h4 className="font-semibold text-purple-800 text-md">Produtos Exclusivos</h4>
                    <p className="text-sm text-gray-600">Escolha especial para você</p>
                </div>
            </div>

            <div className="flex items-center gap-4 p-4 transition rounded-lg shadow bg-pink-50 hover:shadow-md">
                <FontAwesomeIcon icon={faClock} className="text-2xl text-purple-600" />
                <div>
                    <h4 className="font-semibold text-purple-800 text-md">Compras Programadas</h4>
                    <p className="text-sm text-gray-600">Agende e economize</p>
                </div>
            </div>

            <div className="flex items-center gap-4 p-4 transition rounded-lg shadow bg-pink-50 hover:shadow-md">
                <FontAwesomeIcon icon={faBriefcaseMedical} className="text-2xl text-purple-600" />
                <div>
                    <h4 className="font-semibold text-purple-800 text-md">Serviços Pet</h4>
                    <p className="text-sm text-gray-600">Consultas e vacinas</p>
                </div>
            </div>
        </section>
    );
}
