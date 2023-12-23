import { Button as NativeButton, Text } from "native-base";

interface Props {
  content: string;
  variation?: string;
  handleClick: () => void;
}

export default function Button({
  content,
  variation = "light",
  handleClick,
}: Props) {
  return (
    <NativeButton bg={`${variation}.100`} mt={3} onPress={handleClick}>
       <Text fontSize={18} color="primary.100">{content}</Text>
    </NativeButton>
  );
}