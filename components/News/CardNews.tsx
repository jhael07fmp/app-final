import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { News } from "@/types";
import tw from "twrnc";
import * as Linking from "expo-linking";
import { MainButton } from "../shared/buttons";

const NewsCard = (item: News) => {
  return (
    <View
      style={tw`w-11/12 mx-auto p-4 py-8 border-[0.3] gap-4 border-slate-300 rounded-md bg-white`}
    >
      <Text style={tw`font-bold text-slate-700 text-lg`}>{item.title}</Text>
      <Image
        source={{
          uri:
            item.image ??
            "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg",
        }}
        style={tw`w-full h-40 rounded-md`}
        resizeMode="cover"
      />
      <Text style={tw`text-sm text-slate-600 text-justify`}>
        {item.content.substring(0, 280) + "..."}
      </Text>

      <MainButton
        onPress={() => {
          Linking.openURL(item.link);
        }}
        title="Ver mas"
      />
    </View>
  );
};
export default NewsCard;
