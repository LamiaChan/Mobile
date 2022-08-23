import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './Pages/Feed';
import Catalog from './Pages/Catalog';

export default function Base() {
  const Tab = createMaterialBottomTabNavigator();
  // const [routes] = React.useState([
  //   { key: 'feed', title: 'Feed', focusedIcon: 'book-open-blank-variant'},
  //   { key: 'catalog', title: 'Catalog', focusedIcon: 'format-list-bulleted' },
  //   //{ key: 'profile', title: 'Profile', focusedIcon: 'account-circle' }
  // ]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          tabBarLabel: 'Catalog',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
