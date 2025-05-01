import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import CharacterInfo from "../components/CharacterInfo";
import PrimaryButton from "../components/PrimaryButton";


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
                
            <CharacterInfo characterInfo={characterApi} />

            <View style={styles.buttonContainer}>
                
                <PrimaryButton onPress={() => navigation.navigate("Naves", {
                        character: {...characterApi, id: extractCharacterId(characterApi.url)}
                    })} caption={"Naves"}/>

                <PrimaryButton onPress={() => navigation.navigate("Filmes", {
                        character: {...characterApi, id: extractCharacterId(characterApi.url)}
                    })} caption={"Filmes"}/>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    detailContainer: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: '#c3c3c3'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 5, 
        // backgroundColor: '#f0f0f0',  
        paddingTop: 10, 
        gap: 5
    },
    image: {
        width: 300,
        height: 300
    },


})