import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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

const ButtonDark = (props) => {
    return (
      <TouchableOpacity
          style={[styles.buttonDark, props.style]}
          onPress={props.onPress}
          underlayColor='#fff'>
          <Text style={styles.buttonDarkText}>{props.text}</Text>
      </TouchableOpacity>
    );
}

function UselessTextInput(props) {
	const [value, onChangeText] = React.useState('Location');
	
	return (
    <TextInput
      style={styles.inputLight}
    	placeholder={props.placeholder}
      onChangeText={text => onChangeText(text)}
    />
  );
}

function HomeScreen({ navigation }) {
	return (
		    <View style={styles.container}>
		      <Text style={styles.heading}>Did you walk by a COVID patient?</Text>
		      <Text style={styles.copy}>COVID-19 patients can take up to 14 days to show symptoms. Check if you've passed an at-risk space and time.</Text>
		      <UselessTextInput placeholder={"Location"}/>
		      <UselessTextInput placeholder={"Date"} />
		      <UselessTextInput placeholder={"Time"} />
		      <ButtonLight
		                text="Check for contact"
		                onPress={() => navigation.navigate('Reported Positive')}
		              />
		    </View>
	);
}

function NoContactScreen() {
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
	        <ButtonLight text="Learn more" /> 
	        <ButtonBackgroundless
	            onPress={() => {
	                alert('Nawwwwww');
	            }}
	            text="Turn off contact tracing" />
        </View>
	  );
	}

function ContactConfirmedScreen() {
	  return (
	    <View style={styles.container}>
	        <View style={styles.contactBox}>
		    	<Text style={styles.heading}>You have been nearby someone who tested positive.</Text>
		        <Text style={styles.copy}>Based on your data, we found 4 encounters.</Text>
		        <ButtonDark text="Upload your key" style={styles.center}/>
		        <Text style={[styles.tiny, styles.underline]}>What is a key?</Text>
	        </View>
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
	        <ButtonLight text="Learn more" /> 
	        <ButtonBackgroundless
	            onPress={() => {
	                alert('Nawwwwww');
	            }}
	            text="Turn off contact tracing" />
      </View>
	  );
	}

function ReportedPositiveScreen() {
	  return (
			  <View style={styles.container}>
		        <View style={styles.contactBox}>
			    	<Text style={styles.heading}>You have reported as COVID-19 positive.</Text>
			        <Text style={styles.copy}>People who have been nearby you are notified.</Text>
			        <ButtonDark text="Upload your key" style={styles.center}/>
			        <Text style={[styles.tiny, styles.underline]}>What is a key?</Text>
		        </View>
		        <ButtonLight text="Learn more" /> 
		        <ButtonBackgroundless
		            onPress={() => {
		                alert('Nawwwwww');
		            }}
		            text="Turn off contact tracing" />
	      </View>
	  );
	}

const Stack = createStackNavigator();

export default function App() {
  return (
		  <NavigationContainer>
	      	<Stack.Navigator>
	      		<Stack.Screen name="Home" component={HomeScreen} options={{ 
	      				title: 'Welcome', 
	      				headerRight: () => (
		      	            <Button
		                    onPress={() => alert('This is a button!')}
		                    title="Info"
		                    color="#fff"
		                  />
	      				), 
	      				}} />
	      		<Stack.Screen name="No Contact" component={NoContactScreen} />
	      		<Stack.Screen name="Contact Confirmed" component={ContactConfirmedScreen} />
	      		<Stack.Screen name="Reported Positive" component={ReportedPositiveScreen} />
			 </Stack.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundImage: 'linear-gradient(to bottom right, #05425b, #26a3d8)',
    //color: '#fff',
  },
  inputLight: {
	    width:215,
	    height:45,
	    borderRadius: 10,
	    padding: 10,
	    marginBottom: 10,
	    backgroundColor: '#E6E6E6',
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	  },
  buttonLight: {
    width:215,
    height:45,
    marginBottom:10,
    borderRadius: 30,
    backgroundColor: '#E6E6E6',
    color: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLightText: {
    fontSize: 17,
  },
  buttonDark: {
	    width:215,
	    height:45,
	    marginBottom:10,
	    borderRadius: 30,
	    backgroundColor: '#111',
	    color: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	  },
	  buttonDarkText: {
		    fontSize: 17,
		    color: '#fff',
		  },
  buttonBackgroundlessText: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    //color: '#eee',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 17,
    //color: '#fff',
  },
  copy: {
    fontSize: 15,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom:20,
    //color: '#fff',
  },
  contactBox: {
	  textAlign: 'center',
	  padding: 20,
	  backgroundColor: "#f9dfdd",
	  borderRadius: 10,
	  marginBottom: 10,
  },
  center: {
	  marginLeft: 'auto',
	  marginRight: 'auto',
  },
  tiny: {
	  fontSize: 13,
  },
  underline: {
	  textDecorationLine: 'underline',
  }
});
