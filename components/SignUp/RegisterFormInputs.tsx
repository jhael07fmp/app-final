import { RegisterFormInputsProps } from "@/types/signUpTypes";
import InputComponent from "../form/Input";
import { View } from "react-native";
import tw from "twrnc";
import { InputProps } from "@/types";
import { useCallback } from "react";

/**
 * This component holds all the necesary inputs needed for the user to signup and also alters the state of the form.
 *
 * @param inputs these are all the inputs needed for the register form.
 * @param setRegisterForm this is the ustate hook for setting up the form whenever the user change any of the inputs.
 */
const RegisterFormInputs = (props: RegisterFormInputsProps) => {
  const { inputs, setRegisterForm } = props;

  const handleForm = useCallback(
    (text: string, property: string) => {
      setRegisterForm((prev) => ({
        ...prev,
        [property]: text,
      }));
    },
    [setRegisterForm]
  );

  return inputs.map((item, i) => {
    return (
      <View key={item.id} style={tw`${getInputWidth(i, inputs)}`}>
        <InputComponent
          onChangeText={(txt) => handleForm(txt, item?.id ?? "")}
          {...item}
        />
      </View>
    );
  });
};

export default RegisterFormInputs;

const getInputWidth = (i: number, inputs: InputProps[]) =>
  i !== inputs.length - 1 ? "w-[43.8]" : "w-full";
