import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './menu-item.style'

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.base}
                onPress={() => this.props.handleMenuItemPress(this.props.id)}
            >
                <Text
                    style={styles.text}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

MenuItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    handleMenuItemPress: React.PropTypes.func.isRequired,
}
