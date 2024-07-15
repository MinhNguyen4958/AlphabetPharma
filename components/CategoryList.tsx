import { FlatList, StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-paper';

export default function CategoryList() {
    return (
      <FlatList
      horizontal
      data={[...new Array(6).keys()]}
      showsHorizontalScrollIndicator={false}
      renderItem={({index}) => (
        <Card style={{marginRight: 5}}>
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
    paddingVertical: 5,
    paddingLeft: 5,
    marginTop: 50,
    marginBottom: 15,
  }
})