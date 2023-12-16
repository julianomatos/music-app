import { Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";
import { useState } from "react";


export default function Register() {

    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Flex p={5} flex={1} justifyContent="center" alignItems="center">
            <Heading>Tela de Cadastro</Heading>
            <Input mt={2} value={fullName} onChangeText={setFullName} />
            <Input mt={2} value={username} onChangeText={setUsername} />
            <Input mt={2} value={password} onChangeText={setPassword} />
            <Flex width="100%">
                <Button content="Cadastrar" handleClick={()=>{}} />
            </Flex>
        </Flex>
    )
}