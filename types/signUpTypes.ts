import type { Dispatch, SetStateAction } from "react";
import type { InputProps, Register } from ".";

type RegisterFormInputsProps = {
  inputs: InputProps[];
  setRegisterForm: Dispatch<SetStateAction<Register>>;
};

export { type RegisterFormInputsProps };
