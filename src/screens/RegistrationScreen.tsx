import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '../navigation/types/navigation';

export default function RegistrationScreen() {
  const navigation = useNavigation<'SignUp'>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Registration Screen</Text>
      {/* Add your registration form here */}
      <Button
        title="Sign Up"
        onPress={() => {
          /* Handle sign up */
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
