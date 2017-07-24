import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class SoSeedyRN extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonTitle: 'Save', 
      clickEvents: 1,
      terminalText: 'Nothing happened yet',
      domainText: 'https://example.com',
      token: 'access token',
      clientId: 'client id',
      clientSecret: 'client secret',
      fetchResults: 'None'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text>Navigation</Text>
        </View>
        <View style={styles.window}>
          <View style={styles.editor}>
            <Text>Editor</Text>
            <TextInput 
              value={this.state.domainText}
              onChangeText={(domainText) => {this.setState({domainText})}}
              />
            <TextInput
              value={this.state.token}
              onChangeText={(token) => {this.setState({token})}}
            />
            <TextInput
              value={this.state.clientId}
              onChangeText={(clientId) => {this.setState({clientId})}}
            />
            <TextInput
              value={this.state.clientSecret}
              onChangeText={(clientSecret) => {this.setState({clientSecret})}}
            />
            <Button 
              title={this.state.buttonTitle} 
              onPress={this.save}
              style={{width: 200, height: 50}}
              />
            <Button 
              title={'HTTP Party!'}
              onPress={this.party}
              style={{width: 200, height: 50}}
              />
          </View>
          <View style={styles.terminal}>
            <Text>Terminal</Text>
            <Text>{this.state.terminalText}</Text>
            <Text>{this.state.fetchResults}</Text>
          </View>
        </View>
      </View>
    )
  }

  save = () => {
    console.log('hey hey hey')
    this.setState({
      terminalText: 
      `
      domain: ${this.state.domainText}
      token: ${this.state.token}
      clientId: ${this.state.clientId}
      clientSecret: ${this.state.clientSecret}
      `
    })
  }

  party = () => {
    let self = this
    console.log(self.state)
    fetch('https://twilson.test.instructure.com/api/v1/courses', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer <INSERT TOKEN HERE>'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        let blah =  responseJson;
        console.log(blah)
      })
      .catch((error) => {
        let fetchResults = response.status
        self.setState({fetchResults})
      })

    console.log(self.state)
    let fetchResults = 'failure'
    self.setState({fetchResults})

  }
}

const red = '#ff9e9e'
const green = '#9bfa9b'
const blue = '#323b5c'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  navigation: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue
  },
  window: {
    flexDirection: 'column',
    flex: 1
  },
  editor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green
  },
  terminal: {
    flex: 0.5,
    maxHeight: 200,
    backgroundColor: red
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff'
  }
})

AppRegistry.registerComponent('SoSeedyRN', () => SoSeedyRN);
