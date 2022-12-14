import AppIntroSlider from 'react-native-app-intro-slider';
import { useRecoilState } from "recoil";
import { View, Image, StyleSheet  } from 'react-native';
import { Text } from 'react-native-paper';
import { firstTimeOpened } from '../atoms/user';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

const slides = [
  {
    key: 1,
    title: 'Welcome to Lamia Chan',
    text: 'Another manga reader',
    //image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Use as you like',
    text: `If you doesn't want to use our manga database, you can import manga/comics scans from phone or use own server`,
    //image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Select app mode',
    text: '',
    //image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export default function AppIntro() {
  const [fto, setFto] = useRecoilState(firstTimeOpened);

  renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide, {backgroundColor: item.backgroundColor},
      ]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  onDone = () => {
    setFto(false)
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
    />
  )
}
