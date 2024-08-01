import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function User(second) {
  return (
    <View style={styles.container}>
      <Button mode='contained' onPress={() => console.log("Pressed")}>Create Account</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });