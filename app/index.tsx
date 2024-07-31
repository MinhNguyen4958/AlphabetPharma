import { ScrollView, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import {Text} from "react-native-paper";
import { useState } from "react";

import APSearchBar from "@/components/APSearchBar";
import FilterList from "@/components/FilterList";
import CategoryList from "@/components/CategoryList";
import APCarousel from "@/components/APCarousel";
import ItemModal from "@/components/ItemModal";


export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onModalOpen = () => {
    setIsModalVisible(true)
  }
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
        <CategoryList onPress={onModalOpen}/>
        <CategoryList onPress={onModalOpen}/>
        <CategoryList onPress={onModalOpen}/>
        <ItemModal isVisible={isModalVisible} onClose={onModalClose}/>
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