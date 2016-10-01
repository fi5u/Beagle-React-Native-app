import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './website-modal.style'

export default class AutoInputLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.base}
            >
                <Text>AUTO</Text>
            </View>
        )
    }
}

AutoInputLayout.propTypes = {

}
