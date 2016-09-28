import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Screen from '../layout/screen/screen'
import styles from './websites.style'

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Screen
                title="Websites"
            >
                <Text>WEBSITES</Text>
            </Screen>
        )
    }
}

Websites.propTypes = {

}
