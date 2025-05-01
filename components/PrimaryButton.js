import { captureOwnerStack } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function PrimaryButton({onPress, caption}) {

    return (
        <Pressable 
            style={styles.button}
            onPress={onPress}
        > 
            <Text style={styles.buttonText}>
                {caption}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#e74c3c', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 150,
        elevation: 3,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

