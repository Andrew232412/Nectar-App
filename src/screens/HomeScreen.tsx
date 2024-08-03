import React from 'react';
import {View, TextInput, StyleSheet, Image, ScrollView} from 'react-native';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/morkovka.png')}
          style={styles.icon}
        />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Store"
        placeholderTextColor="#888"
      />
      {/* Add other components such as sliders and product lists */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  searchBar: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
  },
  // Add other styles for sliders and product lists
});

export default HomeScreen;
