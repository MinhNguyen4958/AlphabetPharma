import { Keyboard, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {useState} from 'react'
export default function SignUpPage(second) {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [Ward, setWard] = useState("")
    const [District, setDistrict] = useState("")
    const [Province, setProvince] = useState("")
    const [Password, setPassword] = useState("")
    const [VerifyPassword, setVerifyPassword] = useState("")

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isVerifyPasswordSecure, setIsVerifyPasswordSecure] = useState(true);
    
    const PasswordMatch = (Password, VerifyPassword) => Password.localeCompare(VerifyPassword);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput mode="outlined" label={"Name"} onChangeText={() => setName(Name)}/>
                <TextInput mode="outlined" label={"Email"} onChangeText={() => setEmail(Email)}/>
                <TextInput mode="outlined" label={"Phone Number"} onChangeText={() => setPhoneNumber(PhoneNumber)}/>
                <TextInput mode="outlined" label={"Address"} onChangeText={() => setAddress(Address)}/>
                <TextInput mode="outlined" label={"Ward"} onChangeText={() => setWard(Ward)}/>
                <TextInput mode="outlined" label={"District"} onChangeText={() => setDistrict(District)}/>
                <TextInput mode="outlined" label={"Province"} onChangeText={() => setProvince(Province)}/>
                <TextInput mode="outlined" label={"Password"} secureTextEntry={isPasswordSecure} onChangeText={() => setPassword(Password)} 
                 right={
                    <TextInput.Icon icon="eye"
                      onPress={() => {isPasswordSecure? setIsPasswordSecure(false) : setIsPasswordSecure(true)}}
                    />}
                />
                <TextInput mode="outlined" label={"Verify Password"} secureTextEntry={isVerifyPasswordSecure} onChangeText={() => setVerifyPassword(VerifyPassword)} 
                 right={
                    <TextInput.Icon icon="eye"
                      onPress={() => {isVerifyPasswordSecure? setIsVerifyPasswordSecure(false) : setIsVerifyPasswordSecure(true)}}
                    />}
                />
                <Button mode="contained" onPress={() => {
                    console.log(Password);
                    console.log(VerifyPassword);
                    
                    // PasswordMatch(Password, VerifyPassword)? console.log("Yes") : console.log("Password does not match");
                }}>Sign Up</Button>
            </View>            
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    }
})