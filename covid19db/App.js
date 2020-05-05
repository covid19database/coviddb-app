import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


const ButtonBackgroundless = (props) => {
    return (
      <TouchableOpacity
          style={styles.buttonBackgroundless}
          onPress={props.onPress}
          underlayColor='#fff'>
          <Text style={styles.buttonBackgroundlessText}>{props.text}</Text>
      </TouchableOpacity>
    );
}


/**
 * ButtonLight
 * ===
 * light gray button with dark text, not full-width by default
 *
 * Example onPress events:
 *
 *    () => { alert('You tapped the button!'); }
 *    () => navigate('HomeScreen')
 */
// Example onPress events
const ButtonLight = (props) => {
    return (
      <TouchableOpacity
          style={styles.buttonLight}
          onPress={props.onPress}
          underlayColor='#fff'>
          <Text style={styles.buttonLightText}>{props.text}</Text>
      </TouchableOpacity>
    );
}


export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>No contact detected</Text>
        <Text style={styles.copy}>Based on your data, you have not been nearby someone who tested positive for COVID-19.</Text>
        <ButtonLight
            onPress={() => {
              fetch('http://127.0.0.1:5000/get-diagnosis-keys').then(
                  (response) => response.json()
                  .then((json) => {
                      alert(json);
                  }).catch((error) => {
                      console.error(error);
                  })
              );
            }}
            text="Check for symptoms" />
        <ButtonBackgroundless
            onPress={() => {
                alert('Nawwwwww');
            }}
            text="Turn off contact tracing" />
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
  buttonBackgroundlessText: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    color: '#666666'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 17
  },
  copy: {
    fontSize: 15,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom:20,
  }
});
