import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
    const nav = useNavigation()
    return (
        <LinearGradient style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }} colors={[Colors.primary, Colors.secondary]}>

            <Image style={{ width: 290, height: 290 }} source={require("../assets/welcome.png")}></Image>

            <View>
                <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center', lineHeight: 50, letterSpacing: 2.5 }} >
                    Enjoy{"\n"}Your Food
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    console.log("Go to Home")
                    nav.navigate('Home')
                }}
                style={{ backgroundColor: 'white', width: 200, height: 50, borderRadius: 20, padding: 10 }}
            >
                <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: 'bold', textAlign: 'center', lineHeight: 30 }}>Get Started</Text>
            </TouchableOpacity>
        </LinearGradient >
    );
}
