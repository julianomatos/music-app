import { Flex, Heading, Button, Text } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext, { IAlbum, IStories } from "../../context/user";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";
import { storage } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { getStories } from "../../services/stories";
import Storie from "../../components/Storie";

export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [albums, setAlbums] = useState<IAlbum>();
  const [stories, setStories] = useState<IStories>();

  const navigation = useNavigation();

  const handleLogout = () => {
    storage.clearAll();
    navigation.navigate('Login');
  }

  useEffect(() => {
    if (userData.user !== null) {
      getAlbums(userData.user?.token)
        .then((response) => setAlbums(response.data))
        .catch((e) => console.log("erro", e));
      getStories(userData.user?.token)
        .then((response) => setStories(response.data))
        .catch((e) => console.log("erro", e));
    }

  }, []);

  return (
    <Flex
      flex={1}
      p={5}
      bg="primary.100"
    >
      <Heading mb={10} color="secondary.100" fontSize={48}>
        Welcome Back {userData.user?.username}
      </Heading>

      <Text fontSize={22} fontWeight={'bold'} color={'light.50'}>Story</Text>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <Storie
            key={item.id}
            img={item.img}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Text mb={2} fontSize={22} fontWeight={'bold'} color={'light.50'}>Discover Pick ForYou</Text>
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
      <Button onPress={handleLogout} bg="secondary.100" >
        Log out
      </Button>
      <Selected text={selectedAlbum} />
    </Flex>
  );
}