import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
          <Card  >
            <CardItem >
              <Left>
                <Thumbnail source={{uri: this.props.cars.images.thumbnail}} />
                <Body>
                  <Text>{ `${this.props.cars.manufactor} ${this.props.cars.model}`}</Text>
                  <Text note>Price per Day : {this.props.cars.pricePerDay} Euro</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.props.cars.images.photo1}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent >
                  <Icon active name="heart" />
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="call"/>
                </Button>
              </Body>
              <Right>
                <Text>{this.props.cars.key}</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}

