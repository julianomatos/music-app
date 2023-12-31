import { Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";
import { useContext,  useState } from "react";
import { register } from "../../services/register";
import UserContext from "../../context/user";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../services/auth";


export default function Register() {
    const userData = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const navigation = useNavigation()

 
    const clearFields = () =>{
        setUsername('')
        setPassword('')
        setPassword2('')
    }

    const handleRegister = () => {
        
        if (!username || !password || !password2) {
            Alert.alert("Erro", "Fill in all fields.");
            return;
        }
        if (password !== password2) {
            Alert.alert("Erro", "Passwords do not match.");
            return;
        }
        register({ username: username, password: password })
        .then(() => {
            return login({ username: username, password: password });
        })
        .then((response) => {
            userData.setUser({
                username: username,
                password: password,
                token: response.data.token
              });
            clearFields()
            navigation.navigate("Home");
        })
          .catch(function (error) {
            console.error("error", error);
            Alert.alert("Error", "Username or password is invalid.");
          });
        }
    return (
        <Flex p={5} flex={1} justifyContent="center" alignItems="center" bg="primary.100">
            <Heading textAlign={'center'} color={'light.100'} fontSize={36} mb={10}>Create Account</Heading>
            <Input size="lg" variant="underlined" mb={5} color={'light.200'} mt={2} value={username} onChangeText={setUsername} placeholder="Create Username"/>
            <Input size="lg" variant="underlined" mb={5} color={'light.200'} mt={2} value={password} onChangeText={setPassword} placeholder="Create Password"/>
            <Input size="lg" variant="underlined" mb={5} color={'light.200'} mt={2} value={password2} onChangeText={setPassword2} placeholder="Confirm Password"/>
            <Flex width="100%">
                <Button content="Register" handleClick={handleRegister} />
            </Flex>
        </Flex>
    )
}