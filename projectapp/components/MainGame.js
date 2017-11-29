import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';
import Expo, { Audio } from 'expo';



export default class MainGame extends Component {
	static navigationOptions = {
		title: 'Piano'
	};


  playA() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundA = new Expo.Audio.Sound();

    const play_soundA = (async () => {

      await soundA.loadAsync(require('../assets/pianoA.mp3'));
      await soundA.playAsync();

    })();
   
  }
  playB() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundB = new Expo.Audio.Sound();

    const play_soundB = (async () => {

      await soundB.loadAsync(require('../assets/pianoB.mp3'));
      await soundB.playAsync();

    })();
   
  }
  playC() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundC = new Expo.Audio.Sound();

    const play_soundC = (async () => {

      await soundC.loadAsync(require('../assets/pianoC.mp3'));
      await soundC.playAsync();

    })();
   
  }
  playD() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundD = new Expo.Audio.Sound();

    const play_soundD = (async () => {

      await soundD.loadAsync(require('../assets/pianoD.mp3'));
      await soundD.playAsync();

    })();
   
  }
  playE() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundE = new Expo.Audio.Sound();

    const play_soundE = (async () => {

      await soundE.loadAsync(require('../assets/pianoE.mp3'));
      await soundE.playAsync();

    })();
   
  }
  playF() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundF = new Expo.Audio.Sound();

    const play_soundF = (async () => {

      await soundF.loadAsync(require('../assets/pianoF.mp3'));
      await soundF.playAsync();

    })();
   
  }
  playG() {

    Expo.Audio.setIsEnabledAsync(true)
    const soundG = new Expo.Audio.Sound();

    const play_soundG = (async () => {

      await soundG.loadAsync(require('../assets/pianoG.mp3'));
      await soundG.playAsync();

    })();
   
  }


	render() {
		return(

			<View>
				<TouchableHighlight style={styles.keyC} onPress={this.playA}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyD} onPress={this.playB}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyE} onPress={this.playC}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyF} onPress={this.playD}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyG} onPress={this.playE}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyA} onPress={this.playF}>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyB} onPress={this.playG}>
					<View></View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	keyC: {
		width: 60,
		height: 200,
		top: 480,
		position: 'absolute', 
		backgroundColor: '#ff00ff',
	},
	keyD: {
		width: 60,
		height: 200,
		top: 480,
		left: 60,
		position: 'absolute',
		backgroundColor: '#ffff00',
	},
	keyE: {
		width: 60,
		height: 200,
		top: 480,
		left: 120,
		position: 'absolute',
		backgroundColor: '#ff0000',
	},
	keyF: {
		width: 60,
		height: 200,
		top: 480,
		left: 180,
		position: 'absolute',
		backgroundColor: '#ff00ff',
	},
	keyG: {
		width: 60,
		height: 200,
		top: 480,
		left: 240,
		position: 'absolute',
		backgroundColor: '#ffff00',
	},
	keyA: {
		width: 60,
		height: 200,
		top: 480,
		left: 300,
		position: 'absolute',
		backgroundColor: '#ff0000',
	},
	keyB: {
		width: 60,
		height: 200,
		top: 480,
		left: 360,
		position: 'absolute',
		backgroundColor: '#ff00ff',
	},

});
