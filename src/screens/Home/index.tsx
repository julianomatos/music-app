import { Flex, Heading, Button } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext, { IAlbum } from "../../context/user";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";
import { storage } from "../../../App";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [albums, setAlbums] = useState<IAlbum>();
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log(storage.getString("user"))
    storage.clearAll();
    console.log(storage.getString("user"))
    navigation.navigate('Login');
  }

  useEffect(() => {
    if (userData.user !== null) {
      getAlbums(userData.user?.token)
        .then((response) => setAlbums(response.data))
        .catch((e) => console.log("erro", e));
    }

  }, []);

  return (
    <Flex
      flex={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      bg="primary.100"
    >
      <Flex mb={5} justifyContent="space-between" alignItems="center" flexDirection="row">
        <Heading color="secondary.100" fontSize="4xl">
          Welcome back {userData.user?.username}
        </Heading>

      </Flex>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            img={item.img}
            album={item.album}
            setSelectedAlbum={setSelectedAlbum}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Button onPress={handleLogout} colorScheme="danger" >
        Log out
      </Button>
      <Selected text={selectedAlbum} />
    </Flex>
  );
}