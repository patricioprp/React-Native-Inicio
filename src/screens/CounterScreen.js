import React, { useState } from 'react';
import { Text,View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter ] = useState(0);
  return(
      <View>
          <Button title="Increase" onPress={() =>{
              //nunca hacer esto
              //counter++
              //counter = counter + 1
              setCounter(counter+1);
          }}/>
          <Button title="Decrease" onPress={()=>{
              setCounter(counter-1);
          }} />
          <Text>Current count:{counter}</Text>
      </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;