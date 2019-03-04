import React, { Component } from 'react';
import { View, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

//styles
import styles from './Styles/SpinnerStyles';

class Spinner extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {
			open,
			onPressOutside,
			onValidSubmit,
			onPressCancel,
			modalContent,
			containerLoadingViewStyle,
			containerLoadingStyle,
			loadingSize,
			loadingColor,
			disableOnPressSpinner
		} = this.props;
		const {} = this.state;

		return (
			<Modal transparent={true} visible={open} onRequestClose={() => {}}>
				<View style={[styles.loadingView, containerLoadingViewStyle]}>
					<TouchableOpacity
						onPress={() => onPressOutside()}
						disabled={disableOnPressSpinner}
					>
						<View style={[styles.loading, containerLoadingStyle]}>
							<ActivityIndicator
								size={loadingSize}
								color={loadingColor}
								animating={true}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}

Spinner.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	open: false,
	onPressOutside: () => {},
	onValidSubmit: () => {},
	onPressCancel: () => {},
	modalContent: () => {},
	containerLoadingViewStyle: styles.loadingView,
	containerLoadingStyle: styles.loading,
	loadingSize: 'large',
	loadingColor: 'white',
	disableOnPressSpinner: false
};

Spinner.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	open: PropTypes.bool,
	onPressOutside: PropTypes.func,
	onValidSubmit: PropTypes.func,
	onPressCancel: PropTypes.func,
	containerLoadingViewStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	containerLoadingStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	loadingSize: PropTypes.string,
	loadingColor: PropTypes.string,
	disableOnPressSpinner: PropTypes.bool
};

export default Spinner;
