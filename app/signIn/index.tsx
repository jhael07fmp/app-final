import InputComponent from "@/components/form/Input";
import { Layout, Title } from "@/components/shared";
import { InputProps } from "@/types";
import { View } from "react-native";
import React from "react";
import tw from "twrnc";
import { MainButton, BackButton } from "@/components/shared/buttons";

const index = () => {
  const inputs: InputProps[] = [
    { id: "cedula", placeholder: "Escribe la matricula/cedula", label: "" },
    {
      id: "clave",
      placeholder: "Escribe la clave",
      label: "",
      secureTextEntry: true,
    },
  ];

  return (
    <Layout>
      <BackButton />
      <Title>Iniciar Sesion</Title>
      <View style={tw`w-11/12 mx-auto`}>
        {inputs.map((item) => {
          return <InputComponent key={item.id} {...item} />;
        })}
      </View>
      <View style={tw`mx-auto w-11/12 mt-8`}>
        <MainButton title="Iniciar Sesion" />
      </View>
    </Layout>
  );
};

export default index;
