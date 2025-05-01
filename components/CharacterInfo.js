import { View, Text, StyleSheet } from "react-native";

export default function CharacterInfo({ characterInfo }) {
    
    const characterObj = {
        name: characterInfo.name,
        height: characterInfo.height,
        mass: characterInfo.mass,
        hairColor: characterInfo.hair_color,
        skinColor: characterInfo.skin_color,
        eyeColor: characterInfo.eye_color,
        gender: characterInfo.gender
    }

    const camelCaseToCapitalize = (text) => {
        if (!text) return "";
    
        const formatedText = text.replace(/([A-Z])/g, ' $1');
        return formatedText.charAt(0).toUpperCase() + formatedText.slice(1).trim();
    }

    return (
        <View style={styles.infoContainer}>
            {Object.keys(characterObj).map((key) => (
                <View key={key} style={styles.infoCard}>
                    <Text style={styles.label}>{ camelCaseToCapitalize(key) }</Text>
                    <Text>{characterObj[key]}</Text>
                </View>
            ))}
        </View>
    );    
}

const styles = StyleSheet.create({

    infoContainer: {
        textAlign: "left",
        marginBottom: 20,
        marginTop: 5,
        width: '90%',
    },
    infoCard: {
        marginBottom: 5,
        padding: 5,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    label: {
        fontWeight: 500
    }

});
