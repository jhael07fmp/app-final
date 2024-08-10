import { ReactNode } from "react";
import { TextInputProps } from "react-native";

type TabBarIconProps = { focused: boolean; color: string; size: number };

type InputBaseProps = {
  label?: string;
  Icon?: ReactNode;
};

type School = {
  idx: string;
  codigo: string;
  nombre: string;
  coordenadas: string;
  distrito: string;
  regional: string;
  d_dmunicipal: string;
};

type News = {
  title: string;
  image: string;
  description: string;
  content: string;
  link: string;
};

type MenuOption = {
  id: number;
  title: string;
  isSignIn: boolean;
  route: string;
};

type InputProps = InputBaseProps & TextInputProps;

type Register = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  birthdate: string;
  personalId: string;
  password: string;
};
export {
  type Register,
  type InputProps,
  type TabBarIconProps,
  type School,
  type News,
  type MenuOption,
};
