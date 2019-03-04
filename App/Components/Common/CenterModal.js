import React, { Component } from 'react';
import { View, TouchableOpacity, Modal, Alert } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/CenterModalStyles';

class CenterModal extends Component {
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
			modalViewStyle,
			modalStyle,
			loadingSize,
			loadingColor,
			disableOnPressOutside,
			animationType
		} = this.props;
		const {} = this.state;

		return (
			<Modal
				transparent={true}
				animationType={animationType}
				visible={open}
				onRequestClose={() => {}}
			>
				<TouchableOpacity
					onPress={() => {}}
					disabled={disableOnPressOutside}
					style={[styles.loadingView, modalViewStyle]}
				>
					{/*
                        If you want disable the close modal on opacity, uncomment this View bellow.
                        If you dont want disable the close modal on opacity, comment this View bellow.

                    */}
					{<View />}
					{/*
                        If you want enabled the close modal on opacity, uncoment this code bellow.
                        If you dont want enable the close modal on opacity, comment View code bellow
                    */}
					{/*<View style={styles.wrapperModalContent}>{modalContent()}</View>*/}
				</TouchableOpacity>
				{/*
                        If you want disable the close modal on opacity, uncomment this View bellow.
                        If you dont want disable the close modal on opacity, comment this View bellow.

                    */}
				{<View style={styles.wrapperModalContent}>{modalContent()}</View>}
			</Modal>
		);
	}
}

CenterModal.defaultProps = {
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
	modalViewStyle: styles.loadingView,
	modalStyle: styles.loading,
	loadingSize: 'large',
	loadingColor: 'white',
	disableOnPressOutside: false,
	animationType: 'none'
};

CenterModal.propTypes = {
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
	modalViewStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	modalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	loadingSize: PropTypes.string,
	loadingColor: PropTypes.string,
	disableOnPressOutside: PropTypes.bool,
	animationType: PropTypes.string
};

export default CenterModal;
