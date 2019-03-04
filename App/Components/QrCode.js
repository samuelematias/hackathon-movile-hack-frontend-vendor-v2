import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	TouchableOpacity,
	TextInput,
	Linking,
	TouchableHighlight,
	Alert
} from 'react-native';
import PropTypes from 'prop-types';

import { CameraKitCameraScreen } from 'react-native-camera-kit';

import { NavigationActions } from 'react-navigation';

import { Images } from '../Themes/';

import { BottomModal, Button } from '../Components/Common/';

//styles
import styles from './Styles/QrCodeStyles';

class QrCode extends Component {
	constructor(props) {
		super(props);

		this.state = {
			qrvalue: '',
			arrQrCodeData: [],
			openBottomModal: false
		};
	}

	_handleChooseQrCodeOption = () => {
		const { qrvalue } = this.state;
		return this._renderReadQrCode();
	};

	_renderReadQrCode = () => {
		const { openBottomModal } = this.state;
		const { navigation } = this.props;
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<CameraKitCameraScreen
					showFrame={false}
					//Show/hide scan frame
					scanBarcode={true}
					//Can restrict for the QR Code only
					laserColor={'blue'}
					//Color can be of your choice
					frameColor={'yellow'}
					//If frame is visible then frame color
					colorForScannerFrame={'black'}
					//Scanner Frame color
					onReadCode={event =>
						this.onBarcodeScan(event.nativeEvent.codeStringValue)
					}
				/>
				<View style={styles.wrapperOpacityFrame}>
					<Image
						source={Images.opacityFrame}
						style={styles.opacityFrameStyle}
						// resizeMode="stretch"
					/>
				</View>
				<View style={styles.wrapperHeaderTitle}>
					<Text style={styles.readQrCodeTitleStyle}>
						{'Posicione o QR code dentro do quadrado e aguarde.'}
					</Text>
					<Text style={styles.readQrCodeTitleStyle}>
						{'A leitura é automática.'}
					</Text>
				</View>
				<View style={styles.containerIconArrowLeft}>
					<TouchableOpacity
						hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
						style={styles.wrapperIconArrowLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							source={Images.iconArrowLeftGreen}
							style={styles.iconArrowLeftStyle}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
				{
					<BottomModal
						open={openBottomModal}
						onPressOutside={() => this._handleCloseBottomModal()}
						modalContent={() => this._renderBottomModalContent()}
						showButtonOnOverlay //Facebook Modal Style
						// showButtonOnModal //LinkedIn Modal style
						// roundCorner={10} //LinkedIn Modal style
					/>
				}
			</View>
		);
	};

	onBarcodeScan = qrvalue => {
		//called after te successful scanning of QRCode/Barcode
		// this.setState({ qrvalue: qrvalue });
		// return this.props.navigation.navigate('Payment', { qrvalue: qrvalue });
		// this._handleOpenBottomModal();

		//called after te successful scanning of QRCode/Barcode
		this.setState({ qrvalue: qrvalue });
		this.setState({ opneScanner: false });
	};

	/**
	 * Handle to setState on openBottomModal state (to open the modal).
	 * @author samuelmataraso
	 * @method _handleOpenBottomModal
	 * @param none
	 * @return state
	 */
	_handleOpenBottomModal = () => {
		this.setState({ openBottomModal: true });
	};

	/**
	 * Handle to setState on openBottomModal state (to close the modal).
	 * @author samuelmataraso
	 * @method _handleCloseBottomModal
	 * @param none
	 * @return {state} state
	 */
	_handleCloseBottomModal = () => {
		const { navigation } = this.props;
		this.setState({ openBottomModal: false, qrvalue: '' });
	};

