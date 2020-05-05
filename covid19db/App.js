import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.buttonLight}
            onPress={() => {
              alert('You tapped the button!');
            }}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'>
            <Text style={styles.buttonLightText}>Check for symptoms</Text>
        </TouchableOpacity>
        <Button
          style={styles.buttonNoBgText}
          onPress={() => {
              alert('Nawwwwww');
          }}
          title="Turn off contact tracing"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLight: {
    width:215,
    height:45,
    borderRadius: 30,
    backgroundColor: '#E6E6E6',
    color: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLightText: {
    fontSize: 17,
  },
  buttonNoBgText: {
    fontSize: 15,

  }
});
