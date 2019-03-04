import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, CustomFonts, Colors } from '../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	logo: {
		marginTop: Metrics.doubleSection,
		height: Metrics.images.logo,
		width: Metrics.images.logo,
		resizeMode: 'contain'
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	wrapperTabBarLabel: {
		marginTop: 15
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperItem: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		margin: 16
	},
	headerLabelStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	},
	sectionTitleStyle: {
		...CustomFonts.style.h1,
		color: Colors.grayAccent,
		textAlign: 'center'
	},
	wrapperDialogPopup: {
		width: 280,
		height: 206,
		paddingBottom: 16,
		paddingTop: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomLeftRadius: 6,
		borderBottomRightRadius: 6
	},
	wrapperModal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
