import React, { Component, Fragment } from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

import { StatusBarColor  } from "../Components/Common";
import Login from '../Components/Login';

import { Colors } from '../Themes/';

// Styles
import styles from './Styles/LoginScreenStyles';

class LoginScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	_handlerStatusBar = () => {
		if (Platform.OS === 'ios') {
			return <StatusBar barStyle="light-content" />;
		} else {
			return (
				<StatusBarColor
					backgroundColor={Colors.skinBlue}
					barStyle="light-content"
				/>
			);
		}
	};

	render() {
		const { navigation } = this.props;
		return (
			<Fragment>
				<SafeAreaView style={{ flex: 0, backgroundColor: Colors.skinBlue }} />
				<SafeAreaView style={{ flex: 1, backgroundColor: Colors.skinBlue }}>
					{this._handlerStatusBar()}
					<Login navigation={navigation} />
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default LoginScreen;
