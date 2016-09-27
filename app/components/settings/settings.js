import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Header from '../layout/header/header'
import styles from './settings.style'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header
                    title="Settings"
                />
            </View>
        )
    }
}

Settings.propTypes = {

}
