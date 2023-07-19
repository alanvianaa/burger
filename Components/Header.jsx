import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export function Header() {
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 35 }} >Menu</Text>
            <Image
                source={require('../assets/profile.png')}
                style={{ width: 50, height: 50, }} />
        </View>
    );
}
