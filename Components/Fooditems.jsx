import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../utils/Colors';


export function Fooditems() {
    const foods = [
        {
            id: 1,
            name: "Chicken",
            price: 100,
            image: "https://www.pngall.com/wp-content/uploads/9/Fried-Chicken-Bucket-PNG-File.png"
        },
        {
            id: 2,
            name: "Beef",
            price: 150,
            image: "https://www.pngall.com/wp-content/uploads/9/Fried-Chicken-Bucket-PNG-File.png"
        },
        {
            id: 3,
            name: "Pork",
            price: 200,
            image: "https://www.pngall.com/wp-content/uploads/9/Fried-Chicken-Bucket-PNG-File.png"
        }
    ]
    return (
        <View style={{ gap: 15 }}>
            <Text style={{ fontSize: 20 }}>Popular</Text>
            <FlatList
                horizontal showsHorizontalScrollIndicator={false}
                style={{ marginRight: 10 }}
                data={foods}
                renderItem={({ item, index }) => (
                    <View
                        style={{ backgroundColor: '#E3E3E3', borderRadius: 20, width: 150, height: 200, marginRight: 10, padding: 10, gap: 10 }}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>{item.name}</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: Colors.primary }}>${item.price}</Text>
                            <Ionicons name="ios-add-circle" size={24} color="green" />
                        </View>
                    </View>
                )}>
            </FlatList>
        </View>
    );
}
