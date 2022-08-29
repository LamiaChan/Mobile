import { Fragment, useState, forwardRef, useImperativeHandle } from 'react';
import { Text, Surface, List, Chip, useTheme, DataTable, RadioButton, Appbar as PaperAppBar } from 'react-native-paper';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialTabs from 'react-native-material-tabs';
import { Menu, MenuItem } from 'react-native-material-menu';
import Modal from "react-native-modal";

export function RowScrollPreview(props) {
  const {cards = null} = props;
  const {title = 'View Title'} = props;
  return (
    <Fragment>
      <Text style={{marginLeft: 15, fontSize: 25, fontWeight: 'bold'}}>{title}</Text>
      <ScrollView horizontal={true}>
        {cards}
      </ScrollView>
    </Fragment>
  )
}

export function CollScrollPreview(props) {
  const {cards = null} = props;
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cards}
      </View>
    </ScrollView>
  )
}

export function GenPreview(props) {

}

export function BasicDetail(props) {
  const {slug = 'base_slug'} = props;
  const BasicDetailStyles = StyleSheet.create({
    imgContainer: {
      surface: {
        padding: 8,
        height: 400,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D1C1C'
      },
    },
    img: {
      surface: {
        padding: 8,
        height: 360,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 20,
        zIndex: 100
      },
    },
    chip: {
      margin: 2,
      borderRadius: 9
    },
    flexRowContainerCenter: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    contentTitle: {
      marginLeft: 15,
      fontSize: 25,
      fontWeight: 'bold'
    },
    basicText: {
      marginLeft: 15,
      fontSize: 15,
      fontWeight: 'bold'
    }
  })

  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ['Information', 'Chapters'];
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  function informationTab() {
    return (
      <Fragment>
        <Text style={{marginTop: 15, marginLeft: 15, fontSize: 15, fontWeight: 'bold'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <List.Section>
          <List.Item
            title="Title Status"
            description="meh"
          />
          <List.Item
            title="Transaltion Status"
            description="meh"
          />
          <List.Item
            title="Loaded Chapters"
            description="meh"
          />
          <List.Item
            title="Format"
            description="meh"
          />
          <List.Item
            title="Author"
            description="meh"
          />
          <List.Item
            title="Painter"
            description="meh"
          />
          <List.Item
            title="Publisher"
            description="meh"
          />
        </List.Section>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
          <Chip style={BasicDetailStyles.chip} onPress={() => console.log('Pressed')}>Tag</Chip>
          <Chip style={BasicDetailStyles.chip} onPress={() => console.log('Pressed')}>Taaag</Chip>
          <Chip style={BasicDetailStyles.chip} onPress={() => console.log('Pressed')}>Taaaaaaag</Chip>
          <Chip style={BasicDetailStyles.chip} onPress={() => console.log('Pressed')}>Taag</Chip>
        </View>
      </Fragment>
    )
  }

  function chaptersTab() {
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 3"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 2"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <List.Item
              title="Volume 1 Chapter 1"
              description="22.08.2022"
            />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    )
  }

  function handleChangeTab(id) {
    switch(id) {
      case 0:
        return informationTab()
      case 1:
        return chaptersTab()
      default:
        return <View></View>
    }
  }

  return (
    <ScrollView style={{marginTop: 0}}>
      <Surface style={BasicDetailStyles.imgContainer.surface}>
        <Surface style={BasicDetailStyles.img.surface} elevation={4}>
          <Text>{slug}</Text>
        </Surface>
      </Surface>
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <View style={BasicDetailStyles.flexRowContainerCenter}>
          <Text style={BasicDetailStyles.contentTitle} onPress={showMenu}>
            Api Manga Title
          </Text>
          <Menu
            visible={visible}
            style={{
              backgroundColor: '#1D1C1C'
            }}
            anchor={
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color='#FFFFFF'
                  size={25}
                  onPress={showMenu}
                />
            }
            onRequestClose={hideMenu}
          >
              <MenuItem onPress={hideMenu}>
                <View style={BasicDetailStyles.flexRowContainerCenter}>
                  <MaterialCommunityIcons
                    name="play"
                    color='#FFFFFF'
                    size={25}
                    onPress={showMenu}
                  />
                  <Text style={BasicDetailStyles.basicText}>Read</Text>
                </View>
              </MenuItem>
              <MenuItem onPress={hideMenu}>
                <View style={BasicDetailStyles.flexRowContainerCenter}>
                  <MaterialCommunityIcons
                    name="heart"
                    color={theme.colors.likeColor}
                    size={25}
                    onPress={showMenu}
                  />
                  <Text style={BasicDetailStyles.basicText}>Like</Text>
                </View>
              </MenuItem>
              <MenuItem onPress={hideMenu}>
                <View style={BasicDetailStyles.flexRowContainerCenter}>
                  <MaterialCommunityIcons
                    name="book"
                    color='#A65100'
                    size={25}
                    onPress={showMenu}
                  />
                  <Text style={BasicDetailStyles.basicText}>Bookmark</Text>
                </View>
              </MenuItem>
              <MenuItem onPress={hideMenu}>
                <View style={BasicDetailStyles.flexRowContainerCenter}>
                  <MaterialCommunityIcons
                    name="share"
                    color='#FEC107'
                    size={25}
                    onPress={showMenu}
                  />
                  <Text style={BasicDetailStyles.basicText}>Share</Text>
                </View>
              </MenuItem>
            </Menu>
          </View>
        <Text style={BasicDetailStyles.basicText}>Api Manga Alt Title</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <Text style={BasicDetailStyles.basicText}>2021</Text>
          <Text style={BasicDetailStyles.basicText}>Manga</Text>
          <Text style={BasicDetailStyles.basicText}>
            1.2k
            <MaterialCommunityIcons name="heart" color='#F5574B' size={15}/>
          </Text>
        </View>
      </View>
      <SafeAreaView style={{marginTop: 5, marginBottom: 10}}>
        <MaterialTabs
          items={tabs}
          selectedIndex={selectedTab}
          onChange={setSelectedTab}
          barColor={theme.colors.surface}
          indicatorColor={theme.colors.primary}
          activeTextColor="white"
        />
      </SafeAreaView>
      {handleChangeTab(selectedTab)}
    </ScrollView>
  )
}

function imageView(props) {
  return (
    <Text>Test</Text>
  )
}

export function CatalogCheckBox(props) {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const catalogCheckBoxStyles = StyleSheet.create(
    {
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 2
      },
      text: {
        fontSize: 15,
        fontWeight: 'normal'
      }
    }
  )

  return (
    <View style={catalogCheckBoxStyles.container}>
      <RadioButton
        theme={theme}
        value={props.title}
        status={ checked ? 'checked' : 'unchecked' }
        onPress={() => setChecked(!checked)}
      />
      <Text style={catalogCheckBoxStyles.text}>{props.title}</Text>
    </View>
  )
}

