import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name,setName] = useState('');
    return(
        <View>
            <Text>Enter Name</Text>
            <TextInput style = {style.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {name}
            onChangeText = {(newValue)=>setName(newValue)}
            />
            <Text>My Name is:{name}</Text>
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

export default TextScreen;