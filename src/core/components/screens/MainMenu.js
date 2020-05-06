import React from 'react';
import { StyleSheet, View, Text} from 'react-native'
import { texts } from 'core/styles/mainStyle'
import IconButton from 'core/components/buttons/IconButton'

class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.buttonsIconSize = 50;
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={texts.section}>Notifications</Text>
                <View style={styles.notificationsFakeContainer}></View>
                <Text style={texts.section}>Navigation</Text>
                <View style={styles.navigationContainer}>
                    <IconButton 
                        title="Applications"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        iconName='archive'
                        onPress={() => {console.log("Click")}}
                    />

                    <IconButton 
                        title="Agenda"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        iconName="event-note"
                        onPress={() => this.props.navigation.navigate("Agenda")}
                    />

                    <IconButton 
                        title="Profil"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        iconName="person"
                        onPress={() => {console.log("Click")}}
                    />

                    <IconButton 
                        title="Paramètres"
                        style={styles.navigationButton} 
                        iconSize={this.buttonsIconSize}
                        iconName="tune"
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