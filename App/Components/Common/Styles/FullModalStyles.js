import { StyleSheet, Platform } from 'react-native';
import { CustomFonts, Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
	containerModalStyle: {
		flex: 1,
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	containerNewDealModal: {
		backgroundColor: '#ffff',
		flex: 1,
		padding: 19
	},
	containerModalHeaderTitle: {
		fontFamily: 'Avenir-Black',
		fontWeight: '900',
		fontSize: 24,
		color: '#676767'
	},
	containerModalHeaderText: {
		fontFamily: 'Avenir-Medium',
		fontWeight: '500',
		fontSize: 12,
		color: '#c7c7cc'
	},
	action: {
		paddingTop: 15,
		paddingBottom: 15,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	labelCancel: {
		fontFamily: 'Avenir-Heavy',
		fontWeight: '900',
		fontSize: 14,
		color: '#676767'
	},
	buttonCancel: {
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#f1f1f1',
		backgroundColor: '#ffffff',
		flex: 1,
		height: 44,
		paddingLeft: 0,
		paddingRight: 0,
		marginRight: 9
	},
	containerBottomModal: {
		backgroundColor: 'rgba(0, 0, 0, .24)',
		flex: 1,
		flexDirection: 'column'
	},
	bottomModal: {
		backgroundColor: '#fff',
		width: Metrics.screenWidth,
		padding: 24
	},
	bottomHeaderModal: {
		marginBottom: 16
	},
	bottomModalTitle: {
		fontFamily: CustomFonts.type.latoRegular,
		fontWeight: '700',
		fontSize: 16,
		color: Colors.standartText
	},
	bottomModalText: {
		fontFamily: CustomFonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	bottomModalAction: {
		paddingTop: 24,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	bottomOverlay: {
		width: Metrics.screenWidth,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - 225
				: Metrics.screenHeight - 240
	},
	wrapperOverlay: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flex: 1,
		marginBottom: 5
	},
	buttonOnOverlay: {
		width: 40,
		height: 6,
		backgroundColor: '#fafbfb',
		borderRadius: 5
	},
	buttonOnModal: {
		width: 80,
		height: 3,
		backgroundColor: '#dde8ea',
		borderRadius: 5
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6
	},
	wrapperButtonOnModal: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10
	}
});
