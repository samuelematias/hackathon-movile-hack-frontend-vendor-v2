import { Platform, PixelRatio, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;

const sizeNormalize = size => {
	if (Platform.OS === 'ios') {
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return size * 1;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8, // XR
			return size * 1.1;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return size * 1.3;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return size * 1.3;
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
			return size * 1.1;
		} else if (pixelRatio <= 3.5) {
			return size * 1.2;
		} else {
			return size * 1;
		}
	}
};

const lineHeight = size => {
	return Platform.select({
		ios: sizeNormalize(size),
		android: parseInt(sizeNormalize(size))
	});
};

const type = {
	...Platform.select({
		ios: {
			avenir: {
				light: 'Avenir-Light',
				roman: 'Avenir-Roman',
				medium: 'Avenir-Medium',
				book: 'Avenir-Book',
				black: 'Avenir-Black',
				heavy: 'Avenir-Heavy'
			}
		},
		android: {
			avenir: {
				light: 'AvenirLTStd-Light',
				roman: 'AvenirLTStd-Roman',
				medium: 'AvenirLTStd-Medium',
				book: 'AvenirLTStd-Book',
				black: 'AvenirLTStd-Black',
				heavy: 'AvenirLTStd-Heavy'
			}
		}
	})
};

const size = {
	h5: sizeNormalize(22),
	h6: sizeNormalize(18),
	regular: sizeNormalize(16),
	regularMinus: sizeNormalize(15),
	medium: sizeNormalize(14),
	mediumMinus: sizeNormalize(13),
	small: sizeNormalize(12),
	smallMinus: sizeNormalize(11),
	tiny: sizeNormalize(10)
};

const style = {
	tabBarLabel: {
		fontFamily: type.avenir.medium,
		fontSize: size.tiny
	},
	welcomeText: {
		fontFamily: type.avenir.heavy,
		fontSize: size.h5
	},
	signInButtonText: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regular
	},
	getInButtonText: {
		fontFamily: type.avenir.medium,
		fontSize: size.mediumMinus
	},
	privacyPolicyText: {
		fontFamily: type.avenir.roman,
		fontSize: size.mediumMinus
	},
	wrongAccessCodeMessage: {
		fontFamily: type.avenir.book,
		fontSize: size.mediumMinus
	},
	signInDescriptionText: {
		fontFamily: type.avenir.book,
		fontSize: size.medium,
		lineHeight: lineHeight(20)
	},
	signInInputPhone: {
		fontFamily: type.avenir.book,
		fontSize: size.regular
	},
	signInAccessCodeInput: {
		fontFamily: type.avenir.book,
		fontSize: size.regular
	},
	resendAccessCodeMessageText: {
		fontFamily: type.avenir.roman,
		fontSize: size.mediumMinus
	},
	filterPlacesButton: {
		fontFamily: type.avenir.medium,
		fontSize: size.small
	},
	headerTitle: {
		fontFamily: type.avenir.heavy,
		fontSize: size.h6
	},
	searchPlacesInput: {
		fontFamily: type.avenir.book,
		fontSize: size.mediumMinus
	},
	placeItemName: {
		fontFamily: type.avenir.book,
		fontSize: size.medium,
		lineHeight: lineHeight(18)
	},
	placeItemAddress: {
		fontFamily: type.avenir.book,
		fontSize: size.smallMinus,
		lineHeight: lineHeight(15)
	},
	placeItemsListSectionTitle: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regularMinus
	},
	placesBlankStateButtonText: {
		fontFamily: type.avenir.medium,
		fontSize: size.medium
	},
	blankStatePlacesText: {
		fontFamily: type.avenir.book,
		fontSize: size.regular
	},
	blankStatePlacesTextAccent: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regular
	},
	filterItemText: {
		fontFamily: type.avenir.book,
		fontSize: size.medium
	},
	appliedFilterText: {
		fontFamily: type.avenir.book,
		fontSize: size.medium
	},
	noInternetText: {
		fontFamily: type.avenir.book,
		fontSize: size.medium
	},
	headerPlaceName: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regularMinus
	},
	avenirBook: {
		mediumMinus: {
			fontFamily: type.avenir.book,
			fontSize: size.mediumMinus
		}
	},
	avenirMedium: {
		medium: {
			fontFamily: type.avenir.medium,
			fontSize: size.medium
		},
		small: {
			fontFamily: type.avenir.medium,
			fontSize: size.small
		}
	},
	avenirHeavy: {
		regular: {
			fontFamily: type.avenir.heavy,
			fontSize: size.regular
		}
	},
	avenirRoman: {
		mediumMinus: {
			fontFamily: type.avenir.roman,
			fontSize: size.mediumMinus
		}
	},
	cardItemTitle: {
		fontFamily: type.avenir.heavy,
		fontSize: size.medium,
		lineHeight: lineHeight(25)
	},
	cardItemInfo: {
		fontFamily: type.avenir.roman,
		fontSize: size.mediumMinus,
		lineHeight: lineHeight(22)
	},
	buttonLabel: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regular
	},
	rowStyle: {
		fontFamily: type.avenir.roman,
		fontSize: size.mediumMinus
	},
	readQrCodeTitleStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.small
	},
	showQrCodeInforTitleStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.regular
	},
	qrValueTextStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.medium
	},
	openLinkTextStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.tiny
	},
	continuaTextStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.tiny
	},
	avaiableMoneyTextStyle: {
		fontFamily: type.avenir.heavy,
		fontSize: size.medium
	},
	moneyTextStyle: {
		fontFamily: type.avenir.book,
		fontSize: size.h5
	},
	labelButtonStyle: {
		fontFamily: type.avenir.medium,
		fontSize: size.small
	},
	lastBuyTextStyle: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regular
	},
	headerTitleStyle: {
		fontFamily: type.avenir.book,
		fontSize: size.tiny
	},
	listTextStyle: {
		fontFamily: type.avenir.book,
		fontSize: size.medium
	},
	nameContent: {
		fontFamily: type.avenir.heavy,
		fontSize: size.h5
	},
	aboutContent: {
		fontFamily: type.avenir.book,
		fontSize: size.regular
	},
	qrCodeText: {
		fontFamily: type.avenir.heavy,
		fontSize: size.regular
	},
	QrCodeButtom: {
		fontFamily: type.avenir.heavy,
		fontSize: size.medium
	},
	FirstTextStyle: {
		fontFamily: type.avenir.book,
		fontSize: size.regular
	},
	qrCodeConfirmPayment: {
		fontFamily: type.avenir.book,
		fontSize: size.h6
	},
	qrCodeConfirmPaymentInputField: {
		fontFamily: type.avenir.book,
		fontSize: size.h5
	}
};

export default {
	type,
	size,
	style,
	lineHeight
};
