import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../../assets/8140.png';
import Group from '../../assets/Group';
import {useNavigation} from '../navigation/types/navigation';

function WelcomeScreen() {
  const navigation = useNavigation<'Welcome'>();
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Group />
          <Text style={styles.title}>Welcome to our store</Text>
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
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: 300,
    fontSize: 48,
    color: 'white',
    marginBottom: 17,
    padding: 15,
    justifyContent: 'center',
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
    borderRadius: 15,
    width: 353,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
