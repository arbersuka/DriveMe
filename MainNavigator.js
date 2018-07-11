import React, { Component } from "react";
import { DrawerNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import WelcomeScreen from "./WelcomeScreen";
import SideBar from './SideBar';
import FlatListData from "./FlatListData";
import ItemNavigation from "./ItemNavigation";
import DetailView from "./DetailView";
import ProfileNavigator from'./ProfileNavigator';
import AboutUS from'./AboutUS';

const MainNavigator = DrawerNavigator(
    {
      Home: { screen: WelcomeScreen },
      Login: { screen: LoginScreen },
      SignUp: {screen: SignUpScreen},
      Profile: {screen: ProfileNavigator},
      Search: {screen: ItemNavigation},
      About: {screen: AboutUS}
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );
  
  export default MainNavigator;