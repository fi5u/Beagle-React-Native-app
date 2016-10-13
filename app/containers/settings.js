import React, { Component } from 'react'
import {
    ListView
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as settingsActions from '../actions/settings'
import Settings from '../components/settings/settings'

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        const settings = state.settings;

        return (
            <Settings
                // actions
                toggleSetting={actions.toggleSetting}

                // values
                settings={settings}
            />
        );
    }
}

export default connect(state => ({
        state: state.settings
    }), (dispatch) => ({
        actions: bindActionCreators(settingsActions, dispatch)
    })
)(SettingsContainer);
