/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <View>
        <Button
          title="Authenticate Biometrically"
          onPress={() => LocalAuthentication.authenticateAsync()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
