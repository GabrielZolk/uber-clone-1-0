import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import MapView from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>index</Text> */}

        <MapView 
            style={{ flex: 1 }}
            region={{
                latitude: -46.4226215,
                longitude: -23.7079218,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            }}
            showsUserLocation
            loadingEnabled
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})