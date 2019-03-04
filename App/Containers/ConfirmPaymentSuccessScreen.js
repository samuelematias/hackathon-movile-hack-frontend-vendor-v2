import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { View, Text, TouchableHighlight, Animated, Easing } from 'react-native';
import { Colors } from '../Themes';
import styles from './Styles/ConfirmPaymentSuccessScreenStyles';

export default class ConfirmPaymentSuccessScreen extends Component {
	static navigationOptions = () => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			pressNotifyBtn: false,
			pressSkipBtn: false,
			scaleCheckmarkValue: new Animated.Value(0),
			showCheckmark: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showCheckmark: true });
		}, 500);
	}

	scaleCheckmark(value) {
		Animated.timing(this.state.scaleCheckmarkValue, {
			toValue: value,
			duration: 400,
			easing: Easing.easeOutBack
		}).start();
	}

	handleNotifyBtnHideUnderlay = () => {
		this.setState({ pressNotifyBtn: false });
	};

	handleNotifyBtnShowUnderlay = () => {
		this.setState({ pressNotifyBtn: true });
	};

	handleSkipBtnHideUnderlay = () => {
		this.setState({ pressSkipBtn: false });
	};

	handleSkipBtnShowUnderlay = () => {
		this.setState({ pressSkipBtn: true });
	};

	_handleResetAction = () => {
		const { navigation } = this.props;
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName: 'TabRoot',
					params: {},
					action: NavigationActions.navigate({
						routeName: 'HomeScreenTab'
					})
				})
			]
		});
		return navigation.dispatch(resetAction);
	};

	render() {
		const { pressNotifyBtn, showCheckmark, scaleCheckmarkValue } = this.state;
		const { navigation } = this.props;
		const { navigate } = navigation;
		const notifyBtnColor = pressNotifyBtn ? Colors.skinBlue : Colors.skinBlue;
		const iconScale = scaleCheckmarkValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0.01, 1.6, 1]
		});

		const scaleValue = showCheckmark ? 1 : 0;
		this.scaleCheckmark(scaleValue);

		return (
			<View style={styles.wrapper}>
				<View style={styles.content}>
					<Animated.View style={[{ transform: [{ scale: iconScale }] }]}>
						<Icon name="check" color={Colors.skinBlue} size={120} />
					</Animated.View>
					<View>
						<Text style={styles.title}>
							{'Pagamento confirmado com sucesso!'}
						</Text>
						<Text style={styles.description}>
							{'Agora esse pagamento estará listado para você, vamos lá ver?'}
						</Text>
					</View>
					<TouchableHighlight
						style={[{ backgroundColor: notifyBtnColor }, styles.notifyButton]}
						onPress={() => this._handleResetAction()}
						onShowUnderlay={this.handleNotifyBtnShowUnderlay}
						onHideUnderlay={this.handleNotifyBtnHideUnderlay}
						underlayColor={Colors.skinBlue}
					>
						<Text style={[{ color: Colors.white }, styles.buttonText]}>
							{'Sim, vamos lá!'}
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
