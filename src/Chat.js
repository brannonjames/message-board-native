import React from 'react';
import { View, LayoutAnimation, KeyboardAvoidingView } from 'react-native';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import io from 'socket.io-client';


class Chat extends React.Component {

  state = {
    currentMessage: '',
    messages: [],
    socket: io('https://message-board-server.herokuapp.com/')
  }

  componentDidMount(){
    const { socket, messages } = this.state;

    socket.emit('subscribe', this.props.room);

    socket.on('new_message', message => {
      LayoutAnimation.spring();
      this.setState({ messages: [...this.state.messages, message] });
    });

    socket.on('load_initial_messages', messages => {
      this.setState({ messages });
    });

    socket.on('message_was_deleted', id => {
      const messages = this.state.messages.filter(msg => {
        return msg._id !== id;
      });
      this.setState({ messages });
    })
  }

  componentWillUpdate(){
    
  }

  componentWillUnmount() {
    const { socket } = this.state;
    socket.removeAllListeners();
  }

  handleSubmit = message => {
    // console.log(this.state.socket)
    const newMessage = {
      message,
      room: this.props.room
    }
    this.state.socket.emit('send_message', newMessage);
  }

  handleDelete = message => {
    this.state.socket.emit('delete_message', message);
  }


  render(){
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}  style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>

          <ChatList 
            messages={this.state.messages}
            handleDelete={this.handleDelete}
          />
          
          
          <ChatInput 
            handleSubmit={this.handleSubmit}
          />

        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Chat