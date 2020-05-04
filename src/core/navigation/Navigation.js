import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import MainMenu from 'core/components/screens/MainMenu'
import { headers } from 'core/styles/mainStyle';
import IconButton from 'core/components/buttons/IconButton'

const MainStack = createStackNavigator();
function MainMenuStackScreen(){
    return (
        <MainStack.Navigator>
            <MainStack.Screen 
                name="MainMenu" 
                component={MainMenu} 
                options={
                    {
                        title:"Accueil",
                        headerTitleAlign:'center',
                        headerStyle: headers.main.container,
                        headerTitleStyle: headers.main.title,
                        headerRight: () => (
                            <IconButton 
                                title="Profile"
                                style={{marginRight: 5}}
                            />
                        )
                    }
                }
            />
        </MainStack.Navigator>
    )
}


class Navigation extends React.Component {
    render(){
        return (
            <NavigationContainer>
                {MainMenuStackScreen()}
            </NavigationContainer>
        )
    }
}

export default Navigation;