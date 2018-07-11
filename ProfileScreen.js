import React, { Component } from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
import { Container, Header, Left, Body, Title, Button, Icon, Right, List, ListItem, Text } from 'native-base';


export default class ProfileScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lat: '',
      long: ''
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {

      let lati = await AsyncStorage.getItem('latitude');
      let longi = await AsyncStorage.getItem('longitude');

      this.setState({
        lat: lati,
        long: longi
      })

    }
    catch (error) {
      Alert.alert(error + "")
    }
  }

  render() {
    var items = ['Name: Arbër Suka', 'Company: RentACar Bossi', 'Contact: 049405420'];
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('UpdateLocation')}>
              <Icon name='grid' />
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('Insert')}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <View style={{ backgroundColor: '#ffffff' }}>
          <Image
            style={{ width: 200, height: 200, marginHorizontal: '22.5%', marginVertical: '5%' }}
            source={require('./assets/img/profile.png')}
          />

        </View>
        <View style={{ backgroundColor: '#ffffff' }}>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </View>

        <View style={{ backgroundColor: '#ffffff' }}>
          <ListItem>
            <Text> LocationInfo : {this.state.lat + " / " + this.state.long}</Text>
          </ListItem>
        </View>

      </Container>
    );
  }
}
