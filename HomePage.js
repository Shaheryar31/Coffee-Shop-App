import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CategoryButtons from '../Components/CategoryButtons';
import PromoBanner from '../Components/PromoBanner';
import ProductList from '../Components/ProductList';

// Images
import Pic1 from '../Assests/Pic1.png';
import Pic2 from '../Assests/Pic2.png';
import Pic4 from '../Assests/Pic4.png';
import Scones from '../Assests/Scones.png';
import sandwhiches from '../Assests/sandwhiches.png';
import ostbager from '../Assests/ostbager.png';
import biscuits from '../Assests/biscuits.png';

export default function HomePage({ navigation }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const allProducts = [
    { image: Pic1, name: 'Caffe Mocha', sub: 'Deep Foam', price: '$ 10.2', category: 'Caffe Mocha' },
    { image: Pic2, name: 'Flat White', sub: 'Espresso', price: '$ 10.9', category: 'Flat White' },
    { image: Pic2, name: 'Americano', sub: 'Deep Foam', price: '$ 10.2', category: 'Americano' },
    { image: Pic4, name: 'Ice Coffee', sub: 'Deep Foam', price: '$ 10.2', category: 'Ice Coffee' },
    { image: biscuits, name: 'Biscuits', price: '$ 10.6', category: 'Biscuits' },
    { image: ostbager, name: 'Cheese Puffs', price: '$ 17.5', category: 'Cheese Puffs' },
    { image: sandwhiches, name: 'Sandwhiches', price: '$ 11.2', category: 'SandWiches' },
    { image: Scones, name: 'Scones', price: '$ 14.5', category: 'Scones' },
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = selectedCategories.length === 0
    ? allProducts
    : allProducts.filter(product => selectedCategories.includes(product.category));

  const categories = ['Caffe Mocha', 'Flat White', 'Americano', 'Ice Coffee'];
  const foodCategories = ['Biscuits', 'Cheese Puffs', 'SandWiches', 'Scones'];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.blackContainer}>
          <Text style={styles.locationLabel}>Location</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>Karachi, Pakistan</Text>
            <View style={{ padding: 5 }}>
              <Icon name="down" size={12} color="white" />
            </View>
          </View>

          {/* Search */}
          <View style={styles.searchRow}>
            <View style={styles.inputContainer}>
              <Icon style={{ marginLeft: 15 }} name="search1" size={24} color="white" />
              <TextInput
                style={styles.textInput}
                placeholder='Search Coffee'
                placeholderTextColor={'white'}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.box}>
                <Icon name="filter" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Promo Banner */}
          <View style={styles.promoBanner}>
            <PromoBanner />
          </View>
        </View>

        {/* Category Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryRow}>
            {categories.map((cat, idx) => (
              <CategoryButtons
                key={idx}
                text={cat}
                isSelected={selectedCategories.includes(cat)}
                onPress={() => toggleCategory(cat)}
              />
            ))}
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryRow}>
            {foodCategories.map((cat, idx) => (
              <CategoryButtons
                key={idx}
                text={cat}
                isSelected={selectedCategories.includes(cat)}
                onPress={() => toggleCategory(cat)}
              />
            ))}
          </View>
        </ScrollView>

        {/* Product List */}
        <View style={styles.productList}>
          {filteredProducts.map((item, index) => (
            <ProductList
              key={index}
              imageSource={item.image}
              mainText={item.name}
              subText={item.sub}
              moneyText={item.price}
              navigation={navigation}
              screenName="Detail"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blackContainer: {
    backgroundColor: '#313131',
    paddingBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  locationLabel: {
    color: 'white',
    opacity: 0.7,
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200'
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: 270,
    backgroundColor: '#A2A2A2',
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#313131',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  box: {
    marginLeft: 8,
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    alignItems: 'center',
  },
  promoBanner: {
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  productList: {
    paddingLeft: 17,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
