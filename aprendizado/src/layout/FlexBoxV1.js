import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';


export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado />
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
            <Quadrado cor='#010' />
            <Quadrado cor='#011' />

        </View>
    );
}

const style = StyleSheet.create({
    FlexV1:{
  flexGrow:1,
  backgroundColor:'#000',
  justifyContent:'space-between'
    }
})