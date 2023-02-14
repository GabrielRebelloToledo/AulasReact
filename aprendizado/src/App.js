import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
//import ContadorV2 from './contador/ContadorV2';
//import ListaProdutosV2 from './produtos/ListaProdutosV2';
//import DigiteSeuNome from './DigiteSeuNome';
import FlexBoxV1 from './layout/FlexBoxV1';
function App() {
    return (
        <View style={style.container}>
            
            <FlexBoxV1/>
            {/*<DigiteSeuNome/> <ListaProdutosV2/> <ContadorV2/> <ListaProdutos/>*/}
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