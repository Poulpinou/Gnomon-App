import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import { labels } from '../../styles/mainStyle'
import IconButton from '../buttons/IconButton'

class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.buttonsIconSize = 50;
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={labels.section}>Notifications</Text>
                <View style={styles.notificationsFakeContainer}></View>
                <Text style={labels.section}>Navigation</Text>
                <View style={styles.navigationContainer}>
                    <IconButton 
                        title="Applications"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        onPress={() => {console.log("Click")}}
                    />

                    <IconButton 
                        title="Agenda"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        onPress={() => {console.log("Click")}}
                    />

                    <IconButton 
                        title="Profil"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        onPress={() => {console.log("Click")}}
                    />

                    <IconButton 
                        title="Paramètres"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        onPress={() => {console.log("Click")}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    notificationsFakeContainer:{
        flex: 2,
        backgroundColor: '#CCC'
    },
    navigationContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    navigationButton:{
        flexBasis: '49%',
        marginVertical: '1%'
    }
})

export default MainMenu;