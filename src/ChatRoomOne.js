import React from 'react';
import Chat from './Chat';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ChatRoomOne extends React.Component {
  static navigationOptions = {
    title: 'Chatroom 1'
  };

  render(){
    return (
      <Chat 
        room="room-1"
      />
    )
  }
}

export default createStackNavigator({
  main: {
    screen: ChatRoomOne,
    navigationOptions: (
      ({ navigation }) => (
        { headerRight: <Button title="Rooms" onPress={() => navigation.toggleDrawer()} /> }
      )
    )  
  }
});