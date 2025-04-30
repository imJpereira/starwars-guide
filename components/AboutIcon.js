import { Pressable, Image, StyleSheet } from 'react-native';

export default function AboutIcon({handleNavigation}) {

    return (
        <Pressable
        onPress={() => handleNavigation()}
        >
            <Image 
                source={require('../assets/information.png')} 
                style={styles.icon} 
            /> 
        </Pressable>
    );
}

const styles = StyleSheet.create({
    icon: {
      width: 24,    
      height: 24,
      resizeMode: 'contain',
    }
  });
  

