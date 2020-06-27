import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={style.viewStyle}> 
            <Text style={style.textStyle}>Child #1</Text>
            <Text style={style.textStyle}>Child #2</Text>
            <Text style={style.textStyle}>Child #3</Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
     //   justifyContent:'space-evenly',
     //   justifyContent:'center',
     //   justifyContent:'flex-end',
     //   justifyContent:'flex-start',
     //   justifyContent:'space-around',
        justifyContent:'center',
        flexDirection:'row',
        height:200
    },
    textStyle:{
        borderWidth:3,
        borderColor:'red'
    }
});

export default BoxScreen;