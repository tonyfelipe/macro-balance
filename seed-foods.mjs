import { drizzle } from "drizzle-orm/mysql2";
import { foods } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const brazilianFoods = [
  // Proteínas
  { name: "Peito de frango grelhado", category: "Proteína", caloriesPer100g: "165", proteinPer100g: "31", carbsPer100g: "0", fatPer100g: "3.6", servingSize: "120", servingDescription: "1 filé médio" },
  { name: "Ovo cozido", category: "Proteína", caloriesPer100g: "155", proteinPer100g: "13", carbsPer100g: "1.1", fatPer100g: "11", servingSize: "50", servingDescription: "1 unidade" },
  { name: "Carne bovina magra", category: "Proteína", caloriesPer100g: "250", proteinPer100g: "26", carbsPer100g: "0", fatPer100g: "17", servingSize: "100", servingDescription: "1 bife médio" },
  { name: "Tilápia grelhada", category: "Proteína", caloriesPer100g: "96", proteinPer100g: "20", carbsPer100g: "0", fatPer100g: "1.7", servingSize: "150", servingDescription: "1 filé" },
  { name: "Peito de peru fatiado", category: "Proteína", caloriesPer100g: "104", proteinPer100g: "22", carbsPer100g: "1", fatPer100g: "1.5", servingSize: "30", servingDescription: "3 fatias" },
  
  // Carboidratos
  { name: "Arroz branco cozido", category: "Carboidrato", caloriesPer100g: "130", proteinPer100g: "2.7", carbsPer100g: "28", fatPer100g: "0.3", servingSize: "100", servingDescription: "4 colheres de sopa" },
  { name: "Batata doce cozida", category: "Carboidrato", caloriesPer100g: "86", proteinPer100g: "1.6", carbsPer100g: "20", fatPer100g: "0.1", servingSize: "150", servingDescription: "1 unidade média" },
  { name: "Macarrão integral cozido", category: "Carboidrato", caloriesPer100g: "124", proteinPer100g: "5", carbsPer100g: "26", fatPer100g: "0.5", servingSize: "100", servingDescription: "1 pegador" },
  { name: "Pão francês", category: "Carboidrato", caloriesPer100g: "300", proteinPer100g: "9", carbsPer100g: "58", fatPer100g: "3.5", servingSize: "50", servingDescription: "1 unidade" },
  { name: "Aveia em flocos", category: "Carboidrato", caloriesPer100g: "389", proteinPer100g: "17", carbsPer100g: "66", fatPer100g: "7", servingSize: "30", servingDescription: "3 colheres de sopa" },
  { name: "Banana", category: "Carboidrato", caloriesPer100g: "89", proteinPer100g: "1.1", carbsPer100g: "23", fatPer100g: "0.3", servingSize: "120", servingDescription: "1 unidade média" },
  { name: "Tapioca", category: "Carboidrato", caloriesPer100g: "358", proteinPer100g: "0.6", carbsPer100g: "88", fatPer100g: "0.3", servingSize: "50", servingDescription: "1 unidade" },
  
  // Gorduras saudáveis
  { name: "Abacate", category: "Gordura", caloriesPer100g: "160", proteinPer100g: "2", carbsPer100g: "8.5", fatPer100g: "15", servingSize: "100", servingDescription: "1/2 unidade" },
  { name: "Azeite de oliva", category: "Gordura", caloriesPer100g: "884", proteinPer100g: "0", carbsPer100g: "0", fatPer100g: "100", servingSize: "10", servingDescription: "1 colher de sopa" },
  { name: "Castanha do Pará", category: "Gordura", caloriesPer100g: "656", proteinPer100g: "14", carbsPer100g: "12", fatPer100g: "66", servingSize: "10", servingDescription: "2 unidades" },
  { name: "Amendoim", category: "Gordura", caloriesPer100g: "567", proteinPer100g: "26", carbsPer100g: "16", fatPer100g: "49", servingSize: "30", servingDescription: "1 punhado" },
  
  // Laticínios
  { name: "Leite desnatado", category: "Laticínio", caloriesPer100g: "34", proteinPer100g: "3.4", carbsPer100g: "5", fatPer100g: "0.1", servingSize: "200", servingDescription: "1 copo" },
  { name: "Iogurte natural", category: "Laticínio", caloriesPer100g: "61", proteinPer100g: "3.5", carbsPer100g: "4.7", fatPer100g: "3.3", servingSize: "170", servingDescription: "1 pote" },
  { name: "Queijo minas frescal", category: "Laticínio", caloriesPer100g: "264", proteinPer100g: "17", carbsPer100g: "3", fatPer100g: "21", servingSize: "30", servingDescription: "1 fatia" },
  
  // Leguminosas
  { name: "Feijão preto cozido", category: "Leguminosa", caloriesPer100g: "77", proteinPer100g: "4.5", carbsPer100g: "14", fatPer100g: "0.5", servingSize: "100", servingDescription: "1 concha" },
  { name: "Lentilha cozida", category: "Leguminosa", caloriesPer100g: "116", proteinPer100g: "9", carbsPer100g: "20", fatPer100g: "0.4", servingSize: "100", servingDescription: "1 concha" },
  { name: "Grão de bico cozido", category: "Leguminosa", caloriesPer100g: "164", proteinPer100g: "8.9", carbsPer100g: "27", fatPer100g: "2.6", servingSize: "100", servingDescription: "1 concha" },
  
  // Vegetais
  { name: "Brócolis cozido", category: "Vegetal", caloriesPer100g: "35", proteinPer100g: "2.4", carbsPer100g: "7", fatPer100g: "0.4", servingSize: "100", servingDescription: "3 ramos" },
  { name: "Alface", category: "Vegetal", caloriesPer100g: "15", proteinPer100g: "1.4", carbsPer100g: "2.9", fatPer100g: "0.2", servingSize: "50", servingDescription: "1 prato raso" },
  { name: "Tomate", category: "Vegetal", caloriesPer100g: "18", proteinPer100g: "0.9", carbsPer100g: "3.9", fatPer100g: "0.2", servingSize: "100", servingDescription: "1 unidade média" },
];

async function seed() {
  console.log("Iniciando seed de alimentos...");
  
  for (const food of brazilianFoods) {
    await db.insert(foods).values(food);
  }
  
  console.log(`✅ ${brazilianFoods.length} alimentos inseridos com sucesso!`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Erro ao popular banco:", error);
  process.exit(1);
});
