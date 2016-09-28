import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Screen from '../layout/screen/screen'
import styles from './settings.style'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Screen
                title="Settings"
            >
                <Text>SETTINGS</Text>
            </Screen>
        )
    }
}

Settings.propTypes = {

}
