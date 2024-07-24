// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const SignScreen = ({navigation}: any) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Get your groceries with nectar</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 24,
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#53B175',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default SignScreen;
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Sign: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Sign'>;

const SignScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sign Screen</Text>
      <Button
        title="Log In"
        onPress={() => navigation.navigate('Login')}
        color="green"
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign')}
        color="green"
      />
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
