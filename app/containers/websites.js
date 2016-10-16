import React, { Component } from 'react'
import {
    ListView
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as websitesActions from '../actions/websites'
import * as settingsActions from '../actions/settings'
import Websites from '../components/websites/websites'

class WebsitesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        const dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const websites = dataStore.cloneWithRows(state.websites);
        const settings = state.settings;
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
                // values
                websites={websites}
                settings={settings}
                editModal={state.editModal}
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
