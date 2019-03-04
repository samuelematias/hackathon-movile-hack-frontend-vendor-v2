import { StyleSheet } from 'react-native';
import { CustomFonts, Colors, Metrics } from '../../../Themes';
export default StyleSheet.create({
	container: {
		backgroundColor: '#ffff'
	},
	loadingView: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	loading: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#222222',
		opacity: 0.2,
		borderRadius: 5,
		width: 70,
		height: 70
	},
	wrapperModalContent: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
