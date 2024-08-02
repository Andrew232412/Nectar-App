import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '../navigation/types/navigation';

export default function RegistrationScreen() {
  const navigation = useNavigation<'SignUp'>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/Mulo.png')} style={styles.image} />
      <Image
        source={require('../../assets/morkovka.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
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
      </View>
      <Text style={styles.agreementText}>
        By continuing you agree to our{' '}
        <Text style={styles.switchLink}>Terms of Service</Text> and{' '}
        <Text style={styles.switchLink}>Privacy Policy</Text>.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Handle sign up */
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.switchText}>
        Already have an account?{' '}
        <Text
          style={styles.switchLink}
          onPress={() => navigation.navigate('LogIn')}>
          Log In
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
    marginBottom: 40,
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
    marginTop: 15,
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
    top: 680,
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
    marginTop: 50,
    position: 'absolute',
    top: 740,
    fontSize: 16,
    alignSelf: 'center',
  },
  switchLink: {
    fontFamily: 'Gilroy-Bold',
    color: '#53B175',
  },
  agreementText: {
    fontFamily: 'Gilroy-Medium',
    textAlign: 'left',
    fontSize: 14,
    color: '#7C7C7C',
    marginLeft: 25,
  },
  muloNiz: {
    width: 600,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});
