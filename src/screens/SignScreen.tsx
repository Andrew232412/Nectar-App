import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import productsImage from '../../assets/Product.png';
import {useNavigation} from '../navigation/types/navigation';

function SignScreen() {
  const navigation = useNavigation<'Sign'>();
  return (
    <View style={styles.container}>
      <Image source={productsImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSign}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '41.7%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 25,
    width: 222,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  buttonLogin: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: 364,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 78,
    alignSelf: 'center', // Центрирование по горизонтали
  },
  buttonSign: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: 364,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 167,
    alignSelf: 'center', // Центрирование по горизонтали
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SignScreen;
