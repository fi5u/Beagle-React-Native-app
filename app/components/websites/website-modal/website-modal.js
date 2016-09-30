import React, { Component } from 'react'
import {
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import styles from './website-modal.style'

export default class WebsiteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.websiteModalIsVisible}
                onRequestClose={() => {alert('Modal has been closed.')}}
            >
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableHighlight
                            onPress={this.props.hideModal}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </Modal>
        )
    }
}

WebsiteModal.propTypes = {

}
