import React, { Component } from 'react'
import {
    Text,
    TextInput,
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
                    id="url"
                    placeholder="Website address"
                    label="Website address"
                    onChange={this.props.updateWebsiteModalValue}
                    value={this.props.editModalValues.url}
                    handleSubmit={this.props.checkAutoUrl}
                    editable={!this.props.isFrozen}
                    clearButtonMode="while-editing" // IOS ONLY
                    keyboardType="url" // IOS ONLY
                />
            </View>
        )
    }
}

AutoInputLayout.propTypes = {
    // actions
    updateWebsiteModalValue: React.PropTypes.func.isRequired,
    checkAutoUrl: React.PropTypes.func.isRequired,

    // values
    editModalValues: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        template: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        divider: React.PropTypes.string.isRequired,
    }).isRequired,
    isFrozen: React.PropTypes.bool.isRequired,
}
