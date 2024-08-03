import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '../navigation/types/navigation';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  const navigation = useNavigation<'LogIn'>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (err: unknown) {
      const firebaseError = err as {code: string; message: string};
      if (firebaseError.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (firebaseError.code === 'auth/invalid-email') {
        setError('The email address is not valid.');
      } else if (firebaseError.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (firebaseError.code === 'auth/invalid-credential') {
        setError('Incorrect credentials. Please try again.');
      } else {
        setError(firebaseError.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/Mulo.png')} style={styles.image} />
        <Image
          source={require('../../assets/morkovka.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>Enter your email and password</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Text style={styles.eyeIcon}>{secureTextEntry ? '👁' : '🙈'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.switchText}>
        Don't have an account?{' '}
        <Text
          style={styles.switchLink}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
      <Image
        style={styles.muloNiz}
        source={require('../../assets/Muloniz.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    padding: 10,
    backgroundColor: '#53B175',
    borderRadius: 5,
    zIndex: 10,
  },
  backButtonText: {
    fontFamily: 'Gilroy-Medium',
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 435,
    height: 320,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    height: 350,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 26,
    marginTop: 20,
    textAlign: 'left',
    marginLeft: 25,
    position: 'absolute',
    top: 233,
    color: '#030303',
  },
  subtitle: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 25,
    position: 'absolute',
    marginTop: 15,
    top: 277,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 25,
  },
  input: {
    height: 40,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginBottom: 15,
    width: 364,
    fontSize: 18,
    color: '#181725',
    fontFamily: 'Gilroy-Medium',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 364,
  },
  eyeIcon: {
    marginLeft: -25,
    marginBottom: 13,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: 364,
    position: 'absolute',
    top: 540,
    height: 67,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Gilroy-Bold',
    color: 'white',
    fontSize: 18,
  },
  switchText: {
    fontFamily: 'Gilroy-Medium',
    textAlign: 'center',
    marginTop: 10,
    position: 'absolute',
    top: 640,
    fontSize: 16,
    alignSelf: 'center',
  },
  switchLink: {
    fontFamily: 'Gilroy-Bold',
    color: '#53B175',
  },
  forgotPassword: {
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  muloNiz: {
    width: 600,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});
