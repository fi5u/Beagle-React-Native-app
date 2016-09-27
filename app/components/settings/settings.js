import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './settings.style'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>SETTINGS</Text>
            </View>
        )
    }
}

Settings.propTypes = {

}
