import { useEffect, useState, useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import axios from 'axios';
import CharacterCard from "../components/CharactersCard";
import AboutIcon from "../components/AboutIcon";

export default function HomeScreen({navigation}) {
  
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {

        try {
            const response = await axios.get("https://swapi.info/api/people");
            setCharacters(response.data);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    function extractCharacterId(url) {
        const parts = url.split("/");
        return parts[parts.length - 1];
      }
 
    useEffect(() => {
        fetchCharacters();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <AboutIcon handleNavigation={() => navigation.navigate("About")}/>}
        })
    }, [])

    return (

        <FlatList 
            data={characters}
            numColumns={1}
            keyExtractor={(item) => item.url}
            renderItem={({item}) => {
               return <CharacterCard
                        character={{...item}} 
                        onPress={() => navigation.navigate("Detalhes", {
                            character: {...item, id: extractCharacterId(item.url)}
                        })}     
                     />
            }}
            contentContainerStyle={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list : {
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
    }
});