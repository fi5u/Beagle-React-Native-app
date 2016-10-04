import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import InputText from '../../forms/input-text/input-text'
import InputPicker from '../../forms/input-picker/input-picker'
import styles from './website-modal.style'

export default class CustomInputLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const wordDividers = [{
            label: '+',
            value: '+'
        }, {
            label: '%20',
            value: '%20'
        }];

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
                    isValid={this.props.isInputValid('websiteInputTemplateValue')}
                />

                <InputText
                    id="websiteInputTitleValue"
                    placeholder="Website title"
                    label="Website title"
                    setStateFromComp={this.props.setStateFromComp}
                    value={this.props.websiteInputTitleValue}
                    editable={!this.props.websiteInputsDisabled}
                    isValid={this.props.isInputValid('websiteInputTitleValue')}
                />

                <InputPicker
                    id="websiteInputWordDividerValue"
                    label="Word divider"
                    values={wordDividers}
                    selectedValue={this.props.websiteInputWordDividerValue}
                    setStateFromComp={this.props.setStateFromComp}
                />
            </View>
        )
    }
}

CustomInputLayout.propTypes = {
    setStateFromComp: React.PropTypes.func.isRequired,
    websiteInputTemplateValue: React.PropTypes.string.isRequired,
    websiteInputTitleValue: React.PropTypes.string.isRequired,
    websiteInputWordDividerValue: React.PropTypes.string.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
    isInputValid: React.PropTypes.func.isRequired,
}
