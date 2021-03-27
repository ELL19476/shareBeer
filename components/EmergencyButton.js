import React from 'react';
import { StyleSheet, Image } from 'react-native';

class EmergencyButton extends React.Component {
    render() {
        return (
            <Image
                style={styles.button}
                source={require('~/assets/logo.svg')}
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 250,
        color: "red",
    },
});

export default EmergencyButton;