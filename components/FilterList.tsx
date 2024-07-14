import { FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function FilterList() {
    return (
        <FlatList
        horizontal
        data={[...new Array(6).keys()]}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
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
    );
}
const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 15,
    }
})