import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useState} from "react";

export default function APCarousel() {
    const width = Dimensions.get('window').width;
    const [banner] = useState([
        require('../assets/images/jose_wallpaper.png'),
        require('../assets/images/p3r-all-out-cards.png'),
        require('../assets/images/the gang.png'),
    ])
    return (
        <Carousel
        loop
        width={width}
        height={width/2}
        autoPlay={true}
        data={banner}
        style={styles.banner}
        scrollAnimationDuration={1000}
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
    imageContainer: {
        flex: 1,
        borderWidth:.5,
        justifyContent: 'center'
    },
    banner: {
        marginTop: 10,
        marginBottom: 20
      }
})