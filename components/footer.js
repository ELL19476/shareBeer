import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Footer extends React.Component {
    render() {
        return (
            <Text style={styles.footer}>test</Text>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: '#2A2F34',
    },
});


export default Footer