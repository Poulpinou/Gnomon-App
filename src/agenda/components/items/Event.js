import React from 'react';
import { StyleSheet, View, Text} from 'react-native'

import colors from 'core/styles/colors'
import {texts} from 'core/styles/mainStyle'
import moment from 'moment'

class Event extends React.Component {
    render(){
        const {title, description} = this.props.event;
        const date = moment(this.props.event.date)

        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.left_view}>
                    <Text style={styles.date}>{date.format("H:mm")}</Text>
                </View>
                <View style={styles.right_view}>
                    <Text style={texts.subtitle}>{title}</Text>
                    <Text style={texts.paragraph}>{description}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        minHeight: 80,
        backgroundColor: colors.main,
        borderRadius: 10,
        flexDirection:'row'
    },
    left_view:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.third,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderRightColor: '#DDD',
        borderRightWidth: 2
    },
    right_view:{
        flex: 6,
        paddingHorizontal: 5
    },
    date:{
        color: colors.textLight,
        textAlign:'center'
    }
})

export default Event;