import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor() {
     super();
     this.state = {
       counter: 0,
     };
     this.styles = StyleSheet.create({
        button: {
          margin: 0.05,
          height: 0.4,
          backgroundColor: '#3986d9',
          transform: [{translate: [0.3, 0, -11]}],
        },
        text: {
          fontSize: 0.9 ,
          textAlign: 'center',
          transform: [{translate: [0.3, -0.3, -11]}],
        },
      });
   }

   addCount() {
     const nextCount = this.state.counter + 1;
     this.setState({
       counter: nextCount,
     });
   }

  render() {
    return (
      <View>
        <Pano source={asset('tus.jpg')}/>
        <Text
          style={{
            fontSize: 0.9,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -11]}],
          }}>
          Tokyo University of Science
        </Text>
        <Text
          style={{
            fontSize: 0.9,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, -0.3, -11]}],
          }}>
          By Peter Teng
        </Text>
        <VrButton style={this.styles.button} onClick={() => this.addCount()}>
          <Text
            style={this.styles.text}
          >
            {this.state.counter}
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
