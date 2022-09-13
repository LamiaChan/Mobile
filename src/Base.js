import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedNavigation from './Pages/Feed';
import CatalogNavigation from './Pages/Catalog';

export default function Base() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FeedNavigation"
        component={FeedNavigation}
        options={{
          tabBarLabel: 'Feed',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CatalogNavigation"
        component={CatalogNavigation}
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
