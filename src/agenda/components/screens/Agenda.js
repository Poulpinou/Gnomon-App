import React from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native'

import { getAllEventsFromDate } from '../../api/agendaApi';
import DayContainer from '../containers/DayContainer'

class Agenda extends React.Component {

    constructor(props){
        super(props)
        this.currentDate = new Date().getDate();
        this.page=0
        this.totalPages=0
        this.state = {days: [], isLoading: false}         
    }

    componentDidMount(){
        this._loadDays();
    }

    _loadDays(){
        if(!this.state.isLoading){
            getAllEventsFromDate(this.currentDate, this.page + 1)
                .then(data => {
                    this.page = data.page
                    this.totalPages = data.totalPages
                    this.setState({
                        days: [...this.state.days, ...data.content],
                        isLoading: false
                    })
                })    
            this.setState({isLoading: true})       
        }
    }

    render(){
        return (
            <View style={styles.day_container}>
                <DayContainer
                    days={this.state.days}
                    loadDays={() => this._loadDays()}
                    navigation={this.props.navigation}
                    page={this.page}
                    totalPages={this.totalPages}
                />

                { this.state.isLoading?
                    <ActivityIndicator size="large" color="#DDF"/>
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    day_container: {
        flex: 1,
        marginHorizontal: 5
    }
})

export default Agenda;