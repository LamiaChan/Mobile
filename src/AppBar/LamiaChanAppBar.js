import { Appbar, useTheme} from 'react-native-paper';

export default function LamiaChanAppBar({ route, navigation, back, options }) {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.headerColor
      }}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="LamiaChan" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}
