import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useState} from "react";

export default function APCarousel() {
    const width = Dimensions.get('window').width;
    const [banner] = useState([
        { uri: 'https://picsum.photos/700' },
        { uri: 'https://picsum.photos/701' },
        { uri: 'https://picsum.photos/702' },
        { uri: 'https://picsum.photos/703' }
    ])
    return (
        <Carousel
        loop
        width={width}
        height={width/2}
        autoPlay={true}
        data={banner}
        scrollAnimationDuration={1000}
        style={styles.banner}
        renderItem={({item, index}) => (
            <View >
                <Image source={item} key={index} style={styles.image}/>
            </View>
            
        )}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
    },
    banner: {
        marginTop: 10,
        marginBottom: 10,
        zIndex: 1
      }
})