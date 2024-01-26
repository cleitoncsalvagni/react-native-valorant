import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Home} from '../screens/Home';

interface TabIconProps {
  focused: boolean;
  color: string;
  name?: string;
}

const CustomIcon = ({color, focused, name}: TabIconProps) => {
  return <Feather size={22} color={color} name={name as string} />;
};

const ICONS = {
  home: ({color, focused}: TabIconProps) => (
    <CustomIcon name="home" color={color} focused={focused} />
  ),
};

const Tab = createBottomTabNavigator();

export const BottomRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Início'}
        component={Home}
        options={{
          tabBarIcon: ICONS.home,
        }}
      />
    </Tab.Navigator>
  );
};
