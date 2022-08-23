import React, { useState } from "react";
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DarkTheme as MDTheme} from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavTheme } from '@react-navigation/native';
import { name as appName } from './app.json';
import merge from 'deepmerge';
import Base from './src/Base';

const DefaultTheme = merge(MDTheme, NavTheme);
const theme = {
  ...DefaultTheme,
  version: 1,
  colors: {
    ...DefaultTheme.colors,
    surface: '#313131',
    background: '#313131',
    headerColor: '#B52959',
    likeColor: '#F5574B',
  },
};

export default function App() {
  const [children, setChild] = useState();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Base />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
