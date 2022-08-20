import * as React from 'react';
import { BottomNavigation, Appbar} from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import Feed from './Pages/Feed';
import Catalog from './Pages/Catalog';

export default function Base() {
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed', focusedIcon: 'book-open-blank-variant'},
    { key: 'catalog', title: 'Catalog', focusedIcon: 'format-list-bulleted' },
    //{ key: 'profile', title: 'Profile', focusedIcon: 'account-circle' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: Feed,
    catalog: Catalog,
    //profile: Profile
  });

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Content title="LamiaChan" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </React.Fragment>
  );
}
