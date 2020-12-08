import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Container from '../components/Container'
import {globalStyles} from '../styles/global';

class AlertsScreen extends Component {
  render() {
    return (
      <Container>
        <Text style={globalStyles.text}>Alerts feature is coming soon</Text>
      </Container>
    );
  }
}

export default AlertsScreen;
