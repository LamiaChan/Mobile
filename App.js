import React, { Fragment } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { AppRegistry } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DarkTheme as MDTheme} from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavTheme } from '@react-navigation/native';
import { name as appName } from './app.json';
import merge from 'deepmerge';
import Base from './src/Base';
import AppIntro from "./src/components/AppIntro";
import 'react-native-gesture-handler';

import { firstTimeOpened } from "./src/atoms/user";


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

function AppWrapper() {
  const [fto, setFto] = useRecoilState(firstTimeOpened);
  if (fto) {
    return (<AppIntro />)
  } else {
    return (<Base />)
  }
}

export default function App() {
  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Fragment>
            <AppWrapper />
            <StatusBar style="light" />
          </Fragment>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}

AppRegistry.registerComponent(appName, () => App);
