import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import THEME from "./src/theme";
import UserContext, { IUser } from "./src/context/user";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";
import MainStack from "./src/routes/MainStack";

export const storage = new MMKV({
  id: "musicapp",
});

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (user != null) {
      storage.set("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString("user");
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user: user, setUser }}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
        <StatusBar style="auto" />
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}