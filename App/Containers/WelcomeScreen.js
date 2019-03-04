import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	StatusBar,
	Dimensions,
	Vibration,
	Linking,
	TouchableHighlight,
	Alert
} from 'react-native';
import { Images } from '../Themes';

import QrCode from '../Components/QrCode';

// import all basic components

//import CameraKitCameraScreen we are going to use.

// Styles
import styles from './Styles/WelcomeScreenStyles';

class WelcomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			qrvalue: ''
		};
	}

	render() {
		return <QrCode navigation={this.props.navigation} />;
	}
}

export default WelcomeScreen;
