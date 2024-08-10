import { BackButton, MainButton } from "@/components/shared/buttons";
import InputComponent from "@/components/form/Input";
import { Layout, Title } from "@/components/shared";
import { Register, type InputProps } from "@/types";
import { View } from "react-native";
import React, { useCallback, useState } from "react";
import tw from "twrnc";
import { Auth } from "@/services/Auth";
import RegisterFormInputs from "@/components/SignUp/RegisterFormInputs";

const index = () => {
  const [registerForm, setRegisterForm] = useState<Register>(formInitialState);

  const inputs: InputProps[] = [
    {
      id: "name",
      placeholder: "Escribe tu nombre",
      label: "",
    },
    {
      id: "lastname",
      placeholder: "Escribe tu apellido",
      label: "",
    },
    {
      id: "email",
      placeholder: "Escribe tu correo",
      label: "",
    },
    {
      id: "phone",
      placeholder: "Escribe tu telefono",
      label: "",
    },
    {
      id: "birthdate",
      placeholder: "Fecha de nacimiento",
      label: "",
    },
    { id: "personalId", placeholder: "Matricula/cedula", label: "" },
    {
      id: "password",
      placeholder: "Escribe la clave",
      label: "",
      secureTextEntry: true,
    },
  ];

  const handleOnPressRegister = useCallback(async () => {
    try {
      // validates that all inputs are filled
      const inputs = Object.entries(registerForm);

      for (const [key, value] of inputs) {
        if (!value || value === " ")
          throw Error(`${keyTranslation[key]} es obligatorio.`);
      }

      const result = await Auth.reigster(registerForm);
      console.log(result);
    } catch (err: any) {
      alert(err.message);
    }
  }, [registerForm]);

  return (
    <Layout>
      <BackButton />
      <Title>Registro</Title>
      <View style={tw`w-11/12 mx-auto flex-row flex-wrap gap-x-4`}>
        <RegisterFormInputs inputs={inputs} setRegisterForm={setRegisterForm} />
        <View style={tw`mx-auto w-full mt-8`}>
          <MainButton title="Registrarse" onPress={handleOnPressRegister} />
        </View>
      </View>
    </Layout>
  );
};

export default index;

const keyTranslation: { [key: string]: string } = {
  birthdate: "Fecha de nacimiento",
  email: "Correo",
  lastname: "Apellido",
  name: "Nombre",
  password: "Clave",
  personalId: "Matricula",
  phone: "Telefono",
};

const formInitialState = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  birthdate: "",
  personalId: "",
  password: "",
};
