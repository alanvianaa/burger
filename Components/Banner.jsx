import { TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../utils/Colors';


export function Banner() {
    return (<View style={{ gap: 15 }}>
        <Text style={{ fontSize: 20 }}>Promotions</Text>
        <TouchableOpacity
            style={{ backgroundColor: Colors.primary, borderRadius: 15, justifyContent: 'space-between', flexDirection: 'row', padding: 20 }}
            onPress={() => {
                console.log("Click on Promotions")
                // nav.navigate('Welcome')
            }}>
            <View style={{ gap: 15 }}>
                <Text style={{ fontSize: 15, color: 'white' }}>Today Offer</Text>
                <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>Free box of fries</Text>
                <Text style={{ fontSize: 15, color: 'white' }}>On all order above $150</Text>
            </View>
            <Image source={require('../assets/burger.png')} style={{ width: 100, height: 100 }}></Image>
        </TouchableOpacity>
    </View>
    );
}
