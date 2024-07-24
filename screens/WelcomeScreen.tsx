// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import backgroundImage from '../assets/8140.png';
// import Group from '../assets/Group';

// function WelcomeScreen() {
//   return (
//     <ImageBackground source={backgroundImage} style={styles.background}>
//       <View style={styles.overlay}>
//         <View style={styles.contentContainer}>
//           <Group />
//           <Text style={styles.welcomeText}>Welcome to our store</Text>
//           <Text style={styles.subtitle}>
//             Get your groceries in as fast as one hour
//           </Text>
//           <TouchableOpacity style={styles.button} onPress={() => {}}>
//             <Text style={styles.buttonText}>Get Started</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     flex: 1,
//     width: 500,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   contentContainer: {
//     alignItems: 'center',
//     marginBottom: 50,
//   },
//   welcomeText: {
//     fontSize: 26,
//     color: 'white',
//     marginBottom: 17,
//     padding: 15,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'white',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#53B175',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default WelcomeScreen;
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/8140.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 26,
    color: 'white',
    marginBottom: 17,
    padding: 15,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WelcomeScreen;
