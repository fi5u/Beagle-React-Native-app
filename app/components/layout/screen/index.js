import React, { Component, PropTypes } from 'react'
import {
    View
} from 'react-native'
import Header from '../header'
import styles from './styles'

export default class Screen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={styles.base}
            >
                <Header
                    title={this.props.title}
                    customStyle={styles.header}
                    buttons={this.props.buttons}
                />

                <View
                    style={styles.body}
                >
                    {this.props.children}
                </View>
            </View>
        )
    }
}

Screen.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.oneOf(['primary', 'secondary']),
            title: PropTypes.string,
            onPress: PropTypes.func,
        })
    ),
}
