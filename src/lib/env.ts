import { z } from "zod";

/**
 * Schema de validação para as variáveis de ambiente
 * Todas as variáveis são obrigatórias e devem ser strings não vazias
 */
const envSchema = z.object({
  NEXT_PUBLIC_COMPANY_NAME: z.string().min(1, "Nome da empresa é obrigatório"),
  NEXT_PUBLIC_COMPANY_TITLE: z.string().min(1, "Título da empresa é obrigatório"),
  NEXT_PUBLIC_COMPANY_DESCRIPTION: z.string().min(1, "Descrição da empresa é obrigatória"),
});

/**
 * Validação das variáveis de ambiente
 * Lança um erro se alguma variável estiver faltando ou inválida
 */
const envValidation = envSchema.safeParse({
  NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
  NEXT_PUBLIC_COMPANY_TITLE: process.env.NEXT_PUBLIC_COMPANY_TITLE,
  NEXT_PUBLIC_COMPANY_DESCRIPTION: process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION,
});

if (!envValidation.success) {
  console.error("❌ Erro nas variáveis de ambiente:");
  console.error(envValidation.error.flatten().fieldErrors);
  throw new Error("Variáveis de ambiente inválidas ou ausentes. Verifique o arquivo .env.local");
}

/**
 * Variáveis de ambiente validadas e tipadas
 * Use este objeto em toda a aplicação para acessar as variáveis
 */
export const env = envValidation.data;

/**
 * Helper para acessar as variáveis de forma mais semântica
 */
export const companyInfo = {
  name: env.NEXT_PUBLIC_COMPANY_NAME,
  title: env.NEXT_PUBLIC_COMPANY_TITLE,
  description: env.NEXT_PUBLIC_COMPANY_DESCRIPTION,
};
