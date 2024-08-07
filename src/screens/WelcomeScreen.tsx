import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../../assets/pngs/8140.png';
// import Group from '../../assets/pngs/Group.png';
import {useNavigation} from '../navigation/types/navigation';

function WelcomeScreen() {
  const navigation = useNavigation<'Welcome'>();
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          {/* <Group /> It's an icon of carrot on the WelcomeScreen, make as svg*/} 
          <Text style={styles.title}>Welcome {'\n'} to our store</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 48,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
    color: 'rgba(252, 252, 252, 0.7)',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: 353,
    height: 67,
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: 'Gilroy-Bold',
    color: '#FFF9FF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
