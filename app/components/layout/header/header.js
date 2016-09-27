import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './header.style'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.base}
            >
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
}
