import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "./components/ColorCounter";

const SquareScreen = () => {

    const COLOR_INCREMENT = 15;

    const reducer = ( state, action ) => {
        // state === { red: number, green:number, blue: number };
        //action === { colorToChange: 'red' || 'green' || 'blue', amount : 15 || -15 }
        console.log(action.payload);
        switch(action.type){
            case 'change_red':
            //nunca hacer esto
            //state.red = state.red +-15;
            //Expresion condicional ternaria
           return state.red + action.payload > 255 || state.red + action.payload < 0 //condicion
            ? state // si no se cumple la condicion devuelve el state sin cambios
            :{...state, red: state.red + action.payload};// si se cumple la condicion devuelve el state actualizado
             
            case 'change_green':

            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state 
            :{...state, green: state.green + action.payload};

            case 'change_blue':

            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state 
            :{...state, blue: state.blue + action.payload};
            default:
            return state;
        }
    };

    const [ state, dispatch ] = useReducer(reducer,{ red:0, green:0, blue:0 });
    console.log(state);

    return(
        <View>
            <ColorCounter 
            onIncrease = { () => dispatch({ type:'change_red', payload: COLOR_INCREMENT }) }
            onDecrease = { () => dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENT }) }
            color ="red"
            />
            <ColorCounter 
            onIncrease = { () => dispatch({ type:'change_green', payload: COLOR_INCREMENT }) }
            onDecrease = { () => dispatch({ type: 'change_green', payload: -1*COLOR_INCREMENT }) }
            color ="green"/>
            <ColorCounter 
            onIncrease = { () => dispatch({ type:'change_blue', payload:COLOR_INCREMENT }) }
            onDecrease = { () => dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENT }) }
            color ="blue"/>
          <View 
          style = {{
               height: 150,
               width: 150,
               backgroundColor: `rgb(${state.red},${state.green},${state.blue})` 
            }} 
        />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreen;