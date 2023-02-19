import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';


export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
            <Quadrado cor='#010' />
            <Quadrado cor='#0112' />

        </View>
    );
}

const style = StyleSheet.create({
    FlexV2:{
  flex:1,
  width:'100%',
  backgroundColor:'#000',
  justifyContent:'space-between'
  , alignItems:'center'
    }
})