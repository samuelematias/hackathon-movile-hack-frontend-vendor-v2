import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.navBar,
	container: {
		padding: 20,
		paddingHorizontal: 16
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonContainer: {
		backgroundColor: Colors.skinBlue,
		paddingVertical: 15,
		marginBottom: Platform.OS === 'ios' ? 10 : 0
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	},
	keyboard: {
		backgroundColor: 'blue'
	},
	keyboardGroup: {
		backgroundColor: Colors.background,
		width: Metrics.screenWidth - 32,
		paddingBottom: 9,
		paddingHorizontal: 16,
		marginBottom: 16,
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	keyboardLast: {
		marginBottom: 16
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 14,
		marginTop: 30
	},
	input: {
		width: Metrics.screenWidth - 104,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 0,
		marginTop: 0,
		backgroundColor: Colors.background
	},
	inputAccessory: {
		width: 30,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
