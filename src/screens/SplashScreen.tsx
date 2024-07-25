import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>nectar</Text>
        <Text style={styles.tagline}>online groceries</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});

export default SplashScreen;
