import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TabIconFn } from "@/utils/Routing";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TabBarIconProps } from "@/types";

const _layout = () => {
  const tabOptions = (Icon: React.ElementType, name: string, size: number) => ({
    title: "",
    tabBarIcon: (props: TabBarIconProps) => TabIconFn(Icon, name, size, props),
    headerShown: false,
  });

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          padding: 14,
        },
      }}
    >
      <Tabs.Screen name="index" options={tabOptions(FontAwesome6, "school", 25)} />
      <Tabs.Screen name="news" options={tabOptions(FontAwesome, "newspaper-o", 28)} />
      <Tabs.Screen name="settings" options={tabOptions(Ionicons, "settings-outline", 29)} />
    </Tabs>
  );
};

export default _layout;
