import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/Home';
import {Colors} from '../../themes';

const Navigation = () => {
    // Stack Navigators
    const Stack = createStackNavigator();
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen
                        name="Home"
                        component={Home}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};
export default Navigation;
