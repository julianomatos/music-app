import { Flex, Heading, Button } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext, { IAlbum } from "../../context/user";
import { FlatList, Alert } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";
import { storage } from "../../../App";
export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [albums, setAlbums] = useState<IAlbum>();

  const handleLogout = () => {
    storage.clearAll()
    
  }
 
  useEffect(() => {
    if (userData.user !== null){
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
      <Heading color="secondary.100" fontSize="4xl">
        Wellcome back {userData.user?.username}
      </Heading>
      <Button onPress={handleLogout} mt={4} colorScheme="danger">
        Log Out
      </Button>
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
      <Selected text={selectedAlbum} />
    </Flex>
  );
}