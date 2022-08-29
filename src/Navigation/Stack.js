import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './AppBar';

const NavigationStack = createNativeStackNavigator();

export default function Stack(props) {
  const {appbarOptions = {}} = props;

  return (
    <NavigationStack.Navigator
      screenOptions={{
        header: (props) => {
          let extProps = {...props, ...appbarOptions}
          return <AppBar {...extProps} />
        },
      }}
    >
    {
      props.screens.map(screen => (
        <NavigationStack.Screen
          key={screen}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))
    }
    </NavigationStack.Navigator>
  )
}
