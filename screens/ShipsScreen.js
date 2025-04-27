import { Text } from "react-native";

export default function ShipsScreen({route}) {
    const { character } = route.params;

    return (
        <Text>naves do {character.id}</Text>
    );
}