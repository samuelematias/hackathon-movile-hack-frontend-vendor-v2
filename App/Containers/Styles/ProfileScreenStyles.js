import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/';

const { ProfileScreenMetrics } = Metrics;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	avatarContent: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 90
	},
	header: {
		backgroundColor: Colors.skinBlue,
		height: 250
	},
	bodyContent: {
		// flex: 1,
		// alignItems: 'flex-start',
		padding: 20,
		marginTop: 10
		// backgroundColor: 'red'
	},
	nameContent: {
		...Fonts.style.nameContent,
		color: Colors.skinBlack
	},
	aboutContent: {
		...Fonts.style.aboutContent,
		color: Colors.lightBlack
	},
	logoutContent: {
		flex: 1,
		// alignItems: 'center',
		// marginTop: 10,
		backgroundColor: 'red'
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 14,
		marginTop: 30
	},
	actionButtonStyle: {
		borderRadius: 5,
		backgroundColor: '#fff',
		borderColor: Colors.skinBlue,
		borderWidth: 2
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperTabBarLabel: {
		marginTop: Platform.OS === 'ios' ? 15 : 0
	},
	labelButtonStyle: {
		...Fonts.style.labelButtonStyle,
		color: Colors.lightBlack
	},
	wrapperButton: {
		...ProfileScreenMetrics.wrapperButton,
		bottom: 10,
		right: 0,
		left: 0,
		position: 'absolute',
		flex: 1,
		alignItems: 'center'
	},
	buttonStyle: {
		...ProfileScreenMetrics.buttonStyle,
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
		...ProfileScreenMetrics.iconMoney
	},
	wrapperLabel: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperIcon: {
		...ProfileScreenMetrics.wrapperIcon
	}
});
