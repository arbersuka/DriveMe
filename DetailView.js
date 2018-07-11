import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import call from 'react-native-phone-call';
import Swiper from 'react-native-swiper';
import { List, ListItem, Container, Header, Left, Body, Button, Icon, Title, Right, Content } from 'native-base';

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.5
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    button: {
        marginHorizontal: '33%',
        marginBottom: 10,
        flexDirection: 'row',
        width: '50%'
    },
    textButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textList: {
        color: '#000',
        fontSize: 15,
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
});




export default class DetailView extends Component {
    
callLumi(){
    call({
       number: this.props.navigation.state.params.company.phone,
       prompt: true
    }).catch(console.error);
}
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('FlatList')} style={styles.backButton} />
                        </Button>
                    </Left>
                    <Body>
                        <Title> {this.props.navigation.state.params.manufactor} </Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.wrapper} >
                    <Swiper showsButtons={true} buttonWrapperStyle={styles.buttonStyle}>
                        <Image source={{ uri: this.props.navigation.state.params.images.photo1 }} resizeMode='cover' style={styles.slide} />
                        <Image source={{ uri: this.props.navigation.state.params.images.photo2 }} style={styles.slide} />
                        <Image source={{ uri: this.props.navigation.state.params.images.photo3 }} style={styles.slide} />
                    </Swiper>
                </View>

                <ScrollView>
                    <List>
                        <ListItem>
                            <Text style={styles.textList}>Manufactor : {this.props.navigation.state.params.manufactor}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Model : {this.props.navigation.state.params.model}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Fuel : {this.props.navigation.state.params.fuel}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Gearbox : {this.props.navigation.state.params.key}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Price : {this.props.navigation.state.params.pricePerDay} Euro</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Year of production : {this.props.navigation.state.params.year}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>For rent by : {this.props.navigation.state.params.company.name}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.textList}>Adress : {this.props.navigation.state.params.company.adress}</Text>
                        </ListItem>


                    </List>
                </ScrollView>
                <View style={styles.button}>
                    <Button onPress={()=>this.bind(this.callLumi())}>
                        <Icon name='call' />
                        <Text style={styles.textButton}>Call now    </Text>
                    </Button>
                </View>
            </Container>
        );
    }
}