export const CatalogModal = forwardRef((props, ref) => {
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    changeModalVisibility() {
      setModalVisible(!isModalVisible)
    },
  }))

  const catalogStyles = StyleSheet.create(
    {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 15,
      },
      textTitle: {
        fontSize: 25,
        fontWeight: 'normal',
        marginBottom: 3
      },
      textSubTitle: {
        fontSize: 20,
        fontWeight: 'normal'
      },
      view: {
        justifyContent: 'flex-end',
        margin: 0,
      }
    }
  );

  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      onBackdropPress={() => setModalVisible(false)}
      style={{justifyContent: 'flex-end', margin: 0,}}
    >
      <ScrollView
        style={{
          backgroundColor: theme.colors.surface,
        }}
      >
        <View style={catalogStyles.container}>
        <PaperAppBar.Header>
          <PaperAppBar.BackAction onPress={() => setModalVisible(false)}/>
          <PaperAppBar.Content title="Filters" />
        </PaperAppBar.Header>
          <View style={catalogStyles.container}>
            <Text style={catalogStyles.textSubTitle}>Tags</Text>
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
          </View>
          <View style={catalogStyles.container}>
            <Text style={catalogStyles.textSubTitle}>Tags</Text>
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
          </View>
          <View style={catalogStyles.container}>
            <Text style={catalogStyles.textSubTitle}>Tags</Text>
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
              <CatalogCheckBox title='Button' />
          </View>
        </View>
      </ScrollView>
    </Modal>
  )
})
