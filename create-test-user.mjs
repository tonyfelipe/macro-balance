import { drizzle } from "drizzle-orm/mysql2";
import bcrypt from "bcryptjs";

const db = drizzle(process.env.DATABASE_URL);

async function createTestUser() {
  const hashedPassword = await bcrypt.hash("teste123", 10);
  
  await db.execute(`
    INSERT INTO users (email, password, name, createdAt, updatedAt, lastSignedIn)
    VALUES ('teste@exemplo.com', '${hashedPassword}', 'Usuário Teste', NOW(), NOW(), NOW())
    ON DUPLICATE KEY UPDATE password = '${hashedPassword}'
  `);
  
  console.log("✅ Usuário de teste criado!");
  console.log("📧 Email: teste@exemplo.com");
  console.log("🔑 Senha: teste123");
  
  process.exit(0);
}

createTestUser().catch(console.error);
