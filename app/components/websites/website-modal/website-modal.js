import React, { Component } from 'react'
import {
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import Tabs from 'react-native-tabs'
import Header from '../../layout/header/header'
import AutoInputLayout from './auto-input-layout'
import CustomInputLayout from './custom-input-layout'
import styles from './website-modal.style'

export default class WebsiteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layout;
        switch(this.props.websiteInputMode) {
            case 'custom':
                layout =
                    <CustomInputLayout
                        setStateFromComp={this.props.setStateFromComp}
                        websiteInputTemplateValue={this.props.websiteInputTemplateValue}
                        websiteInputsDisabled={this.props.websiteInputsDisabled}
                    />;
                    break;
            default:
                layout =
                    <AutoInputLayout
                        setStateFromComp={this.props.setStateFromComp}
                        websiteInputAutoValue={this.props.websiteInputAutoValue}
                        checkAutoWebsite={this.props.checkAutoWebsite}
                        websiteInputsDisabled={this.props.websiteInputsDisabled}
                    />;
        }

        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.websiteModalIsVisible}
                onRequestClose={this.props.modalClosed}
            >
                <Header
                    title="Add a website"
                    buttons={[{
                        id: 'closeWebsiteModal',
                        position: 'secondary',
                        title: 'Close',
                        onPress: this.props.hideModal,
                    }, {
                        id: 'saveWebsite',
                        position: 'primary',
                        title: 'Save',
                        onPress: this.props.saveWebsite,
                    }]}
                />
                <Tabs
                    selected={this.props.websiteInputMode}
                    onSelect={el => this.props.setWebsiteInputMode(el.props.id)}
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

                {layout}
            </Modal>
        )
    }
}

WebsiteModal.propTypes = {
    websiteModalIsVisible: React.PropTypes.bool.isRequired,
    hideModal: React.PropTypes.func.isRequired,
    saveWebsite: React.PropTypes.func.isRequired,
    modalClosed: React.PropTypes.func.isRequired,
    websiteInputMode: React.PropTypes.oneOf(['auto', 'custom']).isRequired,
    setWebsiteInputMode: React.PropTypes.func.isRequired,
    setStateFromComp: React.PropTypes.func.isRequired,
    websiteInputAutoValue: React.PropTypes.string.isRequired,
    websiteInputTemplateValue: React.PropTypes.string.isRequired,
    checkAutoWebsite: React.PropTypes.func.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
}
