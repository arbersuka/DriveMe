import React, { Component } from 'react';
import { StyleSheet, View, Image , Dimensions,Alert,AsyncStorage} from 'react-native';
import { Container, Header, Left, Body, Title, Button, Icon, Right, List, ListItem, Text } from 'native-base';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ACPECT_RATIO = width/height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA*ACPECT_RATIO


export default class UpdateLocation extends Component {
    constructor(props){
        super(props)

        this.state = {

            lati:0,
            long:0,

            initialPosition: {
                latitude: 0,
                longitude: 0,
                longitudeDelta: 0,
                latitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude:0
            }
        }
    }
componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion={
            latitude: lat,
            longitude: long,
            latitudeDelta: LATTITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
        this.setState({initialPosition: initialRegion})
        this.setState({
            lati: lat,
            long: long
        })
        this.setState({markerPosition: initialRegion})
    },(error)=> alert(JSON.stringify(error)),
    {enableHightAccuracy: true, timeout: 20000, maximumAge: 1000})
}

saveLocation(){
    let latit = this.state.lati;
    let longi = this.state.long;

    AsyncStorage.setItem('latitude',latit+"");
    AsyncStorage.setItem('longitude',longi+"");

    Alert.alert('You saved your location')
   
}

render() {
        return (
            <View style={{flex: 1, flexDirection:'column'}}>
            <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Update Location</Title>
          </Body>
          <Right/>
          </Header>
                <View style={styles.container}>
                    <MapView style={styles.map}
                        region = {this.state.initialPosition}>
                        </MapView>
                </View>
                <View  style={styles.buttonset}>
                <Button style={{width:'100%'}} onPress={()=>this.saveLocation()}>
                        <Text style={{marginLeft:'13%'}}>Set UP Current Location</Text>
                </Button>
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginHorizontal: '2%',
        marginTop: '17%',
        marginBottom: '2%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    buttonset:{
        width: 300,
        marginTop: '130%',
        marginHorizontal: '8.5%'
    }
});