import React, { Component } from 'react'
import {
    TextInput
} from 'react-native'
import FormItem from '../form-item/form-item'
import styles from './input-text.style'

export default class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormItem
                label={this.props.label}
            >
                <TextInput
                    style={styles.base}
                    placeholder={this.props.placeholder}
                    onChangeText={(text) => this.props.onChange(this.props.id, text)}
                    onSubmitEditing={() => this.props.handleSubmit(this.props.value)}
                    value={this.props.value}
                    editable={this.props.editable}
                    keyboardType={this.props.keyboardType}
                    autoCapitalize={this.props.keyboardType === 'url' ? 'none' : null}
                />
            </FormItem>
        )
    }
}

InputText.propTypes = {
    id: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func,
    editable: React.PropTypes.bool,
    label: React.PropTypes.string,
    keyboardType: React.PropTypes.string,
}
