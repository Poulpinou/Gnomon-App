import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import MainMenu from 'core/components/screens/MainMenu'
import { mainHeaderOptions } from 'core/components/headers/mainHeader';
import IconButton from 'core/components/buttons/IconButton'

import AgendaNavigation from 'agenda/navigation/AgendaNavigation'

const MainStack = createStackNavigator();
function MainMenuStackScreen(){
    return (       
        <MainStack.Screen 
            name="MainMenu" 
            component={MainMenu} 
            options={({navigation, route}) => ({
                ...mainHeaderOptions({navigation, route}),
                title:"Accueil",
                headerRight: () => (
                    <IconButton 
                        title="Profile"
                        style={{marginRight: 5}}
                        iconName='person'
                    />
                )
            })}
        />           
    )
}

class Navigation extends React.Component {
    render(){
        return (
            <NavigationContainer>
                <MainStack.Navigator>
                    {MainMenuStackScreen()}
                    <MainStack.Screen name="Agenda" component={AgendaNavigation} options={{headerShown:false}}/>
                </MainStack.Navigator>                              
            </NavigationContainer>
        )
    }
}

export default Navigation;