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
                    id="template"
                    placeholder="www.website.com/[?]"
                    label="Website template"
                    onChange={this.props.updateWebsiteModalValue}
                    value={this.props.editModalValues.template}
                    editable={!this.props.isFrozen}
                    keyboardType="url" // IOS ONLY
                />

                <InputText
                    id="title"
                    placeholder="Website title"
                    label="Website title"
                    onChange={this.props.updateWebsiteModalValue}
                    value={this.props.editModalValues.title}
                    editable={!this.props.isFrozen}
                />

                <InputPicker
                    id="divider"
                    label="Word divider"
                    values={wordDividers}
                    selectedValue={this.props.editModalValues.divider}
                    onChange={this.props.updateWebsiteModalValue}
                />
            </View>
        )
    }
}

CustomInputLayout.propTypes = {
    // actions
    updateWebsiteModalValue: React.PropTypes.func.isRequired,

    // values
    editModalValues: React.PropTypes.shape({
        url: React.PropTypes.string,
        template: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        divider: React.PropTypes.string.isRequired,
    }).isRequired,
    isFrozen: React.PropTypes.bool.isRequired,
}
