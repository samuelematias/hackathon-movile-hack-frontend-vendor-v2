import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;
const vh = height / 100;
const pw = width => width * vw; // percent width
const ph = height => height * vh; // percent height

const size = size => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		// console.tron.log('iOS - vw:', vw)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return size * 1;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return size * 1.1;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return size * 1.3;
		} else {
			return size * 1;
		}
	} else {
		if (pixelRatio <= 1) {
			return size * 0.9;
		} else if (pixelRatio <= 1.5) {
			return size * 1;
		} else if (pixelRatio <= 2) {
			return size * 1.1;
		} else if (pixelRatio <= 3) {
			return size * 1.2;
		} else if (pixelRatio <= 3.5) {
			return size * 1.3;
		} else {
			return size * 1.1;
		}
	}
};

const keyboardVerticalOffset = offset => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return offset;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return offset - 100;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return offset - 200;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return offset - 200;
		} else {
			return offset - 100;
		}
	} else {
		// console.tron.log('Android - pixelRatio:', pixelRatio)
		if (pixelRatio <= 1) {
			return offset;
		} else if (pixelRatio <= 1.5) {
			return offset;
		} else if (pixelRatio <= 2) {
			return offset + 20;
		} else if (pixelRatio <= 3) {
			return offset + 50;
		} else if (pixelRatio <= 3.5) {
			return offset + 100;
		} else {
			return offset;
		}
	}
};

