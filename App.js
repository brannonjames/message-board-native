import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Button } from 'react-native';
import ChatRoomOne from './src/ChatRoomOne';
import ChatRoomThree from './src/ChatRoomThree';
import ChatRoomTwo from './src/ChatRoomTwo';

const MyApp = createDrawerNavigator({
  room1: { screen: ChatRoomOne, navigationOptions: () => ({ title: 'Chatroom 1' }) },
  room2: { screen: ChatRoomTwo, navigationOptions: () => ({ title: 'Chatroom 2' }) },
  room3: { screen: ChatRoomThree, navigationOptions: () => ({ title: 'Chatroom 3' }) }
});

export default class App extends React.Component {
  render() {
    return <MyApp />
  }
}