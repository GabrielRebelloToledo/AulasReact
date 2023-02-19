import React, { useState,useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import UsersContext from '../context/UsersContext';
export default function UserForm({route, navigation}) {
 
  const [user, setUser]  = useState(route.params ? route.params : {});
 
 const { dispatch } = useContext(UsersContext);
 
 return (
   <View style={style.form}>
    <Text>Nome</Text>
    <TextInput 
    onChangeText={name => (setUser({...user, name}))} /* Atualiza o que tem dentro do campo */
    placeholder='Infome o nome'
    value={user.name}
    style={style.input}
    />
    <Text>Email</Text>
    <TextInput 
    onChangeText={email => (setUser({...user, email}))} /* Atualiza o que tem dentro do campo */
    placeholder='Infome o E-mail'
    value={user.email}
    style={style.input}
    />
    <Text>URL do Avatar</Text>
    <TextInput 
    onChangeText={avatarUrl => (setUser({...user, avatarUrl}))} /* Atualiza o que tem dentro do campo */
    placeholder='Infome a URL do Avatar'
    value={user.avatarUrl}
    style={style.input}
    />
    <Button title='Salvar' onPress={()=>{
      dispatch({
        type: user.id ? 'updateUser' : 'createUser',
        payload: user
      })
      navigation.goBack();
    }}/>
    
    
    </View>
  );
}


const style = StyleSheet.create({
  form:{
 padding:12
  },
  input:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:10,
  }
})