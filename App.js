import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ShipsScreen from './screens/ShipsScreen';
import MovieScreen from './screens/MovieScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Personagens"
          options={{
            headerBackTitle: "Personagens",
            headerTitleAlign: "center"
          }}
          component={HomeScreen}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Detalhes"
          options={{
            headerBackTitle: "Nome do personagem",
            headerTitleAlign: "center"
          }}
          component={DetailsScreen}
        >
        </Stack.Screen>
        
        <Stack.Screen
          name="Naves"
          options={{
            headerBackTitle: "Naves",
            headerTitleAlign: "center"
          }}
          component={ShipsScreen}
        >
        </Stack.Screen>
        
        <Stack.Screen
          name="Filmes"
          options={{
            headerBackTitle: "Filmes",
            headerTitleAlign: "center"
          }}
          component={MovieScreen}
        >
        </Stack.Screen>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

