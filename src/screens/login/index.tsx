import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../../App";

export default function Login() {
  const userData = useContext(UserContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const clearFields = () => {
    setUsername('')
    setPassword('')
  }

  if (storage.getString("user") != undefined) {
    navigation.navigate('Home');
  }

  const handleLogin = () => {
    console.log("Username: " + username + " Password: " + password);
    login({ username: username, password: password, })
      .then(function (response) {
        userData.setUser({
          username: username,
          password: password,
          token: response.data.token
        });
        clearFields()
        navigation.navigate('Home');
      })

      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "Username or password is invalid.");
      });

  };

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Login Screen</Heading>
      <Input mt={2} value={username} onChangeText={setUsername} placeholder="Username" />
      <Input mt={2} value={password} onChangeText={setPassword} placeholder="Password" />
      <Flex width="100%">
        <Button content="Sign in" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}