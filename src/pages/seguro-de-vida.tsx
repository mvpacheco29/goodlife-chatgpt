import Layout from "../components/Layout";
import Image from "next/image";

export default function SeguroDeVida() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          Seguro de Vida
        </h1>
        <div className="mb-6 flex justify-center">
          <Image
            src="/seguro-vida.jpg"
            alt="Seguro de Vida"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Proteja o futuro de quem você ama. O seguro de vida GoodLife oferece
          segurança financeira para sua família em momentos inesperados, com
          coberturas flexíveis e contratação 100% digital.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Indenização por morte natural ou acidental</li>
          <li>Cobertura para doenças graves</li>
          <li>Assistência funeral</li>
          <li>Proteção para cônjuge e filhos</li>
        </ul>
        <a
          href="/contato"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Quero saber mais
        </a>
      </section>
    </Layout>
  );
}
