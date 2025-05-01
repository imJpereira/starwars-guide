import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Developed by </Text>
            <Text>Bruno Gonçalves Oliveira</Text>
            <Text>João Pedro Santos Pereira</Text>
            <Text>Pedro Rodolfo Rien</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontSize:24,
        fontWeight:500,
        margin: 5
    }

});



