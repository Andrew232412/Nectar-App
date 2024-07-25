import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      {/* Add your login form here */}
      <Button
        title="Login"
        onPress={() => {
          /* Handle login */
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
