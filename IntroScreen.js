import React from 'react';
import { Spinner } from 'native-base';
import firebase from 'firebase';
import { Alert, AsyncStorage, Text, Button, View, Image, Animated } from 'react-native';

export default class IntroScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            logoOpacity: new Animated.Value(0),
            logoRotation: new Animated.Value(0)
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("visitedAlready", function(err, result) {
            if (result == null) {
                    Animated.timing(
                        this.state.logoOpacity,
                        {
                            duration: 400,
                            toValue: 1
                        }
                    ).start(this.goToMain.bind(this));
            } else {
                Alert.alert("already visited!");
            }
        }.bind(this));
    }

    goToMain() {
        firebase.auth().onAuthStateChanged(user => {
            if (user != null)
                this.props.navigation.navigate('Main');
            else
                this.props.navigation.navigate('Main');
        });
    }

    render() {
        return (
            <View style={style.container}>
                <Animated.Image  source={require('./assets/img/DriveMeLogo.png')}
                
                style={{
                    opacity: this.state.logoOpacity,
                }}
                
                />
            </View>
        );
    }
}

const style = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
}