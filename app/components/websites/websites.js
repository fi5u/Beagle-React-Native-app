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
                    websiteInputAutoValue={this.props.websiteInputAutoValue}
                    websiteInputTemplateValue={this.props.websiteInputTemplateValue}
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
    websiteInputAutoValue: React.PropTypes.string.isRequired,
    websiteInputTemplateValue: React.PropTypes.string.isRequired,
    checkAutoWebsite: React.PropTypes.func.isRequired,
    websiteInputsDisabled: React.PropTypes.bool.isRequired,
}
