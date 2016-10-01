import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View
} from 'react-native'
import FormItem from '../form-item/form-item'
import styles from './input-text.style'

export default class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormItem>
                <TextInput
                    style={styles.base}
                    placeholder={this.props.placeholder}
                    onChangeText={(text) => this.props.setStateFromComp(this.props.id, text)}
                    onSubmitEditing={this.props.handleSubmit.bind(this)}
                    value={this.props.value}
                    editable={this.props.editable}
                />
            </FormItem>
        )
    }
}

InputText.propTypes = {
    id: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    setStateFromComp: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    editable: React.PropTypes.bool.isRequired,
}
