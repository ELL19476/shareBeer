import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

class EmergencyButton extends React.Component {
    render() {
        return (
            <Image
                style={styles.button}
                source={require('~/assets/icon.png')}
            />
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