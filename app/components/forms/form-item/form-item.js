import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './form-item.style'

export default class FormItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={styles.base}
            >
                {this.props.label ?
                    <Text>{this.props.label}</Text>
                : null}
                {this.props.children}
            </View>
        )
    }
}

FormItem.propTypes = {
    children: React.PropTypes.node.isRequired,
    label: React.PropTypes.string,
}
