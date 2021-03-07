import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Footer from './components/footer'
import Home from './pages/home'
import Settings from './pages/settings'
import Requests from './pages/requests'

export default function App() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

        <Footer />

      </div>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242628',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
