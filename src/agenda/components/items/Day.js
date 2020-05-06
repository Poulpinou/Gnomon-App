import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native'

import Event from '../items/Event'
import {texts} from 'core/styles/mainStyle'

class Day extends React.Component {
    render(){
        return (
            <View style={[styles.constainer, this.props.style]}>
                <View style={styles.left_bar}/>
                <View style={styles.right_view}>
                    <Text style={[texts.subtitle, styles.date_text]}>{this.props.day.date}</Text>
                    {this.props.day.events.map((event) => {
                        return (<Event event={event} style={styles.event} />)
                    })}
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection:'row',
        marginVertical: 4
    },
    list_container:{
        flex: 1
    },
    event : {
        marginBottom: 5
    },
    date_text:{
        backgroundColor:"#DDD",
        width: '40%',
        borderTopRightRadius: 5
    },
    right_view:{
        flex: 1
    },
    left_bar:{
        backgroundColor:"#DDD",
        width: 5,
        marginBottom: 10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    }
})

export default Day;