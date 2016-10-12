import React, { Component } from 'react'
import {
    ListView
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as websitesActions from '../actions/websites'
import Websites from '../components/websites/websites'

class WebsitesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        const dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const websites = dataStore.cloneWithRows(state.websites);
        return (
            <Websites
                // actions
                showWebsiteEditModal={actions.showWebsiteEditModal}
                hideWebsiteEditModal={actions.hideWebsiteEditModal}
                updateWebsiteModalValue={actions.updateWebsiteModalValue}
                setModalInputMode={actions.setModalInputMode}
                checkAutoUrl={actions.checkAutoUrl}
                addNewWebsite={actions.addNewWebsite}
                // values
                websites={websites}
                editModal={state.editModal}
            />
        );
    }
}

export default connect(state => ({
        state: state.websites
    }), (dispatch) => ({
        actions: bindActionCreators(websitesActions, dispatch)
    })
)(WebsitesContainer);
