import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

describe("Supabase Connection", () => {
  it("deve conectar e listar a tabela leads", async () => {
    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { data, error } = await supabase.from("leads").select("*").limit(1);
    expect(error).toBeNull();
    expect(Array.isArray(data)).toBe(true);
  });
});
