"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useCep } from "./useCep";

export default function ProfileForm() {
  const { form, onSubmit } = useCep();

  return (
    <main className="bg-custom-bg-100 text-custom-white-100 h-full w-screen flex flex-col items-center justify-center">
      <Form {...form}>
        <div className="flex items-center justify-center w-[760px] mb-[124px] mt-[52px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" bg-white flex flex-col gap-8 w-full px-[98px] pt-11 pb-[57px]"
          >
            <FormField
              control={form.control}
              name="fullname"
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
              name="documentNumber"
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
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" placeholder="12/12/2000" />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contato</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(96) 99999-9999"
                      type="tel"
                      {...field}
                    />
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
                  <FormLabel>Nome da Mãe</FormLabel>
                  <FormControl>
                    <Input placeholder="Mãe" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.zipCode"
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
              name="address.addressState"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input placeholder="00000-000" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="00000-000" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="address.addressState"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o seu Estado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0"></SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}

            {/* <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o sua Cidade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Santana</SelectItem>
                      <SelectItem value="2">Macapá</SelectItem>
                      <SelectItem value="3">Oiapoque</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="address.addressDistrict"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Av." {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.addressStreet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input placeholder="3333" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.addressComplement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complemento</FormLabel>
                  <FormControl>
                    <Input placeholder="Opcional" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minimumWage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Renda Mensal</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="R$" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem>
                  <div>Escolaridade</div>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange}>
                      <FormItem className=" flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Fundamental Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Médio Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Superior Completo
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password.mainPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*********" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password.confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*********" {...field} />
                  </FormControl>
                  <FormMessage className="span-error" />
                </FormItem>
              )}
            />

            <div className="flex items-center space-x-2">
              <Switch />
              <div className="text-custom-white-100 font-normal text-base">
                Ver Senha
              </div>
            </div>

            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </Form>
    </main>
  );
}
