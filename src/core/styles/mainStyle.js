import { StyleSheet } from 'react-native'
import colors from './colors'

export const texts = StyleSheet.create({
    title : {
        fontSize : 26,
        fontWeight : "bold",
        textAlign: 'center',
        color: colors.textDark
    },
    subtitle : {
        fontSize : 20,
        fontWeight : "bold",
        color: colors.textDark
    },
    section: {
        fontSize : 20,
        fontWeight : "bold",
        color: colors.textDark,
        marginLeft : 20
    },
    paragraph:{
        fontSize : 16,
        color: colors.textDark,
        fontStyle:'italic'
    }
})