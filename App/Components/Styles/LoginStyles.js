import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.navBar,
	container: {
		backgroundColor: Colors.white,
		height:
			Platform.OS === 'ios' ? Metrics.screenHeight : Metrics.screenHeight - 24
	},
	loginContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logoOut: {
		position: 'absolute',
		width: 270,
		height: 100
	},
	logoIn: {
		position: 'absolute',
		top: 20,
		width: 100,
		height: 100
	}
});
