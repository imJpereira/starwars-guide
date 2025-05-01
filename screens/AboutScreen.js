import { View, Text, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import { useEffect, useState, useRef } from "react";

export default function AboutScreen({navigation}) {

    const sound = useRef(null);

    const loadSound = async () =>  {
        try {
            const { sound: loadedSound } = await Audio.Sound.createAsync(
                require("../assets/starwars.mp3")
              );
            
            sound.current = loadedSound;

            await loadedSound.playAsync(); 
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        
        loadSound();
    
        return () => {
            if (sound.current) {
                sound.current.stopAsync();
                sound.current.unloadAsync();
            }
        }
    }, []);

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



