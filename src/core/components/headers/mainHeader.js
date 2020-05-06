import React from 'react';
import { View, StyleSheet } from 'react-native'

import colors from 'core/styles/colors';
import IconButton from 'core/components/buttons/IconButton'

export const mainHeaderOptions = (props) => {
    const {navigation} = props;

    return {
        headerTitleAlign:'center',
        headerStyle: styles.container,
        headerTitleStyle: styles.title,
        headerLeft: (hlProps) => {
            return (
                <View style={{flexDirection:'row'}}>
                    {navigation.canGoBack() ?
                        <IconButton 
                            style={{backgroundColor: 'transparent'}}
                            onPress={() => navigation.goBack()}
                            iconName='keyboard-backspace'
                            iconColor={colors.textLight}
                        />
                    :null}
                    <IconButton
                        style={{backgroundColor: 'transparent'}}
                        onPress={() => navigation.navigate("MainMenu")}
                        iconName='home'
                        iconColor={colors.textLight}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.third
    },
    title: {
        color: colors.textLight
    }
})