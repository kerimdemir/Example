import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/Home';


const Navigation = () => {
    // Stack Navigators
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
