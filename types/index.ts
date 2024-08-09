import { ReactNode } from "react";

type TabBarIconProps = { focused: boolean; color: string; size: number };

type InputProps = {
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

export { type TabBarIconProps, type InputProps, type School };
