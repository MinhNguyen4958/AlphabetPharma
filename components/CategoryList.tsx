import { FlatList, StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-paper';

export default function CategoryList() {
    return (
      <FlatList
      horizontal
      data={[...new Array(6).keys()]}
      showsHorizontalScrollIndicator={false}
      style={styles.listContainer}
      renderItem={({index}) => (
        <Card style={{marginRight: 10, marginBottom:5}}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title title={`Card ${index}`} subtitle="Card Subtitle"/>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button onPress={() => console.log(`Card Button ${index} pressed`)}>Ok</Button>
          </Card.Actions>
        </Card>
      )}
      />
    )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 5,
    marginVertical: 15,
  }
})