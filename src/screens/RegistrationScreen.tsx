import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
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
});
