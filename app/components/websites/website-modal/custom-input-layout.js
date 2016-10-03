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

        const isTemplateUrl = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(this.props.websiteInputTemplateValue);

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
                    isValid={isTemplateUrl && this.props.websiteInputTemplateValue.indexOf('[?]') > -1}
                />

                <InputText
                    id="websiteInputTitleValue"
                    placeholder="Website title"
                    label="Website title"
                    setStateFromComp={this.props.setStateFromComp}
                    value={this.props.websiteInputTitleValue}
                    editable={!this.props.websiteInputsDisabled}
                    isValid={this.props.websiteInputTitleValue.length > 0}
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
}
