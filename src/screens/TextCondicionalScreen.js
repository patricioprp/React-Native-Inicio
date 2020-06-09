import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet} from "react-native";

const TextCondicional = () => {
    const [password,setPassword] = useState('');
    return(
        <View>
            <Text>Ingrese el Texto</Text>
            <TextInput style={style.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {password}
            onChangeText = {newValue=>setPassword(newValue)}
            />
            { password.length < 4 ? <Text>El passsword debe ser mayor a 4 caracteres</Text>: null}            
        </View>
    );
};

const style = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});
export default TextCondicional;