	/**
	 * Handle to setState on openBottomModal state (to close the modal).
	 * @author samuelmataraso
	 * @method _handleCloseOnOK
	 * @param none
	 * @return {state} state
	 */
	_handleCloseAndConfirmPayment = () => {
		const { navigation } = this.props;
		setTimeout(() => {
			Alert.alert(
				'Confirmação do Pagamento',
				'Pagamento no valor de R$ 35,67.\n Você deseja confirmar essa pagamento?',
				[
					{
						text: 'Não',
						onPress: () => {},
						style: 'cancel'
					},
					{
						text: 'Sim',
						onPress: () => navigation.navigate('PaymentSuccess')
					}
				],
				{ cancelable: false }
			);
		}, 300);
		//delay function
		// this.setState({ openBottomModal: false });
		// setTimeout(function() {
		// 	return navigation.navigate('Payment');
		// }, 800);

		// return navigation.navigate('HomeScreenTab');
	};

	_showAlertSuccess = () => {
		Alert.alert(
			'Confirmado com sucesso!',
			'Sua pagamento foi confirmado com sucesso!'[
				{
					text: 'OK',
					onPress: () => this._handleResetAction()
				}
			],
			{ cancelable: false }
		);
	};

	/**
	 * Handle
	 * @author samuelmataraso
	 * @method _handleCloseOnOK
	 * @param none
	 * @return {state} state
	 */
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

	_renderBottomModalContent = () => {
		const { navigation } = this.props;
		const date = '';
		const hour = '';
		const user = '';
		const money = '35,67';
		return (
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
								onPress={() => this._handleCloseAndConfirmPayment()}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	};

	// /**
	//  * render the modal
	//  * @author samuelmataraso
	//  * @method _renderShowQrCodeInfo
	//  * @param none
	//  * @return {func} render
	//  */
	_renderShowQrCodeInfo = () => {
		const {} = this.state;

		return (
			<View style={styles.containerShowQrCodeInfo}>
				<View style={styles.wrapperShowQrdCodeInfoTitle}>
					<Text style={styles.showQrCodeInforTitleStyle}>{'SCANNED'}</Text>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<Text
						style={styles.qrValueTextStyle}
						onPress={() => this.onOpenlink()}
					>
						{'QR Code: '}
						<Text style={{ color: 'lightblue' }}>{this.state.qrvalue}</Text>
					</Text>
				</View>
				<TouchableHighlight
					onPress={() => this.onOpenlink()}
					style={styles.buttonOpenLink}
				>
					<View>
						<Text style={styles.openLinkTextStyle}>{'Open Link'}</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => this.onContinueScan()}
					style={styles.buttonContinue}
				>
					<View>
						<Text style={styles.continuaTextStyle}>{'Continue Scanning'}</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	};

	_renderConfirmPayment = () => {
		const date = '';
		const hour = '';
		const user = '';
		const money = '35,67';
		const { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperConfirmPaymentHeader}>
					<View style={styles.wrapperConfirmPaymentInfo}>
						<View />
						<View style={styles.wrapperConfirmPaymentMoney} />
						<View style={styles.wrapperConfirmPaymentWallet}>
							<Image
								source={Images.iconWallet}
								style={styles.wallerConfirmPaymentStyle}
								resizeMode="stretch"
							/>
						</View>
					</View>
				</View>
				<View style={styles.wrapperConfirmPaymentAsking}>
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
										onPress={() => this._handleCloseAndConfirmPayment()}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.containerConfirmPaymentIconArrowLeft}>
					<TouchableOpacity
						hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
						style={styles.wrapperConfirmPaymentIconArrowLeft}
						onPress={() => this.onContinueScan()}
					>
						<Image
							source={Images.iconArrowLeftBlue}
							style={styles.iconConfirmPaymentArrowLeftStyle}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	onOpenlink = () => {
		const { qrvalue } = this.state;
		//Function to open URL, If scanned
		Linking.openURL(qrvalue);
		//Linking used to open the URL in any browser that you have installed
	};
	onContinueScan = () => {
		//To continue Scanning
		this.setState({ qrvalue: '' });
	};

	render() {
		if (this.state.qrvalue) {
			return this._renderConfirmPayment();
		} else {
			return this._handleChooseQrCodeOption();
		}
	}
}

QrCode.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	navigation: null
};

QrCode.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	navigation: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default QrCode;
