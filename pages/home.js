import React from 'react';
import { divide } from 'react-native-reanimated';
import EmergencyButton from '~/components/EmergencyButton';
import { StyleSheet, View, Text } from 'react-native';

class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <EmergencyButton />
        </View>
      );
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});