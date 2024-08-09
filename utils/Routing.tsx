import { ElementType } from "react";

export const TabIconFn = (
  Icon: ElementType,
  name: string,
  size: number,
  props?: { focused: boolean; color: string; size: number }
) => <Icon name={name} size={size} color={props?.focused ? "blue" : "black"} />;
