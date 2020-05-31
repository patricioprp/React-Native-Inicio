import React from 'react'
import { Text, StyleSheet,View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>hola soy un componente</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>Este es el componente Screen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});

export default ComponentsScreen;