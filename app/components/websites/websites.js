import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Header from '../layout/header/header'
import styles from './websites.style'

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header
                    title="Websites"
                />
            </View>
        )
    }
}

Websites.propTypes = {

}
