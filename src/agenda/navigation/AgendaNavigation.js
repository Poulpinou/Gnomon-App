import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Agenda from 'agenda/components/screens/Agenda'
import AgendaMenu from 'agenda/components/screens/AgendaMenu'
import { mainHeaderOptions } from 'core/components/headers/mainHeader';
import IconButton from 'core/components/buttons/IconButton'
import colors from 'core/styles/colors';

const AgendaStack = createStackNavigator();
function AgendaStackScreen(){
    return (
        <AgendaStack.Navigator>
            <AgendaStack.Screen 
                name="Agenda" 
                component={Agenda}
                options={({navigation, route}) => ({
                    ...mainHeaderOptions({navigation, route}),
                    headerRight: props => (
                        <IconButton
                            style={{backgroundColor: 'transparent'}}
                            onPress={() => navigation.navigate("AgendaMenu")}
                            iconName='menu'
                            iconColor={colors.textLight}
                        />
                    )
                })}
            />
            <AgendaStack.Screen 
                name="AgendaMenu" 
                component={AgendaMenu}
                options={mainHeaderOptions}
            />
        </AgendaStack.Navigator>
    )
}

export default AgendaStackScreen;