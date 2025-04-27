import { TouchableOpacity, StyleSheet, View, Text } from "react-native";


export default function CharacterCard({character, onPress}) {

    return (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={onPress}
        >
            <View style={styles.card}>
                <Text>{character.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },

    card: {
        backgroundColor:"#c3c3c3",
        marginBottom: 5,
        padding: 15,
        borderRadius: 8,
    }
});