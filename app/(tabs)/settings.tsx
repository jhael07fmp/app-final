import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { MenuOption } from "@/types";
import { router } from "expo-router";

const settings = () => {
  const menuOptions: Array<MenuOption> = [
    { id: 1, title: "Iniciar Sesion", isSignIn: false, route: "/signIn" },
    { id: 2, title: "Registrarse", isSignIn: false, route: "/signUp" },
  ];

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-48 w-full bg-blue-500`}></View>
      <View>
        {menuOptions.map((item) => (
          <TouchableOpacity
            onPress={() => {
              router.navigate(item.route as any);
            }}
            key={item.id}
            style={tw`p-4 border-b-[0.3] border-b-slate-300`}
          >
            <Text style={tw`font-medium text-lg`}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default settings;
