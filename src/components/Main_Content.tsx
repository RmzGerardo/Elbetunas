import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Main_Content = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Sección de texto */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="info font-bold text-xl md:text-2xl mb-1">
              Hola, mi nombre es
            </h2>
            <h1 className="name font-bold text-4xl md:text-5xl tracking-tight">
              Gerardo Ramírez.
            </h1>
            <h3 className="text-sm md:text-base font-bold job mt-2">
              Desarrollador Full Stack JR
            </h3>
          </div>

          <div className="p-2 pl-0">
            <p className="info_personal font-bold text-sm md:text-base leading-relaxed text-slate-300">
              Soy Fullstack Junior Developer con +1 año de experiencia
              transformando sistemas legacy en soluciones modernas y escalables.
              Me apasiona estructurar bases de datos, diseñar lógicas de negocio
              robustas en el backend (Node.js/Express) y automatizar flujos de
              trabajo con Docker y CI/CD.
            </p>
          </div>

          {/* Información general / Botones */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold github w-40 h-11 rounded-lg flex justify-center items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
            >
              Github
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button
              type="button"
              className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold w-40 h-11 rounded-lg flex justify-center items-center transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
            >
              Ver proyectos
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
