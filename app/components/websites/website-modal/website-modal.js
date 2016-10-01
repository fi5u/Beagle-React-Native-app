import React, { Component } from 'react'
import {
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import styles from './website-modal.style'
import Header from '../../layout/header/header'

export default class WebsiteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.props.websiteModalIsVisible}
                onRequestClose={this.props.modalClosed}
            >
                <View>
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
                </View>
            </Modal>
        )
    }
}

WebsiteModal.propTypes = {
    websiteModalIsVisible: React.PropTypes.bool.isRequired,
    hideModal: React.PropTypes.func.isRequired,
    saveWebsite: React.PropTypes.func.isRequired,
    modalClosed: React.PropTypes.func.isRequired,
}
