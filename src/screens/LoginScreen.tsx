import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '../navigation/types/navigation';

export default function LoginScreen() {
  const navigation = useNavigation<'LogIn'>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
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
    color: 'white',
    fontSize: 16,
  },
});
