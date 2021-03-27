import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Logo from '~/assets/logo.svg'

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