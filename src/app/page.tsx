"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  fullName: z.string().min(1, "Nome obrigatório"),
  cpf: z.string().min(1, "O CPF é obrigatório"),
  birth: z.date().max(new Date(), {
    message: "Você precisa ter mais de 18 anos para continuar",
  }),
  contact: z.string().min(1, "Contato obrigatório"),
  motherName: z.string().min(3, "Nome obrigatório").max(50),
  address: z.object({
    zipCode: z.z.string().min(9, "CEP obrigatório"),
    state: z.string().min(1, "Selecione o Estado"),
    city: z.string().min(1, "Selecione a Cidade"),
    street: z.string().min(1, "Informe a Rua"),
    district: z.string().min(1, "Informe o Bairro"),
    number: z.string().min(1, "Informe o Número da Casa").max(40),
    complement: z.string(),
  }),
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  password: z.string().min(10, "A senha precisa ter no mínimo 10 caracteres"),
  confirmPassword: z.string(),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      fullName: "",
      cpf: "",
      birth: new Date(),
      contact: "",
      motherName: "",
      address: {
        zipCode: "",
        state: "",
        city: "",
        street: "",
        district: "",
        number: "",
        complement: "",
      },
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="bg-custom-bg-100 text-custom-white-100 h-screen flex flex-col items-center justify-center]">
      <Form {...form}>
        <div className="flex flex-col items-center justify-center w-[760px] mb-[124px] mt-[52px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" bg-white flex flex-col gap-8 rounded px-[98px] pt-11 pb-[57px]"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="000.000.000-00" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="000.000.000-00" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input placeholder="12/12/2000" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contato</FormLabel>
                  <FormControl>
                    <Input placeholder="(96) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contato</FormLabel>
                  <FormControl>
                    <Input placeholder="Mãe" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="CEP"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input placeholder="00000-000" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="CEP"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Ensino Fundamental Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Ensino Médio Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Ensino Superior Completo
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </Form>
    </main>
  );
}
