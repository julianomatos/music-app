import { createContext } from "react";

export type IUser = {
  username: string;
  password: string;
  token: string;
};

export type IAlbum = [{
  id: string;
  img: string;
  album: string;
}];

export type IStories = [{
  id: string;
  img: string;
  name: string;
}];

type IUserContext = {
  user: IUser | null;
  setUser: (userData: IUser) => void;
};

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export default UserContext;