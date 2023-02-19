import React, { useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
//import { Avatar, ListItem, Button } from 'react-native-elements';
import { Avatar, ListItem, Button, Icon } from '@rneui/themed'

//import users from '../data/users';
import UsersContext from '../context/UsersContext';

export default props => {

  const { state, dispatch } = useContext(UsersContext);


  function confirmeUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja Exluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({ type: 'deleteUser', payload: user })
        }
      },
      {
        text: 'Não'
      },

    ])
  }

  function getActions(item) {
    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          <Button type='clear' icon={<Icon
            name='edit'
            size={25}
            color='orange'

          />} 
          onPress={() => props.navigation.navigate('UserForm', item)} />
          <Button type='clear' icon={<Icon
            name='delete'
            size={25}
            color='red'

          />} onPress={() => confirmeUserDeletion(item)} />
        </View>



      </>

    )
  }


  function getUserItem({ item }) {
    return (
    <ListItem.Swipeable bottomDivider onPress={() => props.navigation.navigate('UserForm', item)} rightContent={getActions(item)}>
      <Avatar rounded source={{ uri: item.avatarUrl }}></Avatar>

      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>

    </ListItem.Swipeable>)

  }

  return (
    <View>
      <FlatList data={state.users} keyExtractor={user => user.id.toString()} renderItem={getUserItem} />

    </View>
  );
}