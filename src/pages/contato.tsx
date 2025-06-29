import Layout from "../components/Layout";
import LeadForm from "../components/LeadForm";
import Image from "next/image";

export default function Contato() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          Fale com um consultor
        </h1>
        <div className="mb-6 flex justify-center">
          <Image
            src="/contato.jpg"
            alt="Contato GoodLife"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Preencha o formulário e nossa equipe entrará em contato para tirar
          suas dúvidas e apresentar a melhor solução para você.
        </p>
        <LeadForm />
        <div className="mt-6 text-gray-600">
          <p>
            Ou, se preferir, fale direto pelo WhatsApp:{" "}
            <a
              href="https://wa.me/5511999999999"
              className="text-blue-700 underline"
            >
              Clique aqui
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
