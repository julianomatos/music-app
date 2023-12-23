import { Flex, Heading, Input, Text } from "native-base";
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
    <Flex p={5} flex={1} justifyContent="center" alignItems="center" bg="primary.100">
      <Heading textAlign={'center'} color={'light.100'} fontSize={36} mb={10}>Welcome to MusicApp</Heading>
      <Text fontSize={18} mb={5} color={'light.200'}>Enter Your Username & Password</Text>
      <Input size="lg" variant="underlined" mt={5} color={'light.200'} value={username} onChangeText={setUsername} placeholder="Username" />
      <Input size="lg" variant="underlined" mt={2} color={'light.200'} value={password} onChangeText={setPassword} placeholder="Password" />
      <Flex mt={5} width="100%">
        <Button content="Sign in" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}