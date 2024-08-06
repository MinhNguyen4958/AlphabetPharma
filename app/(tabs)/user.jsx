import { Button, TextInput, Text} from 'react-native-paper';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRef, useState } from 'react';

export default function User() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <TextInput 
          mode='outlined'
          label="Email" 
          onChangeText={() => setEmail(Email)}
        />
        <TextInput 
          mode='outlined'
          label="Password"
          secureTextEntry={isPasswordSecure} 
          onChangeText={() => setPassword(Password)}
          right={
            <TextInput.Icon icon="eye"
              onPress={() => {isPasswordSecure? setIsPasswordSecure(false) : setIsPasswordSecure(true)}}
            />}
        />
        <Button mode='contained' onPress={() => console.log("Signed In")}>Sign in</Button>
        <Text variant='bodyLarge' style={{ textAlign: 'center' }}>Or</Text>
        <Button onPress={() => console.log("Create an Account")}>Create an Account</Button>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      marginHorizontal: 10,
      
    },
  });