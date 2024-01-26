import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomRoutes} from './BottomRoutes';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
};
