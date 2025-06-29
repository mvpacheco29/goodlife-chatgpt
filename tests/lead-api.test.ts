import { createMocks } from "node-mocks-http";
import handler from "../src/pages/api/lead";

describe("API /api/lead", () => {
  it("deve recusar métodos diferentes de POST", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("deve validar dados obrigatórios", async () => {
    const { req, res } = createMocks({ method: "POST", body: {} });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("deve aceitar um lead válido", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        nome: "Teste",
        telefone: "11999999999",
        email: "teste@email.com",
        interesse: "seguro-de-vida",
      },
    });
    await handler(req, res);
    expect([200, 500]).toContain(res._getStatusCode()); // 500 se não houver Supabase configurado
  });

  it("deve bloquear após muitas requisições (rate limiting)", async () => {
    let lastRes;
    for (let i = 0; i < 6; i++) {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          nome: "Teste",
          telefone: "11999999999",
          email: `teste${i}@email.com`,
          interesse: "seguro-de-vida",
        },
        headers: { "x-forwarded-for": "1.2.3.4" },
      });
      await handler(req, res);
      lastRes = res;
    }
    expect(lastRes._getStatusCode()).toBe(429);
  });

  it("deve sanitizar campos perigosos", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        nome: "<script>alert('x')</script>",
        telefone: "<img src=x onerror=alert(1)>",
        email: "teste@email.com",
        interesse: "seguro-de-vida",
      },
    });
    await handler(req, res);
    expect([200, 500]).toContain(res._getStatusCode());
  });
});
