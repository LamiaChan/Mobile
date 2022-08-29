import AppBar from '../Navigation/AppBar';
import { Drawer as PaperDrawer, useTheme } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView
} from '@react-navigation/drawer';

const NavigationDrawer = createDrawerNavigator();

function BasicDrawerLayout(props) {
  const theme = useTheme();
  const navstate = props.navigation.getState();

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: theme.colors.surface,
      }}
    >
      <PaperDrawer.Section
        theme={theme}
      >
        {
          navstate.routeNames.map((name, index) => (
            <PaperDrawer.Item
              theme={theme}
              key={index}
              label={name}
              active={navstate.index == index}
              onPress={() => props.navigation.navigate(name)}
            />
          ))
        }
      </PaperDrawer.Section>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
    </DrawerContentScrollView>
  );
}

export default function Drawer(props) {
  const {DrawerLayoutComponent = BasicDrawerLayout} = props;

  return (
    <NavigationDrawer.Navigator
      initialRouteName={props.screens[0].name != undefined ? props.screens[0].name : ''}
      drawerContent={(props) => <DrawerLayoutComponent {...props} />}
      screenOptions={{
        header: (props) => {
          let extProps = {...props, ...{drawer: true}}
          return <AppBar {...extProps} />
        },
      }}
    >
    {
      props.screens.map(screen => (
        <NavigationDrawer.Screen
          name={screen.name}
          component={screen.component}
        />
      ))
    }
    </NavigationDrawer.Navigator>
  )
}
