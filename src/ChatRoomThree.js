import React from 'react';
import Chat from './Chat';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ChatRoomThree extends React.Component {
  static navigationOptions = {
    title: 'Chatroom 3'
  };
  render(){
    return (
      <Chat
        room="room-3"
      />
    )
  }
}

export default createStackNavigator({
  main: {
    screen: ChatRoomThree,
    navigationOptions: (
      ({ navigation }) => (
        { headerRight: <Button title="Rooms" onPress={() => navigation.toggleDrawer()} /> }
      )
    )  
  }
});