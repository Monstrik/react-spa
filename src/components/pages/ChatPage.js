import React, { Component } from "react";
import MessageList from "../boxes/MessageList ";
import SendMessageForm from "../forms/SendMessageForm";
import Chatkit from "@pusher/chatkit";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     senderId: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     id: 2,
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ];

// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
// const username = "perborgen"
// const roomId = 9796712
const instanceLocator = "v1:us1:a3d73f82-da8e-4ab6-8de0-6702c10a545c";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a3d73f82-da8e-4ab6-8de0-6702c10a545c/token";
const username = "iMonstrik";
const roomId = 19384469;
// const auth='50972c24-0f2b-45f0-bafc-70ed4db8f8ef:SP2XlvFYqOP9XjT2T4TqCZCpovXt4ASidZA7U4Ebmqs=';

class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    });
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h2>ChatPage</h2>
        <p className="title">My awesome chat room</p>
       
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }

 

 
}



export default ChatPage;
