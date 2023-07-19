import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/Colors';

const Category = () => {
    const nav = useNavigation()
    const [selected, setSelected] = useState(0)
    const categories = [
        { name: 'All', image: '../assets/welcome.png' },
        { name: 'Burger', image: '../assets/burger.png' },
        { name: 'Pizza', image: '../assets/pizza.png' },
        { name: 'Drinks', image: '../assets/drinks.png' },
        { name: 'Vegetables', image: '../assets/vegetables.png' }
    ]
    return (
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={({ item, index }) => (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                    setSelected(index)
                    console.log("Click on " + item.name)
                    // nav.navigate('Welcome')
                }}>
                <View style={{ backgroundColor: selected === index ? Colors.primary : '#E7E7E7', borderRadius: 20, height: 80, width: 70, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/welcome.png')} style={{ width: 60, height: 60 }}></Image>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: selected === index ? Colors.primary : '#B4B4B4' }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )} />
    );
};

export default Category;
