import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';

const { HomeScreenMetrics } = Metrics;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	iconHeader: {
		height: 20,
		width: 20
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperTabBarLabel: {
		marginTop: 15
	},
	wrapperHeader: {
		...HomeScreenMetrics.wrapperHeader,
		backgroundColor: Colors.skinBlue
		// flex: 1
	},
	wrapperInfo: {
		...HomeScreenMetrics.wrapperInfo
	},
	wrapperMoney: {
		...HomeScreenMetrics.wrapperMoney,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	avaiableMoneyTextStyle: {
		...Fonts.style.avaiableMoneyTextStyle,
		color: Colors.darkGreen
	},
	moneyTextStyle: {
		...Fonts.style.moneyTextStyle,
		color: Colors.white
	},
	wallerStyle: {
		...HomeScreenMetrics.wallerStyle
	},
	wrapperWallet: {
		...HomeScreenMetrics.wrapperWallet,
		position: 'absolute',
		right: 0
	},
	wrapperButton: {
		...HomeScreenMetrics.wrapperButton
	},
	buttonStyle: {
		...HomeScreenMetrics.buttonStyle,
		backgroundColor: Colors.white,
		borderColor: Colors.skinBlue,
		alignItems: 'center',
		justifyContent: 'center'
	},
	labelButtonStyle: {
		...Fonts.style.labelButtonStyle,
		color: Colors.lightBlack
	},
	iconMoney: {
		...HomeScreenMetrics.iconMoney
	},
	wrapperLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperIcon: {
		...HomeScreenMetrics.wrapperIcon
	},
	wrapperList: {
		...HomeScreenMetrics.wrapperList
	},
	lastBuyTextStyle: {
		...Fonts.style.lastBuyTextStyle,
		color: Colors.skinBlue
	},
	listContent: {
		...HomeScreenMetrics.listContent
	},
	wrapperListHeader: {
		...HomeScreenMetrics.wrapperListHeader,
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	line: {
		...HomeScreenMetrics.line,
		backgroundColor: Colors.solidGray,
		flex: 1
	},
	wrapperListData: {
		...HomeScreenMetrics.wrapperListData,
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerTitleStyle: {
		...Fonts.style.headerTitleStyle,
		color: Colors.solidGray
	},
	listTextStyle: {
		...Fonts.style.listTextStyle,
		color: Colors.skinBlack,
		textAlign: 'left',
		flex: 1
	}
});
