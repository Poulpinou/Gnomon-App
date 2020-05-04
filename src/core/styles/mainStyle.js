import { StyleSheet } from 'react-native'
import colors from './colors'

export const labels = StyleSheet.create({
    title : {
        fontSize : 26,
        fontWeight : "bold",
        textAlign: 'center'
    },
    section: {
        fontSize : 20,
        fontWeight : "bold",
        marginLeft : 20
    }
})

export const headers = {
    main: StyleSheet.create({
        container: {
            backgroundColor: colors.third
        },
        title: {
            color: colors.textLight
        }
    })
}