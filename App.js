import * as React from 'react';

import { StyleSheet, View } from 'react-native';


import Header from '~/components/Header';
import Home from '~/pages/Home';
import Settings from '~/pages/Settings';
import Requests from '~/pages/Requests';
import Footer from '~/components/Footer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import styles from '~/styles/App'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Requests">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen name="Requests" component={Requests} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}


