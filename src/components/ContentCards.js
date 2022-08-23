import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export function BasicMangaCard(props) {
  const {margin = 20} = props;
  const {coverUri = 'https://via.placeholder.com/150'} = props;
  const {slug = 'base_slug'} = props;
  const {title = 'Manga Title'} = props;
  const navigation = useNavigation();

  return (
    <Card
      style={{margin: margin}}
      onPress={() => navigation.navigate('MangaDetail', {
        slug: slug,
      })}
    >
      <Card.Cover source={{ uri: coverUri }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  )
}
