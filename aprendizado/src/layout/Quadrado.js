import React from 'react';
import { View,Text } from 'react-native';

export default props => {
    const lado = 50;
 return (
   <View style={{
    height:lado,
        width:lado,
        backgroundColor: props.cor || '#000'
   }}> 

        
   </View>
  );
}


