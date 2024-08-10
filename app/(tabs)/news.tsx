import React from "react";

import tw from "twrnc";
import { Layout, Title } from "@/components/shared";
import { FlatList, Text, View } from "react-native";
import { useQuery } from "react-query";
import { type News } from "@/types";
import { NewsUtils } from "@/services";
import NewsCard from "@/components/News/CardNews";

const news = () => {
  const { data, isLoading } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: async () => await NewsUtils.getNews(),
  });

  return (
    <Layout>
      <Title>Noticias</Title>

      {isLoading && <Text>Cargando...</Text>}

      {!isLoading && (
        <FlatList
          data={data ?? []}
          ListHeaderComponent={() => <View style={tw`h-6`} />}
          ListFooterComponent={() => <View style={tw`h-10`} />}
          windowSize={4}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={tw`h-4`} />}
          renderItem={({ item }) => {
            return <NewsCard {...item} />;
          }}
          keyExtractor={(item) => item.title}
        />
      )}
    </Layout>
  );
};

export default news;
