import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

import IconButton from 'core/components/buttons/IconButton'

class Agenda extends React.Component {

    static navigationOptions = {
        header: ({navigate}) => ({
          left: (
                <IconButton 
                    title="Menu"
                    style={{marginRight: 5}}
                    onPress={() => navigate("AgendaMenu")}
                />
            )
        }),
    };

    render(){
        return (
            <Text>Agenda</Text>
        )
    }
}

export default Agenda;