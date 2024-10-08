import { Register } from "@/types";
import { Methods } from "./methods";

const baseApi = (endpoint: string) =>
  `${process.env.EXPO_PUBLIC_API_URL}${endpoint}`;

export namespace Auth {
  export const login = (personalId: string, password: string) => {
    const url = `def/iniciar_sesion?cedula=${personalId}&clave=${password}`;
    return Methods.get(url);
  };

  export const reigster = (props: Register) => {
    const { personalId, password, name, lastname, email, phone, birthdate } =
      props;

    const body = {
      cedula: personalId,
      clave: password,
      nombre: name,
      lastname: lastname,
      email: email,
      phone: phone,
      fecha_nacimiento: birthdate,
    };

    const url = `def/registro.php`;

    return Methods.post(baseApi(url), body);
  };
}
