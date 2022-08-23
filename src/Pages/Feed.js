import { BasicMangaCard } from '../components/ContentCards';
import { BasicPreview } from '../components/ContentViews';
import { ScrollView } from 'react-native';
import MangaDetail from './MangaDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LamiaChanAppBar from '../AppBar/LamiaChanAppBar';

const Stack = createNativeStackNavigator();

const Profile = () => { return (null) }
const Settings = () => { return (null) }

function FeedBaseActivity() {
  const cards = [...Array(5)].map((_v, i) => (
    <BasicMangaCard/>
  ))

  return (
    <ScrollView style={{marginTop: 10}}>
      <BasicPreview cards={cards} />
      <BasicPreview cards={cards} />
    </ScrollView>
  )
}

function Feed() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <LamiaChanAppBar {...props} />,
      }}
    >
      <Stack.Screen
        name="FeedBaseActivity"
        component={FeedBaseActivity}
      />
      <Stack.Screen
        name="MangaDetail"
        component={MangaDetail}
      />
    </Stack.Navigator>
  )
}

export default Feed;
