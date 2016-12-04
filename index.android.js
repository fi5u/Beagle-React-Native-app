import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/containers/root'

class RNBase extends Component {
    render() {
        return <Root />
    }
}

AppRegistry.registerComponent('Beagle', () => RNBase)
