import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";

export default function Login() {
  const userData = useContext(UserContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  userData.user?.token

  const handleLogin = () => {
    console.log("Username: " + username + " Password: " + password);
    login({ username: username, password: password, })
      .then(function (response) {
        userData.setUser({
          username: username,
          password: password,
          token: response.data.token
        });
      })

      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "usuário ou senha inválidos");
      });
    // axios
    //   .post("https://musicapi-w7kn.onrender.com/user/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then(function (response) {
    //     userData.setUser({
    //       name: "Gabriel",
    //       email: "gabrielgs1408@gmail.com",
    //       token: response.data.token
    //     });
    //     console.log(response.data.token)
    //   })

    //   .catch(function (error) {
    //     console.error("error", error);
    //     Alert.alert("Error", "usuário ou senha inválidos");
    //   });
  };

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Tela de login</Heading>
      <Input mt={2} value={username} onChangeText={setUsername} />
      <Input mt={2} value={password} onChangeText={setPassword} />
      <Flex width="100%">
        <Button content="Sign in" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}