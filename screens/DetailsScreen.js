import axios from "axios";
import { registerRootComponent } from "expo";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";


export default function DetailsScreen({ navigation, route }) {
    const { character } = route.params;

    const [characterApi,  setCharacterApi] = useState([]);

    const fetchCharacterById = async (id) => {
        try {
            const response = await axios.get(`https://swapi.info/api/people/${id}`)
            setCharacterApi(response.data);
        } catch (error) {
            console.log(error);
        } 

    }

    function extractCharacterId(url) {
        const parts = url.split("/");
        return parts[parts.length - 1];
      }

    useEffect(() => {
        fetchCharacterById(character.id);
    },[]);
    
    return (
        <View style={styles.detailContainer}>
            <Text>
               {characterApi.name} 
            </Text>
            <View style={styles.buttonContainer}>
                
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate("Naves", {
                        character: {...characterApi, id: extractCharacterId(characterApi.url)}
                    })}
                > 
                    <Text style={styles.buttonText}>
                        Naves
                    </Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate("Filmes", {
                        character: {...characterApi, id: extractCharacterId(characterApi.url)}
                    })}
                >
                    <Text style={styles.buttonText}>
                        Filmes
                    </Text>
                </Pressable>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    detailContainer: {
        flex: 1,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 5, 
        backgroundColor: '#f0f0f0',  
        paddingTop: 10, 
        gap: 5
    },
    button: {
        backgroundColor: '#e74c3c', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 3, // Sombra no Android
        shadowColor: '#000', // Sombra no iOS
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

})