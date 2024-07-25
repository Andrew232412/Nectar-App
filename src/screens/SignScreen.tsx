import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import productsImage from '../../assets/Product.png';

type RootStackParamList = {
  Sign: undefined;
  Login: undefined;
  Registration: undefined;
};

type SignScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Sign'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

function SignScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Image source={productsImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SignScreen;
