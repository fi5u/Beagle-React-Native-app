import React, { Component } from 'react'
import {
    View
} from 'react-native'
import MenuItem from './menu-item/menu-item'
import styles from './menu.style'

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.menuItems = [{
            id: 'websites',
            title: 'Websites',
        }, {
            id: 'settings',
            title: 'Settings',
        }];
    }

    render() {
        const menuItems = this.menuItems.map((item) => {
            return (
                <MenuItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    handleMenuItemPress={this.props.handleMenuItemPress}
                />
            );
        });

        return (
            <View
                style={styles.base}
            >
                {menuItems}
            </View>
        )
    }
}

Menu.propTypes = {
    handleMenuItemPress: React.PropTypes.func.isRequired,
}
