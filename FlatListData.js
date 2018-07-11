import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Container, Header, Left, Body, Button, Icon, Picker, Title, Right, Content, Spinner } from "native-base";
import { List, ListItem, SearchBar } from "react-native-elements";
import CardItems from './CardItems';

class FlatListData extends Component {

  componentDidMount() {
    var ref = firebase.database().ref("RentACarDB");
    ref.orderByKey().limitToFirst(3).on("value", (snapshot) => {
      var cars = snapshot.val();
      var newList = Object.values(cars);

      var d = newList[newList.length - 1];
      this.setState({
        data: newList,
        startObject: d,
        refreshing: false,
      });


    });

  }


  goAlert() {

    Alert.alert('Gabim', 'Alerti')
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 0,
      seed: 1,
      error: null,
      refreshing: false,
      startObject: null,
      din: [],
      pickerValue: 'Sort',
    };
  }



  makeRemoteRequest() {


    var ref = firebase.database().ref("RentACarDB");
    ref.orderByKey().startAt(this.state.startObject.id).limitToFirst(3).on("value", (snapshot) => {
      var cars = snapshot.val();
      var newList = Object.values(cars);

      var d = newList[newList.length - 1];

      newList = newList.slice(1, newList.length)

      this.setState({
        data: [...this.state.data, ...newList],
        startObject: d,

      });

    });



  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  callQuery(){
    Alert.alert('ukall')
    var ref = firebase.database().ref("RentACarDB");
    ref.orderByChild("key").on("value", (snapshot) => {
      var cars = snapshot.val();
      var newList = Object.values(cars);

      this.setState({
        data: [],
        data: newList,
      });
      console.log(this.state.data)
    });
  }


  render() {

    if (this.state.data.length === 0)
      return <Spinner />;

    return (
      <View>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right >
            <View style={{ width: 100, flex:1,flexDirection:'row'}} >
              
              <Picker style={{  color: '#ffff' }}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.pickerValue}
                onValueChange={(itemValue, itemIndex) => {this.setState({ pickerValue: itemValue }),this.callQuery()}}
              >
                <Picker.Item label="Lower to High" value='1' />
                <Picker.Item label="High to Lower" value='2' />
              </Picker>
            </View>
          </Right>
        </Header>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => { this.props.navigation.navigate("Detail", item) }}>
              <CardItems cars={item} />
            </TouchableHighlight>
          )}
          keyExtractor={item => item.key}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}


styles = StyleSheet.create({
  divider: {
    marginTop: '5px',
    paddingBottom: '5px',
    marginBottom: '5px',
    borderWidth: 10
  },
  iconFilterSize: {
    width: '5px'
  }
})

export default FlatListData;