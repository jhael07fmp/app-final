import { Text } from "react-native";
import React, { ReactNode } from "react";
import tw from "twrnc";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Text style={tw`text-2xl mx-auto flex-row font-medium`}>{children}</Text>
  );
};

export default Title;
