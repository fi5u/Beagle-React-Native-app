import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './menu-item.style'

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.base}
            >
                <Text
                    style={styles.text}
                >
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

MenuItem.propTypes = {
    title: React.PropTypes.string.isRequired,
}
