import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={tw`bg-slate-100 flex-1`}>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Layout;
