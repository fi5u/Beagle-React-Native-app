import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import UI from './ui'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <UI />
            </Provider>
        )
    }
}
