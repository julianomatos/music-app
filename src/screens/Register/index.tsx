import { Alert, Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { register } from "../../services/register";
import UserContext from "../../context/user";


export default function Register() {
    const userData = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    const handleRegister = () => {
        console.log("Username: " + username + " Password: " + password);
        register({ username: username, password: password, })
          .then()
          .catch(function (error) {
            console.error("error", error);
            Alert.alert("Error", "usuário ou senha inválidos");
          });
        }
    return (
        <Flex p={5} flex={1} justifyContent="center" alignItems="center">
            <Heading>Tela de Cadastro</Heading>
            <Input mt={2} value={username} onChangeText={setUsername} />
            <Input mt={2} value={password} onChangeText={setPassword} />
            <Input mt={2} value={password2} onChangeText={setPassword2} />
            <Flex width="100%">
                <Button content="Cadastrar" handleClick={()=>{}} />
            </Flex>
        </Flex>
    )
}