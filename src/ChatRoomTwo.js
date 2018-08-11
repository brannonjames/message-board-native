import React from 'react';
import Chat from './Chat';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ChatRoomTwo extends React.Component {
  static navigationOptions = {
    title: 'Chatroom 2'
  };
  render(){
    return (
      <Chat 
        room="room-2"
      />
    )
  }
}

export default createStackNavigator({
  main: {
    screen: ChatRoomTwo,
    navigationOptions: (
      ({ navigation }) => (
        { headerRight: <Button title="Rooms" onPress={() => navigation.toggleDrawer()} /> }
      )
    )  
  }
});