import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { StyleSheet, View } from 'react-native';


import Header from '~/components/Header';
import Home from '~/pages/Home';
import Settings from '~/pages/Settings';
import Requests from '~/pages/Requests';
import Footer from '~/components/footer';

//import styles from '~/styles/App'

export default function App() {
  return (
    <Router>
        <View style={styles.container}>
            <Header />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <View style={styles.main}>
                <Switch>
                    <Route path="/requests">
                        <Requests />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </View>

            <Footer />
        </View>
    </Router>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2F34',
        height: '100%',
    },
    main: {
        flexGrow: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242628',
    },
});

