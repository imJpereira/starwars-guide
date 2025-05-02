import { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function ShipsScreen({ route }) {
  const { character } = route.params;
  const [ships, setShips] = useState([]);
  const [hasShips, setHasShips] = useState(true);

  useEffect(() => {
    async function fetchShips() {
      if (!character.starships || character.starships.length === 0) {
        setHasShips(false);
        return;
      }

      try {
        const responses = await Promise.all(
          character.starships.map((url) => axios.get(url))
        );
        const data = responses.map((res) => res.data);
        setShips(data);
      } catch (error) {
        console.error("Erro ao buscar naves:", error);
        setHasShips(false);
      }
    }

    fetchShips();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naves de {character.name}</Text>
      {!hasShips || ships.length === 0 ? (
        <Text style={styles.info}>Esse personagem não tem naves.</Text>
      ) : (
        <FlatList
          data={ships}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.shipTitle}>{item.name}</Text>
              <Text>Modelo: {item.model}</Text>
              <Text>
                Passageiros: {item.passengers === "0" ? "Sem passageiros" : item.passengers}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  info: { fontSize: 16 },
  card: {
    backgroundColor: "#eee",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  shipTitle: { fontWeight: "bold", fontSize: 16 },
});
