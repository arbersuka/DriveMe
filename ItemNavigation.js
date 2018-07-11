import React, { Component } from "react";
import { StackNavigator , withNavigation } from 'react-navigation';
import FlatListData from "./FlatListData";
import DetailView from "./DetailView";
import FlatListDemo from "./FlatListDemo";


const itemNavigator = StackNavigator({
    FlatList: { screen: FlatListData },
    Detail: { screen: DetailView }
  },{
    headerMode: 'none'
});

export default itemNavigator;