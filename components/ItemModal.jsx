import { MaterialIcons } from '@expo/vector-icons';
import { Modal, ScrollView, Image, FlatList, StyleSheet, Pressable, View} from 'react-native'
import { Button, Text } from 'react-native-paper';

export default function ItemModal({isVisible, onClose}) {
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name='close' color={'#fff'} size={22}/>
                    </Pressable>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{ uri: 'https://picsum.photos/700' }}/>
                    <Text variant="titleLarge">Drug Title</Text>
                    <Text variant="bodyLarge">Type</Text>
                    <FlatList horizontal data={[...new Array(2).keys()]} scrollEnabled={false}
                    renderItem={({index}) => (
                        <Button
                        mode='elevated'
                        style={{marginRight: 5}}
                        onPress={() => console.log(`pressed Button ${index}`)
                        }>
                            Button {index}
                        </Button>
                    )}
                    />
                    <Text variant="bodyLarge">Type</Text>
                    <FlatList horizontal data={[...new Array(2).keys()]} scrollEnabled={false}
                    renderItem={({index}) => (
                        <Button
                        mode='elevated'
                        style={{marginRight: 5}}
                        onPress={() => console.log(`pressed Button ${index}`)
                        }>
                            Button {index}
                        </Button>
                    )}
                    />
                </ScrollView>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
  });
  