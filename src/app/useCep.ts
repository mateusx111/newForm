import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema";

import { AddressProps } from "./types";
import axios from "axios";
import { z } from "zod";
export const useCep = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      fullname: "",
      documentNumber: "",
      birthdate: "",
      phoneNumber: "",
      motherName: "",
      address: {
        zipCode: "",
        addressState: "",
        city: "",
        addressStreet: "",
        addressDistrict: "",
        number: "",
        addressComplement: "",
      },
      minimumWage: Number(),
      educationLevel: "",
      email: "",
      password: {
        mainPassword: "",
        confirmPassword: "",
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  const zipCode = form.watch("address.zipCode");

  const handleSetData = useCallback(
    (data: AddressProps) => {
      form.setValue("address.addressState", data.uf);
      form.setValue("address.city", data.localidade);
      form.setValue("address.addressStreet", data.logradouro);
      form.setValue("address.addressDistrict", data.bairro);
      form.setValue("address.addressComplement", data.complemento);
    },
    [form]
  );

  const handleFecthCep = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      handleSetData(data);
      console.log(data);
    },
    [handleSetData]
  );

  useEffect(() => {
    form.setValue("address.zipCode", zipCode);
    if (zipCode.length !== 9) return;

    handleFecthCep(zipCode);
  }, [handleFecthCep, form, zipCode]);

  return {
    form,
    onSubmit,
    handleFecthCep,
  };
};
