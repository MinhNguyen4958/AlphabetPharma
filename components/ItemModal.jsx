import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, ScrollView, Image, FlatList, StyleSheet, Pressable, View, Dimensions} from 'react-native'
import { Button, Text, PaperProvider } from 'react-native-paper';
import {Dropdown} from 'react-native-paper-dropdown'
export default function ItemModal({isVisible, onClose}) {
    const OPTIONS = [
        {label: '1 Box', value: '1'},
        {label: '2 Boxes', value: '2'},
        {label: '3 Boxes', value: '3'},
        {label: '4 Boxes', value: '4'},
        {label: '5 Boxes', value: '5'},
        {label: '6 Boxes', value: '6'},
        {label: '7 Boxes', value:'7'},
        {label: '8 Boxes', value: '8'},
    ];

    const [currentValue, setCurrentValue] = useState();
    
    return (
        <PaperProvider>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name='close' color={'#fff'} size={30}/>
                        </Pressable>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image}/>
                        <Text variant="headlineLarge" style={{color: 'black'}}>Drug Title</Text>

                        <Text variant="bodyLarge" style={{ color:'black' }}>Type</Text>
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
                        contentContainerStyle={styles.listContainer}/>

                        <Text variant="bodyLarge" style={{ color:'black' }}>Type</Text>
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
                            contentContainerStyle={styles.listContainer}/>
                        
                        <Text variant="bodyLarge" style={{ marginHorizontal: 10 , color:'black'}}>Product Code: A465540023</Text>
                        <Dropdown
                            label={"Quantity"}
                            placeholder='Select Quantity'
                            options={OPTIONS}
                            value={currentValue}
                            onSelect={setCurrentValue}
                        />
                        <Button mode="contained" style={{ marginHorizontal: 10 , marginTop: '15%', marginBottom: 30}}>Add to cart</Button>
                    </ScrollView>
                </View>
            </Modal>
        </PaperProvider>

    );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '85%',
      width: '100%',
      backgroundColor: '#fff',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: 30,
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    image: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    marginRight: 20
    },
    listContainer: {
        paddingVertical: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 15,
    }   
  });
  