import { TextInput } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


export function Search() {
    return (<View
        style={{ backgroundColor: '#E3E3E3', borderRadius: 50, height: 40, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, gap: 15 }}>
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder='Search' style={{ flex: 1, fontSize: 17 }} />
    </View>
    );
}
