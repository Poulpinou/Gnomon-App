import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native'

import Day from '../items/Day'

class DayContainer extends React.Component {

    render(){
        return (
            <FlatList
                style={[styles.list, this.props.style]}
                data={this.props.days}
                keyExtractor={(item => this.props.page + "_" + item.date.toString())}
                renderItem={({item}) => <Day day={item}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if(this.props.page < this.props.totalPages){
                        this.props.loadDays()
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    list:{

    }
})

export default DayContainer;