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
                buttons={[{
                    id: 'add',
                    position: 'primary',
                    title: 'Add',
                    onPress: this.props.handleStartAddWebsite
                }, {
                    id: 'somthing',
                    position: 'secondary',
                    title: 'Somthin',
                    onPress: this.props.handleStartAddWebsite
                }]}
            >
                <Text>WEBSITES</Text>
            </Screen>
        )
    }
}

Websites.propTypes = {
    handleStartAddWebsite: React.PropTypes.func.isRequired,
}
