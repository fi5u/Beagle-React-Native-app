import React, { Component } from 'react'
import {
    Text
} from 'react-native'
import Screen from '../layout/screen/screen'
import styles from './websites.style'
import WebsiteModal from './website-modal/website-modal'

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Screen
                title="Websites"
                buttons={[{
                    id: 'add',
                    position: 'primary',
                    title: 'Add',
                    onPress: this.props.handleStartAddWebsite
                }]}
            >
                <Text>WEBSITES</Text>
                <WebsiteModal
                    websiteModalIsVisible={this.props.websiteModalIsVisible}
                    hideModal={this.props.hideWebsiteModal}
                    saveWebsite={this.props.saveWebsite}
                    modalClosed={this.props.websiteModalClosed}
                    websiteInputMode={this.props.websiteInputMode}
                    setWebsiteInputMode={this.props.setWebsiteInputMode}
                    setStateFromComp={this.props.setStateFromComp}
                    isInputValid={this.props.isInputValid}
                    websiteInputUrlValue={this.props.websiteInputUrlValue}
                    websiteInputTemplateValue={this.props.websiteInputTemplateValue}
                    websiteInputTitleValue={this.props.websiteInputTitleValue}
                    websiteInputWordDividerValue={this.props.websiteInputWordDividerValue}
                    checkAutoWebsite={this.props.checkAutoWebsite}
                    websiteInputsDisabled={this.props.websiteInputsDisabled}
                />
            </Screen>
        )
    }
}

Websites.propTypes = {
    handleStartAddWebsite: React.PropTypes.func.isRequired,
    websiteModalIsVisible: React.PropTypes.bool.isRequired,
    hideWebsiteModal: React.PropTypes.func.isRequired,
    websiteModalClosed: React.PropTypes.func.isRequired,
    websiteInputMode: React.PropTypes.oneOf(['auto', 'custom']).isRequired,
    setWebsiteInputMode: React.PropTypes.func.isRequired,
    setStateFromComp: React.PropTypes.func.isRequired,
    isInputValid: React.PropTypes.func.isRequired,
    websiteInputUrlValue: React.PropTypes.string.isRequired,
    websiteInputTemplateValue: React.PropTypes.string.isRequired,
    websiteInputTitleValue: React.PropTypes.string.isRequired,
    websiteInputWordDividerValue: React.PropTypes.string.isRequired,
    checkAutoWebsite: React.PropTypes.func.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
}
