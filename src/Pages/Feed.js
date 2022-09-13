import { BasicMangaCard } from '../components/ContentCards';
import { RowScrollPreview } from '../components/ContentViews';
import { ScrollView } from 'react-native';
import { MangaDetail, MangaRead } from './MangaPage';
import Stack from '../Navigation/Stack';


function Feed() {
  const cards = [...Array(5)].map((_v, i) => (
    <BasicMangaCard key={i} />
  ))

  return (
    <ScrollView style={{marginTop: 10}}>
      <RowScrollPreview cards={cards} />
      <RowScrollPreview cards={cards} />
    </ScrollView>
  )
}

export default function FeedNavigation() {
  return (
    <Stack
      screens={
        [
          {name: 'Feed', component: Feed},
          {name: 'MangaDetail', component: MangaDetail},
          {name: 'MangaRead', component: MangaRead}
        ]
      }
    />
  )
}
