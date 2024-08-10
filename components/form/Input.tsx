import { InputProps } from "@/types";
import { Text, TextInput, View } from "react-native";
import tw from "twrnc";

const InputComponent = ({ label, Icon, ...rest }: InputProps) => {
  return (
    <View style={tw`gap-4 flex-col w-full relative`}>
      <Text>{label}</Text>
      <TextInput
        {...rest}
        style={tw`bg-white p-2 py-3 w-full rounded-md border-[0.2] border-slate-200 text-base pl-4`}
      />
      <View style={tw`absolute top-12.5 right-3.5`}>{Icon}</View>
    </View>
  );
};

export default InputComponent;
