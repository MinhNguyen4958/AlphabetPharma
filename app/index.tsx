import { Text, View, Dimensions, StyleSheet } from "react-native";
import APCarousel from "@/components/APCarousel";
import { PaperProvider, Searchbar } from "react-native-paper";
import { useState } from "react";
import APSearchBar from "@/components/APSearchBar";
import FilterList from "@/components/FilterList";
import CategoryList from "@/components/CategoryList";

export default function Index() {
  
  return (
    <PaperProvider>
      <View
        style={styles.container}
      >
        <APSearchBar/>
        <FilterList/>
        <APCarousel/>
        <FilterList/>
        {/* <CategoryList/> */}

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: "center",
  }
})