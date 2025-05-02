import { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function MovieScreen({ route }) {
  const { character } = route.params;
  const [movies, setMovies] = useState([]);
  const [hasMovies, setHasMovies] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      if (!character.films || character.films.length === 0) {
        setHasMovies(false);
        return;
      }

      try {
        const responses = await Promise.all(
          character.films.map((url) => axios.get(url))
        );
        const data = responses.map((res) => res.data);
        setMovies(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setHasMovies(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes de {character.name}</Text>
      {!hasMovies || movies.length === 0 ? (
        <Text style={styles.info}>Esse personagem não tem filmes.</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text>Diretor: {item.director}</Text>
              <Text>Produtor: {item.producer}</Text>
              <Text>Lançamento: {item.release_date}</Text>
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
  movieTitle: { fontWeight: "bold", fontSize: 16 },
});
