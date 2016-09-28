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
}
