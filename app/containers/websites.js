import React, { Component } from 'react'
import {
    Linking,
    ListView
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as websitesActions from '../actions/websites'
import * as settingsActions from '../actions/settings'
import generateUrl from '../services/url'
import Websites from '../components/websites/websites'

class WebsitesContainer extends Component {
    constructor(props) {
        super(props);
    }

    fetchSecretSauce() {
        console.log('about to promise');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
        //return fetch('https://www.google.com/search?q=secret+sauce');
    }

    makeASandwichWithSecretSauce(forPerson) {
        //this.store.dispatch(this.actions.hideWebsiteEditModal);

        return (dispatch) => {
            return this.fetchSecretSauce().then(
                sauce => dispatch(this.actions.hideWebsiteEditModal),
                error => dispatch(apologize('The Sandwich Shop', forPerson, error))
            )
        };
    }

    submitQuery() {
        const qID = this.state.query.id;
        const qValue = this.state.query.value;

        if(qID === null || !qValue) { return; } // TODO: show + log some error message
        const website = this.state.websites.find((o) => { return o.id === qID; });
        if(!website) { return; } // TODO: show + log some error message

        const url = generateUrl(qValue, website);

        Linking.canOpenURL(url).then(supported => {
            if(!supported) {
                console.log('Can\'t handle url: ' + url);
                // TODO: show + log some error message
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));

        this.store.dispatch(this.actions.deactivateQuery);

        /*this.store.dispatch(
            this.makeASandwichWithSecretSauce('My wife')
        ).then(() => {
            console.log('Done!');
        });*/
    }

    render() {
        const { store, state, actions } = this.props;

        const dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const websites = dataStore.cloneWithRows(state.websites);
        const settings = state.settings;

        this.store = store;
        this.state = state;
        this.actions = actions;

        return (
            <Websites
                // actions
                showWebsiteEditModal={actions.showWebsiteEditModal}
                hideWebsiteEditModal={actions.hideWebsiteEditModal}
                updateWebsiteModalValue={actions.updateWebsiteModalValue}
                setModalInputMode={actions.setModalInputMode}
                checkAutoUrl={actions.checkAutoUrl}
                addNewWebsite={actions.addNewWebsite}
                updateWebsite={actions.updateWebsite}
                editWebsite={actions.editWebsite}
                removeWebsite={actions.removeWebsite}
                updateQueryValue={actions.updateQueryValue}
                submitQuery={actions.submitQuery}
                activateQuery={actions.activateQuery}
                // async
                submitQuery={this.submitQuery.bind(this)}
                // values
                websites={websites}
                settings={settings}
                editModal={state.editModal}
                query={state.query}
            />
        );
    }
}

export default connect(state => ({
        state: {...state.websites,...state.settings}
    }), (dispatch) => ({
        actions: bindActionCreators({...websitesActions,...settingsActions}, dispatch)
    })
)(WebsitesContainer);
