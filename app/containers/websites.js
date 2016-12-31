import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RNFetchBlob from 'react-native-fetch-blob'
import Swipeout from 'react-native-swipeout'
import { generateQueryUrl } from '../services/url'
import {
    activateQuery,
    deactivateQuery,
    startQuery,
    updateQueryValue,
    } from '../actions/query'
import {
    closeEdit,
    editWebsite,
    fetchTemplate,
    saveWebsite,
    setEditMode,
    setInvalidField,
    updateEditValue,
    } from '../actions/edit'
import {
    addNewTemplate,
    removeWebsite,
    } from '../actions/websites'
import {
    Image,
    Linking,
    ListView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    } from 'react-native'
import Screen from '../components/layout/screen'
import WebsiteModal from '../components/websites/website-modal'

class Websites extends Component {
    constructor(props) {
        super(props)

        this.renderRow = this.renderRow.bind(this)
        this.addNewTemplate = this.addNewTemplate.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.updateEditValue = this.updateEditValue.bind(this)
        this.setEditMode = this.setEditMode.bind(this)
        this.fetchTemplate = this.fetchTemplate.bind(this)
        this.saveWebsite = this.saveWebsite.bind(this)
        this.setInvalid = this.setInvalid.bind(this)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    editWebsite(website) {
        this.props.dispatch(editWebsite(website))
    }

    addNewTemplate() {
        this.props.dispatch(addNewTemplate())
    }

    closeEdit() {
        this.props.dispatch(closeEdit())
    }

    updateEditValue(name, value) {
        this.props.dispatch(updateEditValue(name, value))
    }

    setEditMode(mode) {
        this.props.dispatch(setEditMode(mode))
    }

    fetchTemplate(url) {
        this.props.dispatch(fetchTemplate(url))
    }

    saveWebsite(website) {
        this.props.dispatch(saveWebsite(website))
    }

    removeWebsite(id) {
        this.props.dispatch(removeWebsite(id))
    }

    toggleQuery(id) {
        if(this.props.query.queriedWebsite === id) {
            this.props.dispatch(deactivateQuery())
        }
        else {
            this.props.dispatch(activateQuery(id))
        }
    }

    updateQueryValue(newValue) {
        this.props.dispatch(updateQueryValue(newValue))
    }

    setInvalid(fieldName) {
        this.props.dispatch(setInvalidField(fieldName))
    }

    startQuery(website) {
        const url = generateQueryUrl(this.props.query.currentValue, website)
        this.props.dispatch(startQuery(website))

        Linking.canOpenURL(url)
            .then(supported => {
                if(!supported) {
                    console.log('Can\'t handle url: ' + url)
                    // TODO: show + log some error message
                } else {
                    Linking.openURL(url)
                }
            })
            .catch(err => console.error('An error occurred', err))
    }

    renderRow(item) {
        const swipeoutBtns = [{
            text: 'Delete',
            type: 'secondary',
            onPress: () => {
                this.removeWebsite(item.id)
            }
        }, {
            text: 'Edit',
            type: 'primary',
            onPress: () => {
                this.editWebsite(item)
            }
        }]

        const queryOutput =
            this.props.query.queriedWebsite === item.id ?
                <TextInput
                    style={{height: 25}}
                    placeholder="Query"
                    onChangeText={text => this.updateQueryValue(text)}
                    onSubmitEditing={() => this.startQuery(item)}
                    value={this.props.query.currentValue}
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
                    onPress={() => this.toggleQuery(item.id)}
                >
                    <Text>{item.title}</Text>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: item.iconPath}}
                    />
                </TouchableOpacity>
                {queryOutput}

            </Swipeout>
        )
    }

    render() {
        const {
            websites,
            modal,
        } = this.props

        const dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const rows = dataStore.cloneWithRows(websites)

        return(
            <Screen
                title="Websites"
                buttons={[{
                    position: 'primary',
                    title: 'Add',
                    onPress: this.addNewTemplate
                }]}
            >
                <ListView
                    dataSource={rows}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    keyboardShouldPersistTaps={true}
                />

                <WebsiteModal
                    modal={modal}
                    close={this.closeEdit}
                    updateValue={this.updateEditValue}
                    setMode={this.setEditMode}
                    fetchTemplate={this.fetchTemplate}
                    saveWebsite={this.saveWebsite}
                    updateWebsite={this.props.updateWebsite}
                    generateTemplate={this.props.generateTemplate}
                    setInvalid={this.setInvalid}
                />
            </Screen>
        )
    }
}

Websites.propTypes = {
    websites: PropTypes.array.isRequired,
    modal: PropTypes.shape({
        isShowing: PropTypes.bool.isRequired,
        isFrozen: PropTypes.bool.isRequired,
        mode: PropTypes.oneOf([
            'auto',
            'custom',
        ]).isRequired,
        previousMode: PropTypes.string.isRequired,
        values: PropTypes.shape({
            url: PropTypes.string,
            template: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            divider: PropTypes.string.isRequired,
        }).isRequired,
        message: PropTypes.string.isRequired,
        messageStatus: PropTypes.string.isRequired,
        invalidField: PropTypes.string.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
}

function denormalize(items) {
    const returnArray = []
    for(const key of Object.keys(items.byId)) {
        returnArray.push(items.byId[key])
    }
    return returnArray
}

function mapStateToProps(state) {
    const {
        edit,
        query,
        ui,
        websites,
    } = state

    const modal = {
        isShowing: edit.isEditShowing,
        isFrozen: edit.isEditFrozen,
        mode: edit.editMode,
        previousMode: edit.previousEditMode,
        editId: edit.editId,
        values: edit.editValues,
        message: edit.editMessage,
        messageStatus: edit.editMessageStatus,
        invalidField: edit.invalidField,
        height: ui.visibleHeight,
    }

    return {
        websites: denormalize(websites),
        modal,
        query,
    }
}

export default connect(mapStateToProps)(Websites)
