import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GiftedChat, Actions } from 'react-native-gifted-chat';
import { MapView } from "expo";

// import config from '../../config/city_of_taguig'
import config from '../../config/public_service_department'


const styles = StyleSheet.create({
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typingText: null,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {

        if (messages.length > 0) {
          if (messages[0].text == config.Chatbot[0].qn) {
            this.onReceive(config.Chatbot[0].ans);
          } else if (messages[0].text == config.Chatbot[1].qn) {
            this.onReceive(config.Chatbot[1].ans);
          } else if (messages[0].text == config.Chatbot[2].qn) {
            this.onReceive(config.Chatbot[2].ans)
          } else {
            if (!this._isAlright) {
              // this._isAlright = true;
              this.onReceive('Sorry dont quite understand your query. Please try again');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  
  renderCustomView = (props) => {
    if (props.currentMessage.location) {
      return (
        <View style={props.containerStyle}>
          <MapView
              style={[styles.mapView]}
              region={{
                latitude: props.currentMessage.location.latitude,
                longitude: props.currentMessage.location.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
            >
              <MapView.Marker
                coordinate={{
                latitude: props.currentMessage.location.latitude,
                longitude: props.currentMessage.location.longitude
                }}
              />
            </MapView>
        </View>
      );
    }
    return null
  }

  onReceive(text) {

    if (text == 'Show Map') {

      this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, {
              _id: Math.round(Math.random() * 1000000),
              text: '',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Help Bot',
                avatar: 'https://placeimg.com/140/140/any'
              },
              location: {
                  latitude: 14.5176,
                  longitude: 121.0509
              }
            }),
          };
        });

    } else {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, {
            _id: Math.round(Math.random() * 1000000),
            text: text,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Help Bot',
              avatar: 'https://placeimg.com/140/140/any'
            }
          }),
        };
      });
    }
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1, // sent messages should have same user._id
        }}
        renderCustomView={this.renderCustomView}

      />
    );
  }
}