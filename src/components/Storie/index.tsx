
import { Image, Card, Text } from "native-base";

interface Props {
    name: string;
    img: string;
}
export default function Storie({ img, name }: Props) {
    return (
        <Card>
            <Image
                borderColor={'white'}
                borderWidth={2}
                borderRadius={100}
                source={{
                    uri: img,
                }}
                alt="Alternate Text"
                size="md"
            />
            <Text textAlign={'center'} fontSize={12} color={'light.100'}>{name}</Text>
        </Card>
    )
}

