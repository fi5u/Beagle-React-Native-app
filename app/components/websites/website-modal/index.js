import React, { Component, PropTypes } from 'react'
import {
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import Tabs from 'react-native-tabs'
import validate from '../../../services/validation'
import Header from '../../layout/header'
import AutoInputLayout from './auto-input-layout'
import CustomInputLayout from './custom-input-layout'
import styles from './styles'

export default class WebsiteModal extends Component {
    constructor(props) {
        super(props)

        this.saveWebsite = this.saveWebsite.bind(this)
    }

    isFormValid() {
        if(this.props.modal.mode === 'auto') {
            return validate(this.props.modal.values.url, ['min-length', 4])
        }
        if(this.props.modal.mode === 'custom') {
            return (
                validate(this.props.modal.values.template, 'template') &&
                validate(this.props.modal.values.title, ['min-length', 1])
            )
        }
    }

    saveWebsite() {
        if(!this.isFormValid()) { return }
        this.props.saveWebsite(this.props.modal.values)
    }

    render() {
        let layout
        switch(this.props.modal.mode) {
            case 'custom':
                layout =
                    <CustomInputLayout
                        updateValue={this.props.updateValue}
                        values={this.props.modal.values}
                        isFrozen={this.props.modal.isFrozen}
                        submit={this.saveWebsite}
                    />
                    break
            default:
                layout =
                    <AutoInputLayout
                        values={this.props.modal.values}
                        updateValue={this.props.updateValue}
                        fetchTemplate={this.props.fetchTemplate}
                        isFrozen={this.props.modal.isFrozen}
                    />
        }

        const headerButtons = [{
            position: 'secondary',
            title: 'Close',
            onPress: this.props.close,
        }, {
            position: 'primary',
            title: 'Save',
            onPress: () => this.saveWebsite({...this.props.modal.values,...{id: this.props.modal.editId}}),
            isValid: this.isFormValid(),
        }]

        if(this.props.modal.mode === 'auto') {
            headerButtons[1].onPress = () => this.props.fetchTemplate(this.props.modal.values.url)
        }

        let tabs = this.props.modal.editId === null ?
            <Tabs
                selected={this.props.websiteInputMode}
                onSelect={el => this.props.setMode(el.props.id)}
            >
                <Text
                    id="auto"
                >
                    Auto
                </Text>

                <Text
                    id="custom"
                >
                    Custom
                </Text>
            </Tabs>
            : null

        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.modal.isShowing}
            >
                <Header
                    title="Add a website"
                    buttons={headerButtons}
                />

                {tabs}

                {layout}

                {this.props.modal.message ?
                    <Text>{this.props.modal.message}</Text>
                : null}
            </Modal>
        )
    }
}

WebsiteModal.propTypes = {
    modal: PropTypes.shape({
        isShowing: PropTypes.bool.isRequired,
        isFrozen: PropTypes.bool.isRequired,
        mode: PropTypes.oneOf([
            'auto',
            'custom'
        ]).isRequired,
        previousMode: PropTypes.string.isRequired,
        values: PropTypes.shape({
            id: PropTypes.number,
            url: PropTypes.string.isRequired,
            template: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            divider: PropTypes.string.isRequired,
        }).isRequired,
        message: PropTypes.string,
        messageStatus: PropTypes.string,
    }).isRequired,
    close: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired,
    setMode: PropTypes.func.isRequired,
    fetchTemplate: PropTypes.func.isRequired,
    saveWebsite: PropTypes.func.isRequired,
}
