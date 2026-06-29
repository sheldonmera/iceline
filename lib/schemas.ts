import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(8, "Informe um telefone para contato."),
  service: z.string().min(2, "Selecione ou informe o serviço."),
  message: z.string().min(10, "Conte um pouco mais sobre a necessidade.")
});

export type ContactFormData = z.infer<typeof contactSchema>;