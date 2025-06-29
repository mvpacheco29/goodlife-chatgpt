import Layout from "../components/Layout";
import Image from "next/image";

export default function Ajuda() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          Ajuda (FAQ)
        </h1>
        <div className="mb-6 flex justify-center">
          <Image
            src="/faq.jpg"
            alt="Perguntas Frequentes"
            width={400}
            height={210}
            className="rounded-lg shadow"
          />
        </div>
        <div className="text-left text-gray-700 space-y-4">
          <div>
            <strong>Como faço para contratar um seguro?</strong>
            <p>
              Basta acessar a página de contato, preencher o formulário e um
              consultor entrará em contato.
            </p>
          </div>
          <div>
            <strong>Quais documentos são necessários?</strong>
            <p>
              RG, CPF e comprovante de residência. Para empresas, CNPJ e
              contrato social.
            </p>
          </div>
          <div>
            <strong>O atendimento é nacional?</strong>
            <p>
              Sim, atendemos em todo o Brasil, inclusive via WhatsApp e e-mail.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
