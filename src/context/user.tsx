import { createContext } from "react";

type IUser = {
  name: string;
  email: string;
  token: string | null;
};

type IUserContext = {
  user: IUser | null;
  setUser: (userData: IUser) => void | React.Dispatch<React.SetStateAction<null>>;
};

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export default UserContext;