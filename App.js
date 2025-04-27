import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

