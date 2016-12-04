import React, { Component, PropTypes } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import styles from './styles'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    generateButtons(button, position) {
        if(button.position !== position) {
            return
        }

        let textStyle = button.isValid === false ? styles.btnTextDisabled : styles.btnText

        return(
            <TouchableOpacity
                key={button.title}
                onPress={button.onPress}
                disabled={button.isValid === false}
            >
                <Text
                    style={textStyle}
                >
                    {button.title}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        let primaryBtns
        let secondaryBtns

        if(this.props.buttons) {
            primaryBtns = this.props.buttons.map((button) => {
                return this.generateButtons(button, 'primary')
            })

            secondaryBtns = this.props.buttons.map((button) => {
                return this.generateButtons(button, 'secondary')
            })
        }


        return (
            <View
                style={[this.props.customStyle, styles.base]}
            >
                <Text
                    style={styles.title}
                >
                    {this.props.title}
                </Text>

                <View
                    style={styles.btnSecondary}
                >
                    {secondaryBtns}
                </View>

                <View
                    style={styles.btnPrimary}
                >
                    {primaryBtns}
                </View>
            </View>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.oneOf(['primary', 'secondary']),
            title: PropTypes.string,
            onPress: PropTypes.func,
            isValid: PropTypes.bool,
        })
    ),
}
