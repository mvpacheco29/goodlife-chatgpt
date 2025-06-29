import Layout from "../components/Layout";
import Image from "next/image";

export default function SeguroViagem() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          Seguro Viagem
        </h1>
        <div className="mb-6 flex justify-center">
          <Image
            src="/seguro-viagem.jpg"
            alt="Seguro Viagem"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Viaje tranquilo com o seguro viagem GoodLife. Cobertura médica,
          odontológica, extravio de bagagem e assistência 24h para você
          aproveitar cada momento sem preocupação.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Cobertura médica e hospitalar internacional</li>
          <li>Assistência em caso de extravio de bagagem</li>
          <li>Reembolso de despesas médicas</li>
          <li>Atendimento 24h em português</li>
        </ul>
        <a
          href="/contato"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Simule agora
        </a>
      </section>
    </Layout>
  );
}
