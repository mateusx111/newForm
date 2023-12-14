import { parseISO, subYears, isBefore } from "date-fns";
import { z } from "zod";

export const formSchema = z
  .object({
    fullname: z
      .string()
      .min(1, "Nome obrigatório")
      .max(100, "Nome muito longo"),
    documentNumber: z.string().min(11, "O CPF é obrigatório"),

    birthdate: z.string().refine(
      (value) => {
        const birthdayDate = parseISO(value);
        const today = new Date();
        const legalAgeDate = subYears(today, 18);
        return isBefore(birthdayDate, legalAgeDate);
      },
      {
        message: "Você deve ser maior de idade para continuar.",
      }
    ),
    phoneNumber: z.string().min(11, "Contato obrigatório"),
    motherName: z.string().min(1, "Nome obrigatório"),
    address: z.object({
      zipCode: z.string().min(9, "CEP obrigatório"),
      addressState: z.string().min(1, "Selecione o Estado").max(2),
      city: z.string().min(1, "Selecione a Cidade"),
      addressStreet: z.string().min(1, "Informe a Rua"),
      addressDistrict: z.string().min(1, "Informe o Bairro"),
      number: z.string().min(1, "Informe o Número da Casa"),
      addressComplement: z.string().optional(),
    }),
    minimumWage: z.string().transform((value) => {
      return parseFloat(value);
    }),
    educationLevel: z.string(),
    email: z.string().min(1, "Email obrigatório").email("Email inválido"),
    password: z
      .object({
        mainPassword: z
          .string()
          .min(10, "A senha precisa ter no mínimo 10 caracteres"),
        confirmPassword: z.string(),
      })
      .refine((data) => data.mainPassword === data.confirmPassword, {
        message: "As senhas precisam ser iguais",
        path: ["confirmPassword"],
      }),
  })
  .transform((field) => ({
    ...field,
  }));
