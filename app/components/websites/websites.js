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
                />
            </Screen>
        )
    }
}

Websites.propTypes = {
    handleStartAddWebsite: React.PropTypes.func.isRequired,
    websiteModalIsVisible: React.PropTypes.bool.isRequired,
    hideWebsiteModal: React.PropTypes.func.isRequired,
}
