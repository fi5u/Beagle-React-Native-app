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
                    id="websiteInputUrlValue"
                    placeholder="Website address"
                    label="Website address"
                    setStateFromComp={this.props.setStateFromComp}
                    value={this.props.websiteInputUrlValue}
                    handleSubmit={this.props.checkAutoWebsite}
                    editable={!this.props.websiteInputsDisabled}
                    clearButtonMode="while-editing" // IOS ONLY
                    keyboardType="url" // IOS ONLY
                    isValid={this.props.isInputValid('websiteInputUrlValue')}
                />
            </View>
        )
    }
}

AutoInputLayout.propTypes = {
    setStateFromComp: React.PropTypes.func.isRequired,
    websiteInputUrlValue: React.PropTypes.string.isRequired,
    checkAutoWebsite: React.PropTypes.func.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
    isInputValid: React.PropTypes.func.isRequired,
}
