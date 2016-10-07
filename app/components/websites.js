import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
      }
});

export default class Websites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { websites, addNewWebsite, removeWebsite } = this.props;
        const titles = websites.map((website) => {
            return(
                <TouchableOpacity
                    key={website.id}
                    onPress={() => removeWebsite(website.id)}
                    style={styles.button}
                >
                    <Text>{website.title} + {website.id}</Text>
                </TouchableOpacity>
            );
        });

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>[{titles}]</Text>

                <TouchableOpacity onPress={addNewWebsite} style={styles.button}>
                    <Text>Add new website</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
