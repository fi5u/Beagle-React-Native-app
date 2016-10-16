import React, { Component } from 'react'
import {
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import Tabs from 'react-native-tabs'
import validate from '../../../services/validation'
import Header from '../../layout/header/header'
import AutoInputLayout from './auto-input-layout'
import CustomInputLayout from './custom-input-layout'
import styles from './website-modal.style'

export default class WebsiteModal extends Component {
    constructor(props) {
        super(props);
    }

    isFormValid() {
        if(this.props.editModal.mode === 'auto') {
            return validate(this.props.editModal.values.url, ['min-length', 4])
        }
        if(this.props.editModal.mode === 'custom') {
            return (
                validate(this.props.editModal.values.template, 'template') &&
                validate(this.props.editModal.values.title, ['min-length', 1])
            )
        }
    }

    render() {
        let layout;
        switch(this.props.editModal.mode) {
            case 'custom':
                layout =
                    <CustomInputLayout
                        updateWebsiteModalValue={this.props.updateWebsiteModalValue}
                        editModalValues={this.props.editModal.values}
                        isFrozen={this.props.editModal.isFrozen}
                    />;
                    break;
            default:
                layout =
                    <AutoInputLayout
                        editModalValues={this.props.editModal.values}
                        updateWebsiteModalValue={this.props.updateWebsiteModalValue}
                        checkAutoUrl={this.props.checkAutoUrl}
                        isFrozen={this.props.editModal.isFrozen}
                    />;
        }

        const headerButtons = [{
            position: 'secondary',
            title: 'Close',
            onPress: this.props.hideWebsiteEditModal,
        }, {
            position: 'primary',
            title: 'Save',
            onPress: () => this.props.addNewWebsite(this.props.editModal.values),
            isValid: this.isFormValid(),
        }];

        if(this.props.editModal.values.id !== null) {
            headerButtons[1].onPress = () => this.props.updateWebsite(this.props.editModal.values);
        }

        if(this.props.editModal.mode === 'auto') {
            headerButtons[1].onPress = () => this.props.checkAutoUrl(this.props.editModal.values.url);
        }

        let tabs = this.props.editModal.values.id === null ?
            <Tabs
                selected={this.props.websiteInputMode}
                onSelect={el => this.props.setModalInputMode(el.props.id)}
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
            : null;

        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.editModal.isShowing}
            >
                <Header
                    title="Add a website"
                    buttons={headerButtons}
                />

                {tabs}

                {layout}
            </Modal>
        )
    }
}

WebsiteModal.propTypes = {
    // actions
    hideWebsiteEditModal: React.PropTypes.func.isRequired,
    updateWebsiteModalValue: React.PropTypes.func.isRequired,
    setModalInputMode: React.PropTypes.func.isRequired,
    checkAutoUrl: React.PropTypes.func.isRequired,
    addNewWebsite: React.PropTypes.func.isRequired,
    updateWebsite: React.PropTypes.func.isRequired,

    // values
    editModal: React.PropTypes.shape({
        isShowing: React.PropTypes.bool.isRequired,
        isFrozen: React.PropTypes.bool.isRequired,
        mode: React.PropTypes.oneOf(['auto', 'custom']).isRequired,
        values: React.PropTypes.shape({
            url: React.PropTypes.string,
            template: React.PropTypes.string,
            title: React.PropTypes.string,
            divider: React.PropTypes.string,
        }).isRequired,
    }).isRequired,
}
