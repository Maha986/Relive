import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingPage from "./screens/LandingPage"
import UploadImage from './screens/UploadImage';
import ProgressPage from './screens/ProgressPage';
import ModalBox from './screens/ModalBox';
const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerTitle: "Relive",
            headerStyle: { backgroundColor: '#9B59B6' },
        }} >
            <Stack.Group>
                <Stack.Screen name="Home" component={LandingPage} ></Stack.Screen>
                <Stack.Screen name="UploadingPage" component={UploadImage} ></Stack.Screen>
                <Stack.Screen name="ProgressPage" component={ProgressPage}></Stack.Screen>
                <Stack.Screen name="ModalPage" component={ModalBox}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    );
};




export default StackNavigator;
