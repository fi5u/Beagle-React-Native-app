import React, { Component, PropTypes } from 'react'
import {
    DeviceEventEmitter,
    Dimensions,
    Keyboard,
    View,
    } from 'react-native'
import { setUIProp } from '../actions/ui'
import { connect } from 'react-redux'
import Websites from './websites'

class UI extends Component {
    constructor(props) {
        super(props)

        this.keyboardWillShow = this.keyboardWillShow.bind(this)
        this.keyboardWillHide = this.keyboardWillHide.bind(this)
    }

    componentWillMount () {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }

    componentDidMount() {
        this.props.dispatch(setUIProp('visibleHeight', Dimensions.get('window').height))
    }

    componentWillUnmount () {
        this.keyboardWillShowListener.remove()
        this.keyboardWillHideListener.remove()
    }

    keyboardWillShow(e) {
        const newHeight = Dimensions.get('window').height - e.endCoordinates.height
        this.props.dispatch(setUIProp('visibleHeight', newHeight))
    }

    keyboardWillHide(e) {
        this.props.dispatch(setUIProp('visibleHeight', Dimensions.get('window').height))
    }

    render() {
        return <Websites />
    }
}

UI.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(UI)
