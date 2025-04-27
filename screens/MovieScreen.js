import { Text } from "react-native";

export default function MovieScreen({route}) {
    const { character } = route.params;

    return (
        <Text>filmes do {character.id}</Text>
    );
}