import { Text, View, Dimensions, StyleSheet } from "react-native";
import APCarousel from "@/components/APCarousel";
import { PaperProvider, Searchbar } from "react-native-paper";
import { useState } from "react";

export default function Index() {
  
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: "center",
        }}
      >
        <Searchbar
          placeholder="Search AlphabetPharma"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={
            {
              marginVertical:20
            }
          }

        />
        <APCarousel style={styles.Banner}/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  Banner: {
    marginVertical: 20
  }
})