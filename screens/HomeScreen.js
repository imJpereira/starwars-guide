import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import axios from 'axios';

export default function HomeScreen() {
  
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
 
    useEffect(() => {
        fetchCharacters();
    }, []);

    return (

        <FlatList 
            data={characters}
            numColumns={1}
            keyExtractor={(item) => item.url}
            renderItem={({item}) => {
               return <Text>{item.name}</Text>
            }}
        />
    );
}