import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import InputText from '../../forms/input-text/input-text'
import styles from './website-modal.style'

export default class AutoInputLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.tabContentBase}
            >
                <Text>AUTO</Text>
                <InputText
                    id="websiteInputAutoValue"
                    placeholder="Website address"
                    setStateFromComp={this.props.setStateFromComp}
                    value={this.props.websiteInputAutoValue}
                />
            </View>
        )
    }
}

AutoInputLayout.propTypes = {
    setStateFromComp: React.PropTypes.func.isRequired,
    websiteInputAutoValue: React.PropTypes.string.isRequired,
}
