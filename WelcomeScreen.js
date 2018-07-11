import React, { Component } from 'react';
import firebase from "firebase";
import Config from "./Config";
import Swiper from 'react-native-swiper';
import { Container, Tab, Tabs, ScrollableTab, Header, Content, List, ListItem, Thumbnail, Body, Left,Icon, Button, Title, Input, Item, Right } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';


export default class HomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            pijet: []
        };
    }


    render() {

        return (
            <Container>

                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right/>
                </Header>

                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="RentME">
                        <View style={styles.wrapper} >
                            <Image source={require('./assets/img/wallp.jpg')} resizeMode='cover' />
                        </View>
                        <Button onPress={()=> this.props.navigation.navigate('Search')} style={{marginHorizontal:'10%',marginBottom:'5%', width:'80%'}}>
                            <Text style={{marginHorizontal:'39%',marginTop:'2%', color:'#ffffff',fontSize:20}}>Search</Text>
                        </Button>
                    </Tab>
                    <Tab heading="Info">
                        <ScrollView>
                            <List>
                                <ListItem>
                                    <Text>This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times, 
                                        This is the first content of List repeated 10 times</Text>
                                </ListItem>
                                <ListItem>
                                <Text>This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times, 
                                        This is the second content of List repeated 10 times</Text>
                                </ListItem>
                                <ListItem>
                                <Text>This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times, 
                                        This is the third content of List repeated 10 times</Text>
                                </ListItem>
                            </List>
                        </ScrollView>
                    </Tab>

                </Tabs>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    textt: {
        marginLeft: 10,
        fontSize: 15,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonStyle: {
        // backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backButton: {
        width: 20
    }
})

style = {
    imgStyle: {
        width: 50,
        height: 50

    },
    iconStyle: {
        color: "white",

    },
    searchInput: {
        color: "white",
        placeHolderTextColor: "#FFEAE3",
    },
    item: {
        width: "50%",
    }
}