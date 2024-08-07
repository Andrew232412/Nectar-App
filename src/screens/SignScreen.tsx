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
        <Image
          style={styles.muloNiz}
          source={require('../../assets/pngs/Muloniz.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  image: {
    width: '100%',
    height: '41.7%',
    resizeMode: 'cover',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    color: 'rgba(3, 3, 3, 1)',
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
    position: 'absolute',
    top: 20,
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
    position: 'absolute',
    top: 175,
  },
  buttonText: {
    fontFamily: 'Gilroy-Bold',
    color: 'white',
    fontSize: 18,
  },
  muloNiz: {
    width: 600,
    height: 500,
    left: 75,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});

export default SignScreen;
