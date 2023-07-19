import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../Components/Header';
import { Search } from '../Components/Search';
import Category from '../Components/Category';
import { Banner } from '../Components/Banner';
import { Fooditems } from '../Components/Fooditems';

export function Home() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 50 }}>
      <SafeAreaView style={{ gap: 20 }}>
        <Header />
        <Search />
        <Category />
        <Banner />
        <Fooditems/>
        <Text>Home Screen a</Text>
      </SafeAreaView>
    </View>
  );
}
