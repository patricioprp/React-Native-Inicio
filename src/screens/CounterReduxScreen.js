import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CounterReduxScreen = () => {

    const reducer = (state,action) => {
        switch(action.type){
            case 'increase_counter':
            return { ...state, counter: state.counter + action.payload};
            case 'decreate_counter':
            return { ...state, counter: state.counter - action.payload};
            default:
            return state;
        };
    };

    const [ state, dispatch ] = useReducer(reducer,{ counter:0 });
    console.log(state);
   return(
       <View>
           <Button title="Increase" onPress={ () => dispatch({ type: 'increase_counter', payload:1 })}/>
           <Button title="Decrease" onPress={ () => dispatch({ type: 'decreate_counter', payload:1 })}/>
           <Text>Concurrent Count:{state.counter}</Text>
       </View>
   );
};

const style = StyleSheet.create({});

export default CounterReduxScreen;