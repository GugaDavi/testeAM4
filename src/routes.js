import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Store from './pages/Store';
import CompleteInfos from './components/CompleteInfos';
import Download from './pages/Download';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Favorite,
      Store: {
        screen: createStackNavigator(
          {
            Store,
            CompleteInfos,
          },
          {
            headerLayoutPreset: 'center',
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: '#fff',
              headerLeftContainerStyle: {
                marginLeft: 10,
              },
            },
          }
        ),
        navigationOptions: {
          tabBarLabel: 'Loja',
          tabBarIcon: <Icon name="store" size={20} color="#fff" />,
        },
      },
      Download,
    },
    {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#F0CC56',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#222',
        },
        labelStyle: {
          fontSize: 14,
        },
      },
    }
  )
);

export default Routes;
