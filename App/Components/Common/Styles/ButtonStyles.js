import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors, CustomFonts } from '../../../Themes';

export default StyleSheet.create({
	squareButton: {
		borderRadius: 0
	},
	loadingButton: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	fullButton: {
		width: Metrics.screenWidth
	},
	button: {
		borderRadius: 25,
		backgroundColor: Colors.purpleAccent,
		paddingTop: 14,
		paddingLeft: 62,
		paddingRight: 62,
		paddingBottom: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: Metrics.marginVertical
	},
	invalidButton: {
		borderRadius: 25,
		backgroundColor: Colors.secondaryRed,
		paddingTop: 14,
		paddingLeft: 62,
		paddingRight: 62,
		paddingBottom: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: Metrics.marginVertical
	},
	buttonLabel: {
		...CustomFonts.style.h2,
		color: Colors.background,
		opacity: 0.9
	},
	buttonDisabled: {
		borderRadius: 25,
		backgroundColor: Colors.secondaryLighter,
		paddingTop: 14,
		paddingLeft: 62,
		paddingRight: 62,
		paddingBottom: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: Metrics.marginVertical
	},
	buttonLabelDisabled: {
		...CustomFonts.style.h2,
		color: Colors.secondaryBase
	}
});
