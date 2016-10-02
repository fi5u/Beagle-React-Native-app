import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import InputText from '../../forms/input-text/input-text'
import styles from './website-modal.style'

export default class CustomInputLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.tabContentBase}
            >
                <Text>CUSTOM</Text>
                <InputText
                    id="websiteInputTemplateValue"
                    placeholder="www.website.com/[?]"
                    label="Website template"
                    setStateFromComp={this.props.setStateFromComp}
                    value={this.props.websiteInputTemplateValue}
                    editable={!this.props.websiteInputsDisabled}
                    keyboardType="url" // IOS ONLY
                />
            </View>
        )
    }
}

CustomInputLayout.propTypes = {
    setStateFromComp: React.PropTypes.func.isRequired,
    websiteInputTemplateValue: React.PropTypes.string.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
}
