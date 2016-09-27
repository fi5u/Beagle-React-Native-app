import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './menu.style'

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.items = [{
            id: 'websites',
            title: 'Websites',
        }, {
            id: 'settings',
            title: 'Settings',
        }];
    }

    render() {
        const items = this.items.map((item) => {
            return(
                <Text
                    key={item.id}
                >
                    {item.title}
                </Text>
            )
        });
        return (
            <View
                style={styles.base}
            >
                {items}
            </View>
        )
    }
}