// Used via Metrics.baseMargin
const metrics = {
	marginHorizontal: 10,
	marginVertical: 10,
	section: 25,
	baseMargin: 10,
	doubleBaseMargin: 20,
	smallMargin: 5,
	doubleSection: 50,
	horizontalLineHeight: 1,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	buttonRadius: 4,
	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	},
	//New Metrcis
	tabBarLabel: {
		paddingLeft: size(2)
	},
	tabBar: {
		...Platform.select({
			ios: {
				paddingTop: size(8),
				height: size(52)
			},
			android: {
				paddingTop: size(8),
				height: size(52)
			}
		})
	},
	signInFloatBackButton: {
		...Platform.select({
			ios: {
				top: size(15)
			},
			android: {
				top: size(15)
			}
		}),
		left: size(15)
	},
	signInFloatBackIcon: {
		width: size(15),
		height: size(13)
	},
	/**
   QrCodeComponentMetrics
   */
	QrCodeComponentMetrics: {
		containerReadQrCode: {
			height: size(100),
			paddingTop: size(20)
		},
		readQrCodeTitleStyle: {
			paddingRight: size(20),
			paddingLeft: size(20)
		},
		containerShowQrCodeInfo: {
			marginTop: size(100),
			height: ph(100),
			width: pw(93)
		},
		wrapperShowQrdCodeInfoTitle: {
			padding: size(10),
			marginTop: size(30)
		},
		buttonOpenLink: {
			marginTop: size(180),
			padding: size(10)
		},
		buttonContinue: {
			marginTop: size(10),
			padding: size(10)
		},
		view1: {
			top: ph(-15),
			height: size(280)
		},
		view2: {
			top: size(50),
			height: size(200)
		},
		wrapperOpacityFrame: {
			// height: ph(50),
			// width: width
		},
		opacityFrameStyle: {
			height: height,
			width: width
		},
		wrapperHeaderTitle: {
			width: width,
			marginTop: size(60)
		},
		iconArrowLeftStyle: {
			height: size(15),
			width: size(15)
		},
		wrapperIconArrowLeft: {
			marginTop: Platform.OS === 'android' ? size(30) : size(30),
			marginLeft: size(20)
		},
		wrapperShowQrCodeInfo: {
			// margin: size(20)
		},
		wrapperScanButton: {
			paddingBottom: size(10)
		},
		wrapperConfirmPaymentHeader: {
			height: size(140)
		},
		wrapperConfirmPaymentInfo: {
			marginTop: size(36),
			marginLeft: size(15)
		},
		wrapperConfirmPaymentMoney: {
			marginTop: size(15)
		},
		wrapperConfirmPaymentWallet: {},
		wallerConfirmPaymentStyle: {
			width: size(100),
			height: size(100)
		},
		wrapperConfirmPaymentShowQrCodeInfo: {
			margin: size(20)
		},
		qrCodeConfirmPaymentInputContent: {
			marginTop: size(20)
		},
		qrCodeConfirmPayment: {
			marginRight: size(5),
			height: pw(100)
		},
		wrapperConfirmPaymentScanButton: {
			paddingTop: size(10)
		},
		actionButtonConfirmPaymentStyle: {},
		wrapperConfirmPaymentIconArrowLeft: {
			marginTop: Platform.OS === 'android' ? size(30) : size(30),
			marginLeft: size(20)
		},
		iconConfirmPaymentArrowLeftStyle: {
			height: size(15),
			width: size(15)
		}
	},
	/**
   HomeScreenMetrics
   */
	HomeScreenMetrics: {
		wrapperHeader: {
			height: size(140)
		},
		wrapperInfo: {
			marginTop: size(36),
			marginLeft: size(15)
		},
		wrapperMoney: {
			marginTop: size(15)
		},
		wallerStyle: {
			width: size(100),
			height: size(100)
		},
		wrapperWallet: {},
		wrapperButton: {
			marginTop: size(20)
		},
		buttonStyle: {
			height: size(60),
			borderWidth: size(2),
			borderRadius: size(5),
			marginRight: size(15),
			marginLeft: size(15)
		},
		iconMoney: {
			height: size(35),
			width: size(35)
		},
		wrapperIcon: {
			marginRight: size(20)
		},
		wrapperList: {
			margin: size(20)
		},
		listContent: {
			marginTop: size(12)
		},
		wrapperListHeader: {
			// marginBottom: size(180)
		},
		line: {
			height: size(1)
		},
		wrapperListData: {
			marginBottom: size(8),
			marginTop: size(8)
		}
	},
	/**
   ProfileScreenMetrics
   */
	ProfileScreenMetrics: {
		wrapperHeader: {
			height: size(140)
		},
		wrapperInfo: {
			marginTop: size(36),
			marginLeft: size(15)
		},
		wrapperMoney: {
			marginTop: size(15)
		},
		wallerStyle: {
			width: size(100),
			height: size(100)
		},
		wrapperWallet: {},
		wrapperButton: {},
		buttonStyle: {
			height: size(40),
			borderWidth: size(2),
			borderRadius: size(5),
			width: 150
		},
		iconMoney: {
			height: size(35),
			width: size(35)
		},
		wrapperIcon: {
			marginRight: size(20)
		},
		wrapperList: {
			margin: size(20)
		},
		listContent: {
			marginTop: size(12)
		},
		wrapperListHeader: {
			// marginBottom: size(180)
		},
		line: {
			height: size(1)
		},
		wrapperListData: {
			marginBottom: size(8),
			marginTop: size(8)
		}
	},
	/**
   QrCodeGeneratorScreenMetrics
   */
	QrCodeGeneratorScreenMetrics: {
		wrapperHeader: {
			height: size(140)
		},
		wrapperInfo: {
			marginTop: size(36),
			marginLeft: size(15)
		},
		wrapperMoney: {
			marginTop: size(15)
		},
		wallerStyle: {
			width: size(100),
			height: size(100)
		},
		wrapperWallet: {},
		wrapperButton: {
			marginTop: size(20)
		},
		buttonStyle: {
			height: size(60),
			borderWidth: size(2),
			borderRadius: size(5),
			marginRight: size(15),
			marginLeft: size(15)
		},
		iconMoney: {
			height: size(35),
			width: size(35)
		},
		wrapperIcon: {
			marginRight: size(20)
		},
		wrapperList: {
			margin: size(20)
		},
		listContent: {
			marginTop: size(12)
		},
		wrapperListHeader: {
			// marginBottom: size(180)
		},
		line: {
			height: size(1)
		},
		wrapperListData: {
			marginBottom: size(8),
			marginTop: size(8)
		},
		wrapperFirstText: {
			paddingBottom: size(5)
		},
		wrapperSecondText: {
			paddingBottom: size(15)
		},
		iconQrCode: {
			width: size(32),
			height: size(32)
		},
		wrapperScanButton: {
			paddingTop: size(10)
		},
		actionButtonStyle: {}
	},
	/**
   ConfirmPaymentScreenMetrics
   */
	ConfirmPaymentScreenMetrics: {
		wrapperHeader: {
			height: size(140)
		},
		wrapperInfo: {
			marginTop: size(36),
			marginLeft: size(15)
		},
		wrapperMoney: {
			marginTop: size(15)
		},
		wallerStyle: {
			width: size(100),
			height: size(100)
		},
		wrapperWallet: {},
		wrapperButton: {
			marginTop: size(20)
		},
		buttonStyle: {
			height: size(60),
			borderWidth: size(2),
			borderRadius: size(5),
			marginRight: size(15),
			marginLeft: size(15)
		},
		iconMoney: {
			height: size(35),
			width: size(35)
		},
		wrapperIcon: {
			marginRight: size(20)
		},
		wrapperList: {
			margin: size(20)
		},
		listContent: {
			marginTop: size(12)
		},
		wrapperListHeader: {
			// marginBottom: size(180)
		},
		line: {
			height: size(1)
		},
		wrapperListData: {
			marginBottom: size(8),
			marginTop: size(8)
		},
		wrapperFirstText: {
			paddingBottom: size(5)
		},
		wrapperSecondText: {
			paddingBottom: size(15)
		},
		iconQrCode: {
			width: size(32),
			height: size(32)
		},
		wrapperScanButton: {
			paddingTop: size(10)
		},
		actionButtonStyle: {},
		wrapperShowQrCodeInfo: {
			margin: size(20)
		},
		wrapperIconArrowLeft: {
			marginTop: Platform.OS === 'android' ? size(30) : size(30),
			marginLeft: size(20)
		},
		iconArrowLeftStyle: {
			height: size(15),
			width: size(15)
		}
	}
};

export default metrics;
