import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import APCarousel from "@/components/APCarousel";

export default function Index() {
  const width = Dimensions.get('window').width;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <APCarousel/>
    </View>
  );
}
