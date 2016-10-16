import React, { Component } from 'react'
import {
    ListView,
    Text,
    View
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import Screen from '../layout/screen/screen'
import styles from './websites.style'
import WebsiteModal from './website-modal/website-modal'

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    renderRow(item) {
        const swipeoutBtns = [{
            text: 'Edit',
            onPress: () => {
                this.props.editWebsite(item.id);
            }
        }];

        return(
            // options: https://www.npmjs.com/package/react-native-swipeout
            <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                backgroundColor="#eee"
            >
                <View>
                    <Text>{item.title}</Text>
                </View>
            </Swipeout>
        );
    }

    render() {
        return (
            <Screen
                title="Websites"
                buttons={[{
                    position: 'primary',
                    title: 'Add',
                    onPress: this.props.showWebsiteEditModal
                }]}
            >
                <Text>WEBSITES</Text>

                <ListView
                    dataSource={this.props.websites}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />

                <WebsiteModal
                    hideWebsiteEditModal={this.props.hideWebsiteEditModal}
                    updateWebsiteModalValue={this.props.updateWebsiteModalValue}
                    setModalInputMode={this.props.setModalInputMode}
                    editModal={this.props.editModal}
                    checkAutoUrl={this.props.checkAutoUrl}
                    addNewWebsite={this.props.addNewWebsite}
                    updateWebsite={this.props.updateWebsite}
                />
            </Screen>
        )
    }
}

Websites.propTypes = {
    // actions
    showWebsiteEditModal: React.PropTypes.func.isRequired,
    hideWebsiteEditModal: React.PropTypes.func.isRequired,
    updateWebsiteModalValue: React.PropTypes.func.isRequired,
    setModalInputMode: React.PropTypes.func.isRequired,
    checkAutoUrl: React.PropTypes.func.isRequired,
    addNewWebsite: React.PropTypes.func.isRequired,
    updateWebsite: React.PropTypes.func.isRequired,
    editWebsite: React.PropTypes.func.isRequired,

    // values
    websites: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    editModal: React.PropTypes.object.isRequired,
}
