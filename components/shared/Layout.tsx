import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import tw from "twrnc";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={tw`bg-slate-100 flex-1`}>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Layout;
