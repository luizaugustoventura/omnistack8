import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Diferente do CSS, o padrão do flex-direction é collumn
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center'
    /* No react-native, o justify-content e o align-items estão invertidos. Enquanto o justifyContent 
    está ordenando verticalmente, o alignItems está ordenando horizontalmente */
  },

  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
})