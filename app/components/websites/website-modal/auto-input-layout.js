import React, { Component, PropTypes } from 'react'
import {
    Text,
    TextInput,
    View
} from 'react-native'
import InputText from '../../forms/input-text/input-text'
import styles from './styles'

export default class AutoInputLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={styles.tabContentBase}
            >
                <Text>AUTO</Text>
                <InputText
                    id="url"
                    placeholder="Website address"
                    label="Website address"
                    onChange={this.props.updateValue}
                    value={this.props.values.url}
                    handleSubmit={this.props.fetchTemplate}
                    editable={!this.props.isFrozen}
                    clearButtonMode="while-editing" // IOS ONLY
                    keyboardType="url" // IOS ONLY
                />
            </View>
        )
    }
}

AutoInputLayout.propTypes = {
    updateValue: PropTypes.func.isRequired,
    fetchTemplate: PropTypes.func.isRequired,
    values: PropTypes.shape({
        url: PropTypes.string.isRequired,
        template: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
    }).isRequired,
    isFrozen: PropTypes.bool.isRequired,
}
