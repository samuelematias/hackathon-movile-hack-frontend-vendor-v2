import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	Platform,
	TextInput,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import Permissions from 'react-native-permissions';
import { Images, Colors } from '../Themes';
import { Button, FullModal } from '../Components/Common/';
import axios from 'axios';

// Styles
import styles from './Styles/QrCodeGeneratorScreenStyles';

class QrCodeGeneratorScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarVisible: navigation.state.params
			? navigation.state.params.tabBarVisible
			: true,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconQrCodeOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconQrCodeOff}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={Platform.OS === 'ios' ? styles.wrapperTabBarLabel : {}}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#FFF' : 'rgba(255, 255, 255, 0.5)'
						}
					]}
				>
					{'Escanear'}
				</Text>
			</View>
		)
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

	render() {
		const { openFullModal, QRCodeValue, loading } = this.state;
		const { navigation } = this.props;
		const money = '120,00';
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
					<View style={styles.wrapperFirstText}>
						<Text style={styles.FirstTextStyle}>{'Você deseja escanear.'}</Text>
					</View>
					<View style={styles.wrapperSecondText}>
						<Text style={styles.SecondTextStyle}>{'um novo QR code ? '}</Text>
					</View>
					<Image
						source={Images.iconQrCode}
						style={styles.iconQrCode}
						resizeMode="contain"
					/>
					<View style={styles.wrapperScanButton}>
						<Button
							labelButton={'Escanear agora !'}
							labelButtonStyle={styles.QrCodeButtom}
							buttonStyle={styles.actionButtonStyle}
							onPress={() => navigation.navigate('Welcome')}
						/>
					</View>
				</View>
			</View>
		);
	}
}

export default QrCodeGeneratorScreen;
