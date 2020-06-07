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
      <Button 
      title="Go to Image Screen"
      onPress={() => navigation.navigate('Image')}
      />
      <Button 
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}
      />
      <Button 
      title="Go to Color Demo"
      onPress={() => navigation.navigate('Color')}
      />
      <Button 
      title="Go to Square Demo"
      onPress={() => navigation.navigate('Square')}
      />
      <Button 
      title="Go to Square Demo With Redux"
      onPress={() => navigation.navigate('CounterRedux')}
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
