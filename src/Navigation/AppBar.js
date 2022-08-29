import { Appbar as PaperAppBar, useTheme} from 'react-native-paper';

export default function Appbar(props) {
  const theme = useTheme();
  console.log(props.options)
  return (
    <PaperAppBar.Header
      style={{
        backgroundColor: theme.colors.primary
      }}
    >
      {props.back ? <PaperAppBar.BackAction onPress={props.navigation.goBack} /> : null}
      {props.options.modal ? <PaperAppBar.Action icon="menu" onPress={() => props.options.modalComponent()} /> : null}
      <PaperAppBar.Content title="LamiaChan" />
      {/* <PaperAppBar.Action icon="magnify" onPress={() => {}} /> */}
    </PaperAppBar.Header>
  );
}
