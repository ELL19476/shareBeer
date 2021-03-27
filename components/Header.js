import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Logo from '~/assets/logo';

class Header extends React.Component {
    render() {
        return (
            <Logo />
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