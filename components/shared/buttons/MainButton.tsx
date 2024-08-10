import { TouchableOpacityProps } from "react-native-gesture-handler";
import { Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const MainButton = ({
  title,
  ...rest
}: { title: string } & TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...rest} style={tw`bg-blue-500 rounded-lg p-4`}>
      <Text style={tw`text-white text-center text-base font-medium`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;
