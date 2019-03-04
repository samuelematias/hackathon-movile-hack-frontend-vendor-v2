import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.white
	},
	content: {
		paddingLeft: 20,
		paddingRight: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		color: Colors.skinBlue,
		marginBottom: 15
	},
	title: {
		fontSize: 28,
		color: Colors.black,
		fontWeight: '600',
		textAlign: 'center'
	},
	description: {
		fontSize: 16,
		paddingRight: 30,
		marginTop: 15,
		lineHeight: 22,
		textAlign: 'center'
	},
	notifyButton: {
		width: 160,
		paddingTop: 12,
		paddingBottom: 12,
		borderRadius: 3,
		marginTop: 40
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '600',
		alignSelf: 'center'
	},
	skipButton: {
		borderColor: Colors.skinBlue,
		width: 100,
		borderWidth: 2,
		paddingTop: 12,
		paddingBottom: 12,
		borderRadius: 3,
		marginTop: 15
	},
	wrapperG: {
		width: 120,
		height: 120,
		borderRadius: 60,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconWrapper: {
		marginTop: 2
	}
});

export default styles;
