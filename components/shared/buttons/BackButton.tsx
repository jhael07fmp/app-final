import { View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <View style={tw`absolute top-[6.5] left-0`}>
      <TouchableOpacity style={tw`p-2`} onPress={() => router.back()}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
