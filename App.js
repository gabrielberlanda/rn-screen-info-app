/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, PixelRatio } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { height: heightWindow, width: widthWindow } = Dimensions.get('window');
    const { height: heightScreen, width: widthScreen } = Dimensions.get('screen');
    const pixelRatio = PixelRatio.get();
    const pixelRatioFont = PixelRatio.getFontScale();
    
    return (
      <View style={styles.container}>
        <Text>Altura X Largura (JANELA) = {heightWindow} x {widthWindow}</Text>
        <Text>Altura X Largura (TELA) = {heightScreen} x {widthScreen}</Text>
        <Text>Pixel ratio = {pixelRatio}</Text>
        <Text>Pixel ratio font = {pixelRatioFont}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
