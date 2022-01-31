import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react"
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';

function App() {
  
  return (
    <>
      <NavigationContainer>
        <StackNavigator>
        </StackNavigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>

  )
}

export default App

