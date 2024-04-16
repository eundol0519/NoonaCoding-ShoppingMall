import { createContext, Dispatch, SetStateAction } from "react";

interface LoginContextValue {
  login: boolean | null;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextValue>({
  login: null,
  setLogin: () => {},
});

export default LoginContext;
