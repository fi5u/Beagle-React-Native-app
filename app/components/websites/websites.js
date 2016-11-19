import React, { Component } from 'react'
import {
    ListView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import Screen from '../layout/screen/screen'
import styles from './websites.style'
import WebsiteModal from './website-modal/website-modal'

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    op() {
        alert('press');
    }

    renderRow(item) {
        const swipeoutBtns = [{
            text: 'Delete',
            type: 'secondary',
            onPress: () => {
                this.props.removeWebsite(item.id);
            }
        }, {
            text: 'Edit',
            type: 'primary',
            onPress: () => {
                this.props.editWebsite(item.id);
            }
        }];

        const queryOutput =
            this.props.query.id === item.id ?
                <TextInput
                    style={{height: 25}}
                    placeholder="Query"
                    onChangeText={(text) => this.props.updateQueryValue(text)}
                    onSubmitEditing={this.props.submitQuery}
                    value={this.props.query.value}
                    autoCapitalize="none"
                    autoFocus={true}
                    returnKeyType="go"
                    clearButtonMode="always"
                /> : null;
        return(
            // options: https://www.npmjs.com/package/react-native-swipeout
            <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                backgroundColor="#eee"
            >

                <TouchableOpacity
                    onPress={() => this.props.activateQuery(item.id)}
                >
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                {queryOutput}

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
                    keyboardShouldPersistTaps={true}
                />

                <WebsiteModal
                    hideWebsiteEditModal={this.props.hideWebsiteEditModal}
                    updateWebsiteModalValue={this.props.updateWebsiteModalValue}
                    setModalInputMode={this.props.setModalInputMode}
                    editModal={this.props.editModal}
                    checkAutoUrl={this.props.checkAutoUrl}
                    addNewWebsite={this.props.addNewWebsite}
                    updateWebsite={this.props.updateWebsite}
                    generateTemplate={this.props.generateTemplate}
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
    removeWebsite: React.PropTypes.func.isRequired,
    updateQueryValue: React.PropTypes.func.isRequired,
    activateQuery: React.PropTypes.func.isRequired,

    // async
    submitQuery: React.PropTypes.func.isRequired,
    generateTemplate: React.PropTypes.func.isRequired,

    // values
    websites: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    editModal: React.PropTypes.object.isRequired,
    query: React.PropTypes.object.isRequired,
}
