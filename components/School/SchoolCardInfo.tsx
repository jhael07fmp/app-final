import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

type SchoolCardInfo = {
  label: string;
  value: string | number | boolean | undefined | null;
  type?: "primary" | "secondary";
};

const SchoolCardInfo = ({ label, value, type = "secondary" }: SchoolCardInfo) => {
  return (
    <View style={tw`gap-0`}>
      <Text style={tw`text-sm text-slate-400`}>{label}:</Text>
      <Text style={tw`${type === "primary" ? "text-xl" : "text-xs"} text-slate-500 font-medium`}>
        {value}
      </Text>
    </View>
  );
};

export default SchoolCardInfo;
