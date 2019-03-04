import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
	Platform,
	SafeAreaView
} from 'react-native';

import { TextField } from 'react-native-material-textfield';

import { Images, Colors } from '../Themes/';

import { Icon } from '../Components/Common';

import styles from './Styles/LoginFormStyles';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			marginVertical: 0,
			email: '',
			password: '',
			visible: true
		};
	}

	componentDidMount() {
		if (Platform.OS === 'android') {
			//Listener to handle when the keyboard will show, to hide the TabBar
			this.keyboardDidShowListener = Keyboard.addListener(
				'keyboardDidShow',
				this.keyboardWillShow
			);

			//Listener to handle when the keyboard will hide, to show the TabBar
			this.keyboardDidHideListener = Keyboard.addListener(
				'keyboardDidHide',
				this.keyboardWillHide
			);
		}
	}

	keyboardWillShow = () => {
		this._handleMarginVertical(20);
	};

	keyboardWillHide = () => {
		this._handleMarginVertical(0);
	};

	_handleMarginVertical = value => {
		this.setState({
			marginVertical: value
		});
	};

	renderAccessory = field => {
		const { email, password, visible } = this.state;

		if (field === 'password' && password) {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => this.setState({ visible: !visible })}
				>
					<Icon src={visible ? Images.eye : Images.eyeOff} size={'tiny'} />
				</TouchableOpacity>
			);
		} else if (field === 'text' && email) {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => {
						this.setState({
							email: ''
						});
					}}
				>
					<Icon src={Images.clear} size={'tiny'} />
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	};

	render() {
		const { marginVertical, email, password, visible } = this.state;
		const { navigation } = this.props;
		return (
			<KeyboardAvoidingView>
				<View style={styles.container}>
					<View style={styles.keyboardGroup}>
						<Image
							source={Images.iconLeading}
							style={styles.icon}
							resizeMode={'contain'}
						/>
						<TextField
							label={'Email'}
							value={email}
							onChangeText={email => this.setState({ email })}
							containerStyle={styles.input}
							tintColor={Colors.skinBlue}
							renderAccessory={() => this.renderAccessory('text')}
							autoCapitalize={'none'}
							autoComplete={'off'}
							autoCorrect={false}
						/>
					</View>

					<View style={[styles.keyboardGroup, styles.keyboardLast]}>
						<Image
							source={Images.iconLock}
							style={styles.icon}
							resizeMode={'contain'}
						/>
						<TextField
							label={'Password'}
							value={password}
							onChangeText={password => this.setState({ password })}
							secureTextEntry={visible}
							tintColor={Colors.skinBlue}
							renderAccessory={() => this.renderAccessory('password')}
							containerStyle={styles.input}
							autoCapitalize={'none'}
							autoComplete={'off'}
							autoCorrect={false}
						/>
					</View>

					<TouchableOpacity
						style={[styles.buttonContainer, { marginVertical: marginVertical }]}
						onPress={() => {
							Keyboard.dismiss();
							return navigation.navigate('HomeScreenTab');
						}}
					>
						<Text style={styles.buttonText}>{'Login'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default LoginForm;
