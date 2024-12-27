import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { stepSreens } from '../constants/StepSreens';

const Route = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {stepSreens.map((screen, index) => (
                    <Stack.Screen key={index} name={screen.name} component={screen.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;
