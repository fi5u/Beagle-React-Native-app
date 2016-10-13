import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'
import {
    View
} from 'react-native'
import Drawer from 'react-native-drawer'
import Menu from './components/menu/menu'
import Websites from './components/websites/websites'
import SettingsContainer from './containers/settings'
import WebsitesContainer from './containers/websites'
import styles from './root.style'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem: 'websites'
        }
    }

    // MENU
    handleMenuItemPress(newMenuItemID) {
        this.setState({activeMenuItem: newMenuItemID});
        this._drawer.close();
    }

    render() {
        let activePage;
        switch(this.state.activeMenuItem) {
            case 'settings':
                activePage =
                    <SettingsContainer />;
                break;
            default:
                activePage =
                    <WebsitesContainer />;
        }

        return (
            <Provider store={store}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    content={
                        <Menu
                            handleMenuItemPress={this.handleMenuItemPress.bind(this)}
                        />
                    }
                    type="static"
                    openDrawerOffset={100}
                    tweenHandler={Drawer.tweenPresets.parallax}
                    panOpenMask={.1}
                >
                    <View
                        style={styles.base}
                    >
                        {activePage}
                    </View>
                </Drawer>
            </Provider>
        )
    }
}
