import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default CartScreen;