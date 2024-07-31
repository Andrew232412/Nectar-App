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
      <Text style={styles.subtitle}>Текст...</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Text style={styles.eyeIcon}>{secureTextEntry ? '👁' : '🙈'}</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
    height: 200, // Adjust as needed
    resizeMode: 'contain',
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 150, // Adjust as needed
    left: 20, // Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  switchText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  switchLink: {
    color: '#53B175',
    fontWeight: 'bold',
  },
});
