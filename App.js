import React, { Component } from "react";
import { SwitchNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import firebase from 'firebase';
import Config from './Config';
import StyleWrapper from './StyleWrapper';
import IntroScreen from "./IntroScreen";
import MainNavigator from './MainNavigator';
import FlatListData from "./FlatListData";
import InsertForm from "./InsertForm";



firebase.initializeApp(Config.firebaseConfig);

class App extends Component {
    render() {
        return (
        <AppNavigator/>
    );
    }
}

const AppNavigator = SwitchNavigator({
    Intro: { screen: IntroScreen },
    Main: { screen: MainNavigator }
},);

export default App;
