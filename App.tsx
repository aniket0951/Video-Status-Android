/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/component/HomeScree';
import SplashScreen from 'react-native-splash-screen';
import SoundPlayer from 'react-native-sound-player';


// function App(): JSX.Element {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.container}>
//         <Card style={styles.card}>
          
//           {/* <Inputs /> */}
//         </Card>
//       </SafeAreaView>
//     </>
//   );
// }



export class App extends Component {
  
  componentDidMount(): void {

    var timeout = 350;
    setTimeout(() => {
      SplashScreen.hide();
    }, timeout);
    
  }
  render() {
    return (
      <HomeScreen/>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center', // Centered horizontally
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: '#f18484',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
});

export default App;
