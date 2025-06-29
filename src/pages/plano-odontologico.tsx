import Layout from "../components/Layout";
import Image from "next/image";

export default function PlanoOdontologico() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          Plano Odontológico
        </h1>
        <div className="mb-6 flex justify-center">
          <Image
            src="/plano-odontologico.jpg"
            alt="Plano Odontológico"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Sorria com tranquilidade! O plano odontológico GoodLife oferece ampla
          cobertura, rede credenciada nacional e atendimento de urgência para
          você e sua família.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Consultas, exames e tratamentos preventivos</li>
          <li>Urgência e emergência 24h</li>
          <li>Rede credenciada em todo o Brasil</li>
          <li>Planos familiares e empresariais</li>
        </ul>
        <a
          href="/contato"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Contrate já
        </a>
      </section>
    </Layout>
  );
}
