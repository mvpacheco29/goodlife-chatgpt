import Layout from "../components/Layout";
import Image from "next/image";

export default function Obrigado() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
          Obrigado pelo contato!
        </h1>
        <div className="mb-8 flex justify-center">
          <Image
            src="/obrigado.jpg"
            alt="Obrigado"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <p className="text-lg text-gray-700 mb-8">
          Recebemos sua mensagem e em breve um consultor entrará em contato com
          você.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Voltar para a Home
        </a>
      </section>
    </Layout>
  );
}
