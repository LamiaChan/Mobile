import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {ScrollView} from 'react-native';

function Feed() {
  const cards = [...Array(24)].map((_v, i) => (
    <Card key={i}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  ))
  return (
    <ScrollView>
      {cards}
    </ScrollView>
  )
}

export default Feed;
