import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '../navigation/types/navigation';

function ExploreScreen() {
  const navigation = useNavigation<'Explore'>();

  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
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

export default ExploreScreen;
