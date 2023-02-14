import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
//import ContadorV2 from './contador/ContadorV2';
import ListaProdutosV2 from './produtos/ListaProdutosV2';

function App() {
    return (
        <View style={style.container}>
            
            
            <ListaProdutosV2/>
            
            {/* <ContadorV2/> <ListaProdutos/>*/}
        </View>

    );
}


const style = StyleSheet.create(
    {
        container: {
           
            alignContent: 'center',
            alignItems:'center',
            justifyContent: 'center',
            flex: 1,
            
        },
        text:{
            alignItems:'center',
            color:'#FFF',
            fontSize: 40
        }
    }
)

export default App;