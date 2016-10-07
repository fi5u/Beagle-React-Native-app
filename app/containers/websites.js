import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Websites from '../components/websites'
import * as websitesActions from '../actions/websites'
import { connect } from 'react-redux'

class WebsitesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <Websites
                websites={state.websites}
                {...actions}
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
