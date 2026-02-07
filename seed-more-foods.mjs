import { drizzle } from "drizzle-orm/mysql2";
import { foods } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const moreFoods = [
  // Mais Proteínas
  { name: "Salmão grelhado", category: "Proteína", caloriesPer100g: "206", proteinPer100g: "22", carbsPer100g: "0", fatPer100g: "13", servingSize: "120", servingDescription: "1 filé" },
  { name: "Atum em lata", category: "Proteína", caloriesPer100g: "116", proteinPer100g: "26", carbsPer100g: "0", fatPer100g: "1", servingSize: "80", servingDescription: "1 lata pequena" },
  { name: "Camarão", category: "Proteína", caloriesPer100g: "99", proteinPer100g: "24", carbsPer100g: "0.2", fatPer100g: "0.3", servingSize: "100", servingDescription: "8-10 unidades" },
  { name: "Frango desfiado", category: "Proteína", caloriesPer100g: "159", proteinPer100g: "30", carbsPer100g: "0", fatPer100g: "4", servingSize: "100", servingDescription: "1 xícara" },
  { name: "Carne moída magra", category: "Proteína", caloriesPer100g: "209", proteinPer100g: "26", carbsPer100g: "0", fatPer100g: "11", servingSize: "100", servingDescription: "1 concha" },
  { name: "Porco magro", category: "Proteína", caloriesPer100g: "242", proteinPer100g: "27", carbsPer100g: "0", fatPer100g: "14", servingSize: "100", servingDescription: "1 bife" },
  { name: "Sardinha em lata", category: "Proteína", caloriesPer100g: "208", proteinPer100g: "25", carbsPer100g: "0", fatPer100g: "11", servingSize: "80", servingDescription: "1 lata" },
  { name: "Ovo mexido", category: "Proteína", caloriesPer100g: "149", proteinPer100g: "10", carbsPer100g: "1.6", fatPer100g: "11", servingSize: "100", servingDescription: "2 ovos" },
  { name: "Clara de ovo", category: "Proteína", caloriesPer100g: "52", proteinPer100g: "11", carbsPer100g: "0.7", fatPer100g: "0.2", servingSize: "33", servingDescription: "1 clara" },
  { name: "Whey protein", category: "Proteína", caloriesPer100g: "400", proteinPer100g: "80", carbsPer100g: "8", fatPer100g: "5", servingSize: "30", servingDescription: "1 scoop" },
  
  // Mais Carboidratos
  { name: "Batata inglesa cozida", category: "Carboidrato", caloriesPer100g: "87", proteinPer100g: "2", carbsPer100g: "20", fatPer100g: "0.1", servingSize: "150", servingDescription: "1 unidade média" },
  { name: "Mandioca cozida", category: "Carboidrato", caloriesPer100g: "125", proteinPer100g: "0.6", carbsPer100g: "30", fatPer100g: "0.3", servingSize: "100", servingDescription: "1 pedaço" },
  { name: "Arroz integral cozido", category: "Carboidrato", caloriesPer100g: "111", proteinPer100g: "2.6", carbsPer100g: "23", fatPer100g: "0.9", servingSize: "100", servingDescription: "4 colheres de sopa" },
  { name: "Quinoa cozida", category: "Carboidrato", caloriesPer100g: "120", proteinPer100g: "4.4", carbsPer100g: "21", fatPer100g: "1.9", servingSize: "100", servingDescription: "4 colheres de sopa" },
  { name: "Pão integral", category: "Carboidrato", caloriesPer100g: "247", proteinPer100g: "13", carbsPer100g: "41", fatPer100g: "4", servingSize: "50", servingDescription: "2 fatias" },
  { name: "Maçã", category: "Carboidrato", caloriesPer100g: "52", proteinPer100g: "0.3", carbsPer100g: "14", fatPer100g: "0.2", servingSize: "130", servingDescription: "1 unidade média" },
  { name: "Mamão papaya", category: "Carboidrato", caloriesPer100g: "43", proteinPer100g: "0.5", carbsPer100g: "11", fatPer100g: "0.3", servingSize: "140", servingDescription: "1 fatia" },
  { name: "Melancia", category: "Carboidrato", caloriesPer100g: "30", proteinPer100g: "0.6", carbsPer100g: "8", fatPer100g: "0.2", servingSize: "150", servingDescription: "1 fatia" },
  { name: "Laranja", category: "Carboidrato", caloriesPer100g: "47", proteinPer100g: "0.9", carbsPer100g: "12", fatPer100g: "0.1", servingSize: "130", servingDescription: "1 unidade" },
  { name: "Morango", category: "Carboidrato", caloriesPer100g: "32", proteinPer100g: "0.7", carbsPer100g: "8", fatPer100g: "0.3", servingSize: "100", servingDescription: "7-8 unidades" },
  { name: "Granola", category: "Carboidrato", caloriesPer100g: "471", proteinPer100g: "13", carbsPer100g: "64", fatPer100g: "20", servingSize: "40", servingDescription: "4 colheres de sopa" },
  { name: "Mel", category: "Carboidrato", caloriesPer100g: "304", proteinPer100g: "0.3", carbsPer100g: "82", fatPer100g: "0", servingSize: "20", servingDescription: "1 colher de sopa" },
  
  // Mais Gorduras
  { name: "Salmão (gordura)", category: "Gordura", caloriesPer100g: "206", proteinPer100g: "22", carbsPer100g: "0", fatPer100g: "13", servingSize: "120", servingDescription: "1 filé" },
  { name: "Pasta de amendoim", category: "Gordura", caloriesPer100g: "588", proteinPer100g: "25", carbsPer100g: "20", fatPer100g: "50", servingSize: "20", servingDescription: "1 colher de sopa" },
  { name: "Amêndoas", category: "Gordura", caloriesPer100g: "579", proteinPer100g: "21", carbsPer100g: "22", fatPer100g: "50", servingSize: "30", servingDescription: "1 punhado" },
  { name: "Nozes", category: "Gordura", caloriesPer100g: "654", proteinPer100g: "15", carbsPer100g: "14", fatPer100g: "65", servingSize: "30", servingDescription: "7-8 unidades" },
  { name: "Coco ralado", category: "Gordura", caloriesPer100g: "354", proteinPer100g: "3.3", carbsPer100g: "15", fatPer100g: "33", servingSize: "20", servingDescription: "2 colheres de sopa" },
  { name: "Azeite de coco", category: "Gordura", caloriesPer100g: "862", proteinPer100g: "0", carbsPer100g: "0", fatPer100g: "100", servingSize: "10", servingDescription: "1 colher de sopa" },
  { name: "Manteiga", category: "Gordura", caloriesPer100g: "717", proteinPer100g: "0.9", carbsPer100g: "0.1", fatPer100g: "81", servingSize: "10", servingDescription: "1 colher de chá" },
  
  // Mais Laticínios
  { name: "Leite integral", category: "Laticínio", caloriesPer100g: "61", proteinPer100g: "3.2", carbsPer100g: "4.8", fatPer100g: "3.3", servingSize: "200", servingDescription: "1 copo" },
  { name: "Iogurte grego", category: "Laticínio", caloriesPer100g: "97", proteinPer100g: "9", carbsPer100g: "3.6", fatPer100g: "5", servingSize: "170", servingDescription: "1 pote" },
  { name: "Queijo cottage", category: "Laticínio", caloriesPer100g: "98", proteinPer100g: "11", carbsPer100g: "3.4", fatPer100g: "4.3", servingSize: "100", servingDescription: "4 colheres de sopa" },
  { name: "Requeijão light", category: "Laticínio", caloriesPer100g: "140", proteinPer100g: "8", carbsPer100g: "5", fatPer100g: "9", servingSize: "30", servingDescription: "1 colher de sopa" },
  { name: "Queijo mussarela", category: "Laticínio", caloriesPer100g: "280", proteinPer100g: "18", carbsPer100g: "3", fatPer100g: "22", servingSize: "30", servingDescription: "1 fatia" },
  
  // Mais Leguminosas
  { name: "Feijão carioca cozido", category: "Leguminosa", caloriesPer100g: "76", proteinPer100g: "4.8", carbsPer100g: "13.6", fatPer100g: "0.5", servingSize: "100", servingDescription: "1 concha" },
  { name: "Ervilha cozida", category: "Leguminosa", caloriesPer100g: "84", proteinPer100g: "5.4", carbsPer100g: "15.6", fatPer100g: "0.4", servingSize: "100", servingDescription: "1 concha" },
  { name: "Soja cozida", category: "Leguminosa", caloriesPer100g: "173", proteinPer100g: "16.6", carbsPer100g: "9.9", fatPer100g: "9", servingSize: "100", servingDescription: "1 concha" },
  
  // Mais Vegetais
  { name: "Couve", category: "Vegetal", caloriesPer100g: "33", proteinPer100g: "2.9", carbsPer100g: "5.6", fatPer100g: "0.7", servingSize: "50", servingDescription: "1 xícara picada" },
  { name: "Espinafre", category: "Vegetal", caloriesPer100g: "23", proteinPer100g: "2.9", carbsPer100g: "3.6", fatPer100g: "0.4", servingSize: "50", servingDescription: "1 xícara" },
  { name: "Cenoura", category: "Vegetal", caloriesPer100g: "41", proteinPer100g: "0.9", carbsPer100g: "10", fatPer100g: "0.2", servingSize: "100", servingDescription: "1 unidade média" },
  { name: "Pepino", category: "Vegetal", caloriesPer100g: "15", proteinPer100g: "0.7", carbsPer100g: "3.6", fatPer100g: "0.1", servingSize: "100", servingDescription: "1/2 unidade" },
  { name: "Abobrinha", category: "Vegetal", caloriesPer100g: "17", proteinPer100g: "1.2", carbsPer100g: "3.1", fatPer100g: "0.3", servingSize: "100", servingDescription: "1/2 unidade" },
  { name: "Berinjela", category: "Vegetal", caloriesPer100g: "25", proteinPer100g: "1", carbsPer100g: "6", fatPer100g: "0.2", servingSize: "100", servingDescription: "1/2 unidade" },
  { name: "Cebola", category: "Vegetal", caloriesPer100g: "40", proteinPer100g: "1.1", carbsPer100g: "9.3", fatPer100g: "0.1", servingSize: "100", servingDescription: "1 unidade média" },
  { name: "Pimentão", category: "Vegetal", caloriesPer100g: "31", proteinPer100g: "1", carbsPer100g: "6", fatPer100g: "0.3", servingSize: "100", servingDescription: "1 unidade" },
  { name: "Rúcula", category: "Vegetal", caloriesPer100g: "25", proteinPer100g: "2.6", carbsPer100g: "3.7", fatPer100g: "0.7", servingSize: "50", servingDescription: "1 xícara" },
  { name: "Beterraba", category: "Vegetal", caloriesPer100g: "43", proteinPer100g: "1.6", carbsPer100g: "10", fatPer100g: "0.2", servingSize: "100", servingDescription: "1 unidade pequena" },
  { name: "Abóbora", category: "Vegetal", caloriesPer100g: "26", proteinPer100g: "1", carbsPer100g: "6.5", fatPer100g: "0.1", servingSize: "100", servingDescription: "1 fatia" },
];

async function seed() {
  console.log("Adicionando mais alimentos ao banco...");
  
  for (const food of moreFoods) {
    await db.insert(foods).values(food);
  }
  
  console.log(`✅ ${moreFoods.length} alimentos adicionados com sucesso!`);
  console.log(`Total no banco: ${25 + moreFoods.length} alimentos`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Erro ao adicionar alimentos:", error);
  process.exit(1);
});
