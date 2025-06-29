import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
          Bem-vindo à GoodLife Corretora de Seguros
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Proteja o que importa: Seguro de Vida, Seguro Viagem e Plano
          Odontológico para você e sua família.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src="/og-image.jpg"
            alt="GoodLife Corretora de Seguros"
            width={400}
            height={210}
            className="rounded-lg shadow"
            priority
          />
        </div>
        <a
          href="/contato"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Fale com um consultor
        </a>
      </section>
    </Layout>
  );
}
