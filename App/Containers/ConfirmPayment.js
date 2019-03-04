import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	Platform,
	TextInput,
	Keyboard,
	TouchableOpacity
} from 'react-native';
import Permissions from 'react-native-permissions';
import { NavigationActions } from 'react-navigation';
import { Images, Colors } from '../Themes';
import { Button, FullModal } from '../Components/Common/';
import axios from 'axios';

// Styles
import styles from './Styles/ConfirmPaymentStyles';

class ConfirmPayment extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			QRCodeValue: '',
			openFullModal: false,
			QRCode: {},
			hideButton: false,
			loading: false
		};
	}

	_onChangeText = text => {
		this.setState({ QRCodeValue: text });
	};

	_generateQRCode = value => {
		const currentUser = {
			id: '1',
			name: 'Pedro Neto',
			email: 'pedro.neto@email.com',
			photo: 'https://img.icons8.com/color/1600/engineer.png',
			address: 'Rua Arnaldo Bastos, Madalena, Recife',
			phone: '(81) 99810-7649',
			user_wallet: '1'
		};

		const sendData = {
			user_wallet: currentUser.user_wallet,
			value: value
		};

		axios
			.post(
				'http://ec2-3-90-10-228.compute-1.amazonaws.com:8000/codes/',
				sendData
			)
			.then(res => {
				this.setState({
					QRCode: res.data
				});
			})
			.catch(error => {
				console.log('ERRO');
			});
	};

	_handleAndroid = () => {
		const { hideButton, QRCodeValue } = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.gerarCodeContent}>
				{!hideButton ? (
					<Button
						labelButton={'QR Code'}
						labelButtonStyle={styles.QrCodeButtom}
						buttonStyle={styles.actionButtonStyle}
						onPress={() => navigation.navigate('Welcome')}
					/>
				) : null}
			</View>
		);
	};

	/**
	 * Handle
	 * @author samuelmataraso
	 * @method _handleCloseOnOK
	 * @param none
	 * @return {state} state
	 */
	_handleCloseOnOK = () => {
		const { navigation } = this.props;
		// setTimeout(function() {
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
		// }, 800);

		// return navigation.navigate('HomeScreenTab');
	};

	/**
	 * Handle
	 * @author samuelmataraso
	 * @method _handleCloseGoBack
	 * @param none
	 * @return {state} state
	 */
	_handleCloseGoBack = () => {
		const { navigation } = this.props;
		// setTimeout(function() {
		const resetAction = NavigationActions.reset({
			index: 2,
			actions: [
				NavigationActions.navigate({
					routeName: 'TabRoot',
					params: {},
					action: NavigationActions.navigate({
						routeName: 'QrCodeGeneratorScreenTab'
					})
				}),
				NavigationActions.navigate({
					routeName: 'Welcome',
					params: {}
				})
			]
		});
		return navigation.dispatch(resetAction);
		// }, 800);

		// return navigation.navigate('HomeScreenTab');
	};

	render() {
		const date = '';
		const hour = '';
		const user = '';
		const money = '35,67';
		const { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperHeader}>
					<View style={styles.wrapperInfo}>
						<View />
						<View style={styles.wrapperMoney} />
						<View style={styles.wrapperWallet}>
							<Image
								source={Images.iconWallet}
								style={styles.wallerStyle}
								resizeMode="stretch"
							/>
						</View>
					</View>
				</View>
				<View style={styles.wrapperAsking}>
					<View style={styles.wrapperShowQrCodeInfo}>
						<View>
							<Text style={styles.texteBoxStyle}>{'Detalhes da operação'}</Text>
							<View style={{ paddingBottom: 10 }}>
								<Text style={styles.texteBoxStyle}>{'Data: ' + date}</Text>
								<Text style={styles.texteBoxStyle}>{'Hora: ' + hour}</Text>
								<Text style={styles.texteBoxStyle}>{'Cliente: ' + user}</Text>
							</View>
							<View>
								<View style={styles.qrCodeInputContent}>
									<View style={{ flexDirection: 'row' }}>
										<Text style={styles.texteBoxStyle}>{'Valor: ' + user}</Text>
										<Text style={styles.qrCode$}>{'R$'}</Text>
									</View>
									<TextInput
										style={styles.qrCodeInputField}
										keyboardType={'numeric'}
										value={money}
										editable={false}
									/>
								</View>
								<View style={styles.wrapperScanButton}>
									<Button
										labelButton={'Confirmar Pagamento'}
										labelButtonStyle={styles.QrCodeButtom}
										buttonStyle={styles.actionButtonStyle}
										onPress={() => this._handleCloseOnOK()}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.containerIconArrowLeft}>
					<TouchableOpacity
						style={styles.wrapperIconArrowLeft}
						onPress={() => {
							// navigation.goBack();
							this._handleCloseGoBack();
						}}
					>
						<Image
							source={Images.iconArrowLeftBlue}
							style={styles.iconArrowLeftStyle}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default ConfirmPayment;
