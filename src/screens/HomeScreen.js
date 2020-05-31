import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen </Text>
      <Button 
      title="Go to component Demo"
      onPress={() => navigation.navigate('Component')}
      />
      <Button 
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />
      </View>
      );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
