import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  View,
} from "react-native";
import SchoolCard from "@/components/School/SchoolCard";
import Layout from "@/components/shared/Layout";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Schools from "@/services/schools";
import { useQuery } from "react-query";
import { School } from "@/types";
import tw from "twrnc";
import InputComponent from "@/components/form/Input";
import Feather from "@expo/vector-icons/Feather";
import Title from "@/components/shared/Title";

const index = () => {
  const controller = useRef<AbortController | null>(null);

  const { data, isLoading, isFetching } = useQuery<School[]>({
    queryKey: ["schools"],
    queryFn: Schools.getAll,
    staleTime: Infinity,
  });

  const [allSchools, setAllSchools] = useState<Array<School> | undefined>(data);
  const [schoolsFiltered, setSchoolsFiltered] = useState<
    Array<School> | undefined
  >(data);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const renderSchools = useCallback(
    ({ item }: { item: School }) => {
      return <SchoolCard item={item} />;
    },
    [data]
  );

  /**
   * This function will cancel the previous request if it hasn't been finish and proceed with the newer one by getting the schools through their region id.
   *
   * @param regionId this is the ```text``` property coming from the React TextInput Component method ```onChangeText```
   */
  const handleSearchSchool = async (regionId: string) => {
    try {
      // if the regionId is empty it will set the schools array to all the schools
      if (!regionId || regionId.length < 1) {
        setSchoolsFiltered(allSchools);
        return;
      }

      controller.current = new AbortController();
      const signal = controller.current?.signal;

      if (signal) {
        setIsSearchLoading(true);
        const response = await Schools.getById(regionId, signal);
        setSchoolsFiltered(response);
      }
    } catch (err: any) {
      // console.error(err.message);
    } finally {
      setIsSearchLoading(false);
    }
  };

  useEffect(() => {
    setSchoolsFiltered(data);
    if (data?.length === 16371) setAllSchools(data);
  }, [data]);

  useEffect(() => {
    controller.current = new AbortController();
  }, []);

  const handleOnSearch = async (txt: string) => {
    controller.current?.abort();
    controller.current = new AbortController();
    await handleSearchSchool(txt);
  };

  return (
    <Layout>
      <Title>Centros Educativos</Title>

      <View style={tw`w-11/12 mx-auto`}>
        <InputComponent
          onChangeText={handleOnSearch}
          placeholder="Busca el centro por su regional"
          Icon={<Feather name="search" size={24} style={tw`text-gray-300`} />}
        />
      </View>

      <View style={tw`w-full h-[0.3] bg-slate-200 mt-6 mx-auto`}></View>
      <View>
        {(!isLoading || !isFetching) && (
          <FlatList
            data={schoolsFiltered ?? []}
            maxToRenderPerBatch={4}
            initialNumToRender={2}
            ListHeaderComponent={() => <View style={tw`h-6`} />}
            ListFooterComponent={() => <View style={tw`h-10`} />}
            windowSize={4}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={tw`h-4`} />}
            renderItem={({ item }) => renderSchools({ item })}
            keyExtractor={(item) => item.idx}
          />
        )}
      </View>

      {(isLoading || isFetching || isSearchLoading) && (
        <View
          style={tw`mx-auto w-80 absolute top-80 left-10 bg-white justify-center p-8 gap-6 
            rounded-md shadow-lg shadow-slate-400 border-[0.1] border-gray-200`}
        >
          <ActivityIndicator size={40} />
          <Text style={tw`text-center text-sm font-medium`}>
            Cargando Centros Educativos...
          </Text>
        </View>
      )}
    </Layout>
  );
};

export default index;
