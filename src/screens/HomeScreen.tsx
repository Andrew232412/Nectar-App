import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://link-to-header-image.png'}}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Fresh Vegetables</Text>
        <Text style={styles.subtitle}>Get Up To 40% OFF</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.product}>
            <Image
              source={{uri: 'https://link-to-product-image.png'}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Organic Bananas</Text>
            <Text style={styles.productPrice}>$4.99</Text>
          </View>
          <View style={styles.product}>
            <Image
              source={{uri: 'https://link-to-product-image.png'}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Red Apple</Text>
            <Text style={styles.productPrice}>$4.99</Text>
          </View>
          {/* Add more products here */}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.product}>
            <Image
              source={{uri: 'https://link-to-product-image.png'}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Beef Bone</Text>
            <Text style={styles.productPrice}>$4.99</Text>
          </View>
          <View style={styles.product}>
            <Image
              source={{uri: 'https://link-to-product-image.png'}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Broiler Chicken</Text>
            <Text style={styles.productPrice}>$4.99</Text>
          </View>
          {/* Add more products here */}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  section: {
    marginVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'tomato',
  },
  product: {
    marginRight: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
  },
});
