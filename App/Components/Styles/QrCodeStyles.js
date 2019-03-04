import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/';
import colors from '../../Themes/Colors';
const { QrCodeComponentMetrics } = Metrics;
export default StyleSheet.create({
	...ApplicationStyles.screen,
	containerReadQrCode: {
		...QrCodeComponentMetrics.containerReadQrCode,
		backgroundColor: Colors.blackout
		// position: 'absolute'
	},
	readQrCodeTitleStyle: {
		...QrCodeComponentMetrics.readQrCodeTitleStyle,
		...Fonts.style.readQrCodeTitleStyle,
		color: Colors.white,
		textAlign: 'center'
	},
	containerShowQrCodeInfo: {
		...QrCodeComponentMetrics.containerShowQrCodeInfo,
		backgroundColor: colors.black_0_18,
		position: 'absolute'
	},
	wrapperShowQrdCodeInfoTitle: {
		...QrCodeComponentMetrics.wrapperShowQrdCodeInfoTitle,
		alignSelf: 'center'
	},
	showQrCodeInforTitleStyle: {
		...Fonts.style.showQrCodeInforTitleStyle,
		color: Colors.white
	},
	qrValueTextStyle: {
		...Fonts.style.qrValueTextStyle,
		color: Colors.white
	},
	buttonOpenLink: {
		...QrCodeComponentMetrics.buttonOpenLink,
		alignSelf: 'center',
		backgroundColor: Colors.skinBlack
	},
	openLinkTextStyle: {
		...Fonts.style.openLinkTextStyle,
		color: Colors.white
	},
	buttonContinue: {
		...QrCodeComponentMetrics.buttonContinue,
		alignSelf: 'center',
		backgroundColor: Colors.skinBlack
	},
	continuaTextStyle: {
		...Fonts.style.continuaTextStyle,
		color: Colors.white
	},
	view1: {
		...QrCodeComponentMetrics.view1,
		position: 'relative',
		// flex: 1,
		backgroundColor: 'blue'
	},
	view2: {
		...QrCodeComponentMetrics.view2,
		position: 'relative',
		// flex: 1,
		backgroundColor: Colors.tomatoRed
	},
	wrapperOpacityFrame: {
		...QrCodeComponentMetrics.wrapperOpacityFrame,
		position: 'absolute'
	},
	opacityFrameStyle: {
		...QrCodeComponentMetrics.opacityFrameStyle
	},
	wrapperHeaderTitle: {
		...QrCodeComponentMetrics.wrapperHeaderTitle,
		position: 'absolute'
	},
	iconArrowLeftStyle: {
		...QrCodeComponentMetrics.iconArrowLeftStyle
	},
	containerIconArrowLeft: {
		position: 'absolute',
		flex: 1
	},
	wrapperIconArrowLeft: {
		...QrCodeComponentMetrics.wrapperIconArrowLeft
	},
	wrapperShowQrCodeInfo: {
		...QrCodeComponentMetrics.wrapperShowQrCodeInfo,
		flex: 1,
		backgroundColor: Colors.white,
		justifyContent: 'center',
		alignItems: 'center'
	},
	qrCodeInputContent: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'flex-start'
	},
	qrCode$: {
		marginRight: 5,
		fontSize: 30,
		height: 100,
		color: Colors.skinBlue
	},
	qrCodeInputField: {
		flex: 1,
		color: Colors.skinBlue,
		fontSize: 50
	},
	texteBoxStyle: {
		...Fonts.style.FirstTextStyle,
		color: Colors.skinBlack
	},
	wrapperScanButton: {
		...QrCodeComponentMetrics.wrapperScanButton
	},
	QrCodeButtom: {
		...Fonts.style.QrCodeButtom,
		color: Colors.white
	},
	actionButtonStyle: {
		...QrCodeComponentMetrics.actionButtonStyle,
		backgroundColor: Colors.skinBlue
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#2c3539',
		padding: 10,
		width: 300,
		marginTop: 16
	},
	heading: {
		color: 'black',
		fontSize: 24,
		alignSelf: 'center',
		padding: 10,
		marginTop: 30
	},
	simpleText: {
		color: 'black',
		fontSize: 20,
		alignSelf: 'center',
		padding: 10,
		marginTop: 16
	},
	//

	wrapperConfirmPaymentHeader: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentHeader,
		backgroundColor: Colors.skinBlue
		// flex: 1
	},
	wrapperConfirmPaymentInfo: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentInfo
	},
	wrapperConfirmPaymentMoney: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentMoney,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	wrapperConfirmPaymentWallet: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentWallet,
		position: 'absolute',
		right: 0
	},
	wallerConfirmPaymentStyle: {
		...QrCodeComponentMetrics.wallerConfirmPaymentStyle
	},
	wrapperConfirmPaymentAsking: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperConfirmPaymentShowQrCodeInfo: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentShowQrCodeInfo
	},
	texteConfirmPaymentBoxStyle: {
		...Fonts.style.FirstTextStyle,
		color: Colors.skinBlack
	},
	qrCodeConfirmPaymentInputContent: {
		...QrCodeComponentMetrics.qrCodeConfirmPaymentInputContent,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	qrCodeConfirmPayment: {
		...QrCodeComponentMetrics.qrCodeConfirmPayment,
		...Fonts.style.qrCodeConfirmPayment,
		color: Colors.skinBlue
	},
	qrCodeConfirmPaymentInputField: {
		...Fonts.style.qrCodeConfirmPaymentInputField,
		flex: 1,
		color: Colors.skinBlue
	},
	wrapperConfirmPaymentScanButton: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentScanButton
	},
	QrCodeConfirmPaymentButtom: {
		...Fonts.style.QrCodeButtom,
		color: Colors.white
	},
	actionButtonConfirmPaymentStyle: {
		...QrCodeComponentMetrics.actionButtonConfirmPaymentStyle,
		backgroundColor: Colors.skinBlue
	},
	containerConfirmPaymentIconArrowLeft: {
		position: 'absolute',
		flex: 1
	},
	wrapperConfirmPaymentIconArrowLeft: {
		...QrCodeComponentMetrics.wrapperConfirmPaymentIconArrowLeft
	},
	iconConfirmPaymentArrowLeftStyle: {
		...QrCodeComponentMetrics.iconConfirmPaymentArrowLeftStyle
	}
});
