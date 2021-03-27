import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <Text style={styles.header}>test</Text>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#2A2F34',
    },
});


export default Header