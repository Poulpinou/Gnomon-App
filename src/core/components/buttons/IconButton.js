import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import colors from 'core/styles/colors'
import PropTypes from 'prop-types';

class IconButton extends React.Component {

    constructor(props){
        super(props);
        this.iconSize = this.props.iconSize || 26
        this.iconColor = this.props.iconColor || '#999999'
        this.iconName = this.props.iconName || 'not-interested'
        this.numberOfLines = this.props.numberOfLines || 1
        this.content = this.props.children ? this.props.children : this.props.title
    }

    render(){
        return (
            <View style={[styles.outer_container, this.props.style]}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <View style={styles.inner_container}>
                        <Icon 
                            name={this.iconName}
                            color={this.iconColor}
                            size={this.iconSize}
                            style={[
                                styles.icon,
                                this.props.iconStyle
                            ]}
                        />
                        {this.content?
                            <Text 
                                numberOfLines={this.numberOfLines}
                                style={[styles.text, this.props.textStyle]}
                            >
                                {this.content}
                            </Text>
                        :null}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

IconButton.propTypes = {
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconStyle: PropTypes.object,
    numberOfLines: PropTypes.number,
    textStyle: PropTypes.object,
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    outer_container:{
        backgroundColor: colors.second,
        borderRadius: 5
    },
    inner_container:{
        flexDirection: 'row'
    },
    icon:{
        margin: 5
    },
    text:{
        textAlign:'center',
        textAlignVertical:'center'
    }
})

export default IconButton