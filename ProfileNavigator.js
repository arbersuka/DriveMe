import React, { Component } from "react";
import { StackNavigator , withNavigation } from 'react-navigation';
import FlatListData from "./FlatListData";
import ProfileScreen from "./ProfileScreen";
import UpdateLocation from "./UpdateLocation";
import InsertFrom from "./InsertForm";


const ProfileNavigator = StackNavigator({
    Profile: { screen: ProfileScreen },
    UpdateLocation: { screen: UpdateLocation },
    Insert: {screen: InsertFrom}
  },{
    headerMode: 'none'
});

export default ProfileNavigator;