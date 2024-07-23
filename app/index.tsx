import {FlatList, ScrollView, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import APCarousel from "@/components/APCarousel";
import {Text} from "react-native-paper";
import { useState } from "react";
import APSearchBar from "@/components/APSearchBar";
import FilterList from "@/components/FilterList";
import CategoryList from "@/components/CategoryList";

export default function Index() {
  const data = [
    {
        id: "SearchBar"
    },
    {
      id: "filter"
    },
    {
      id: "category"
    },    
    {
      id: "category"
    },

]
  return (
    <SafeAreaView>
      <ScrollView 
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      >
        <APSearchBar/>
        <FilterList/>
        <APCarousel/>
        <Text>Test</Text>
        <CategoryList/>
        <CategoryList/>
        <CategoryList/>
      </ScrollView>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
  },
  scrollView: {
    paddingVertical: 1
  }
})