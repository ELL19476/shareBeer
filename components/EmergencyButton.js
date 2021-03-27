import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import Logo from '~/assets/Logo'

class EmergencyButton extends React.Component {
    render() {
        return (
            <Logo />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 250,
    },
});

export default EmergencyButton;