import React, { Component } from 'react'
import {
    View
} from 'react-native'
import Header from '../header/header'
import styles from './screen.style'

export default class Screen extends Component {
    constructor(props) {
        super(props);
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
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    buttons: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string,
            position: React.PropTypes.oneOf(['primary', 'secondary']),
            title: React.PropTypes.string,
            onPress: React.PropTypes.func,
        })
    ),
}
