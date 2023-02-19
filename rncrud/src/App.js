import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import { StyleSheet } from 'react-native';
import { UsersProvider } from './context/UsersContext'


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
                    <Stack.Screen name='UserList' component={UserList} options={

                        ({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: ({ }) => (
                                    <TouchableOpacity style={style.button} activeOpacity={0.9} onPress={() => navigation.navigate('UserForm')}>
                                        <Text style={style.buttonText}>+</Text>
                                    </TouchableOpacity>
                                )
                            }
                        }

                    } />
                    <Stack.Screen name='UserForm' component={UserForm} options={{ title: 'Formulário de Usuários' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
const style = StyleSheet.create({
    button: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44

    },
    buttonText: {
        fontSize: 27,
        color: '#FFF',

    }
})