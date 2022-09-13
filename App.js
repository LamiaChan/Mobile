import React, { Fragment } from "react";
import { AppRegistry } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DarkTheme as MDTheme} from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavTheme } from '@react-navigation/native';
import { name as appName } from './app.json';
import merge from 'deepmerge';
import Base from './src/Base';
import { Provider as ReduxProvider} from 'react-redux';
import { store } from "./src/store";
import 'react-native-gesture-handler';

const DefaultTheme = merge(MDTheme, NavTheme);
const theme = {
  ...DefaultTheme,
  version: 1,
  colors: {
    ...DefaultTheme.colors,
    surface: '#313131',
    primary: '#B52959',
    accent: '#B52959',

    background: '#313131',
    likeColor: '#F5574B',
  },
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Fragment>
            <Base />
            <StatusBar style="light" />
          </Fragment>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
