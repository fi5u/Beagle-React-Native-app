import React, { Component } from 'react'
import {
    Picker,
    Text,
    View
} from 'react-native'
import FormItem from '../form-item/form-item'
import styles from './input-picker.style'

export default class InputPicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormItem
                label={this.props.label}
            >
                <Picker
                    selectedValue={this.props.selectedValue}
                    onValueChange={(newValue) => this.props.setStateFromComp(this.props.id, newValue)}
                >
                    {this.props.values.map(({label, value}) => {
                        return(
                            <Picker.Item key={value} label={label} value={value} />
                        )
                    })}
                </Picker>
            </FormItem>
        )
    }
}

InputPicker.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    values: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string,
            value: React.PropTypes.string
        })
    ).isRequired,
    selectedValue: React.PropTypes.string.isRequired,
    setStateFromComp: React.PropTypes.func.isRequired,
}
