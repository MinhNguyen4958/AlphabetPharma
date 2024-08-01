import { Button, TextInput, Text} from 'react-native-paper';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRef, useState } from 'react';

export default function User() {

  const [EmailTxt, setEmailTxt] = useState("");
  const [PwTxt, setPwText] = useState("");
  const [isPwSecure, setIsPwSecure] = useState(true);
  const inputRef = useRef(null)
  
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <TextInput 
          mode='outlined'
          label="Email" 
          onChangeText={() => setEmailTxt(EmailTxt)}
        />
        <TextInput 
          mode='outlined'
          label="Password"
          secureTextEntry={isPwSecure} 
          onChangeText={() => setEmailTxt(EmailTxt)}
          right={
            <TextInput.Icon icon="eye"
              onPress={() => {isPwSecure? setIsPwSecure(false) : setIsPwSecure(true)}}
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