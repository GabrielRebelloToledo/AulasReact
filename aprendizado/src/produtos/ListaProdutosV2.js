import React from 'react';
import { View, Text, FlatList } from 'react-native';
import produtos from './produtos';
export default props => {
    return (
        <>
            <Text>Lista de Produtos V2</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={({ item: p }) => {
                    return <Text>{p.id}) {p.nome} - {p.preco}</Text>
                }}>

            </FlatList>
        </>
    );
}