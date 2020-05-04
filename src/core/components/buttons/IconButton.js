import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native'
import colors from 'core/styles/colors'
import PropTypes from 'prop-types';

class IconButton extends React.Component {

    constructor(props){
        super(props);
        this.iconSize = this.props.iconSize | 32
        this.numberOfLines = this.props.numberOfLines | 1
        this.iconSource = this.props.iconSource | require('assets/icons/camera_icon.png')
    }

    render(){
        return (
            <View style={this.props.style}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <View style={styles.container}>
                        <Image 
                            style={[
                                styles.icon, 
                                {width: this.iconSize, height: this.iconSize},
                                this.props.iconStyle
                            ]}
                            source={this.iconSource}
                        />
                        <Text 
                            numberOfLines={this.numberOfLines}
                            style={[styles.text, this.props.textStyle]}
                        >
                            {this.props.children ? this.props.children : this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

IconButton.propTypes = {
    iconSize: PropTypes.number,
    numberOfLines: PropTypes.number,
    textStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    onPress: PropTypes.func,
    iconSource: PropTypes.object
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.second,
        flexDirection: 'row',
        borderRadius: 5
    },
    icon:{
        margin: 5
    },
    text:{
        textAlign:'center',
        textAlignVertical:'center',
        flex: 1
    }
})

export default IconButton