import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.navBar,
	container: {
		backgroundColor: '#ffff'
	},
	loadingView: {
		flex: 1,
		backgroundColor: '#00000033',
		alignItems: 'center',
		justifyContent: 'center'
	},
	loading: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#222222',
		opacity: 0.55,
		borderRadius: 5,
		width: 70,
		height: 70
	}
});
