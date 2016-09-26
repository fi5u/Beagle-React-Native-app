/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/root'

class RNBase extends Component {
    render() {
        return <Root {...this.props} />
    }
}

AppRegistry.registerComponent('Beagle', () => RNBase)
