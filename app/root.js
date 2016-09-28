import React, { Component } from 'react'
import {
    View
} from 'react-native'
import Drawer from 'react-native-drawer'
import Menu from './components/menu/menu'
import Websites from './components/websites/websites'
import Settings from './components/settings/settings'
import styles from './root.style'

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Menu
            activeMenuItem: 'websites'
        };
    }

    handleMenuItemPress(newMenuItemID) {
        this.setState({activeMenuItem: newMenuItemID});
        this._drawer.close();
    }

    render() {
        let activePage;
        switch(this.state.activeMenuItem) {
            case 'settings':
                activePage = <Settings />;
                break;
            default:
                activePage = <Websites />;
        }

        return (
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
        )
    }
}
