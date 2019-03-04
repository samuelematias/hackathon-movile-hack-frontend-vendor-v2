import React, { Component } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';

//styles
import styles from './Styles/FullModalStyles';

class FullModal extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	/**
	 * render the modal
	 * @author samuelmataraso
	 * @method renderSeparator
	 * @param none
	 * @return {func} render
	 */
	_renderModal = () => {
		const {
			open,
			onPressOutside,
			modalContent,
			overlayStyle,
			showButtonOnOverlay,
			showButtonOnModal,
			buttonOnOverlayStyle,
			buttonOnModalStyle,
			roundCorner,
			contentModalStyle,
			contentOverlayStyle
		} = this.props;
		const {} = this.state;

		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={open}
				onRequestClose={() => {}}
			>
				<View style={styles.containerBottomModal}>
					<View
						style={[
							styles.wrapperContent,
							contentModalStyle,
							{
								borderTopLeftRadius: roundCorner,
								borderTopRightRadius: roundCorner
							}
						]}
					>
						{showButtonOnModal && (
							<TouchableOpacity
								style={styles.wrapperButtonOnModal}
								onPress={() => onPressOutside()}
								activeOpacity={1}
							>
								<View style={[styles.buttonOnModal, buttonOnModalStyle]} />
							</TouchableOpacity>
						)}
						{modalContent()}
					</View>
				</View>
			</Modal>
		);
	};

	render() {
		return this._renderModal();
	}
}

FullModal.defaultProps = {
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
	overlayStyle: styles.bottomOverlay,
	showButtonOnOverlay: false,
	showButtonOnModal: false,
	buttonOnOverlayStyle: styles.buttonOnOverlay,
	buttonOnModalStyle: styles.buttonOnModal,
	roundCorner: 6,
	contentModalStyle: styles.wrapperContent,
	contentOverlayStyle: styles.wrapperOverlay
};

FullModal.propTypes = {
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
	overlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	showButtonOnOverlay: PropTypes.bool,
	showButtonOnModal: PropTypes.bool,
	buttonOnOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	buttonOnModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	roundCorner: PropTypes.number,
	contentModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	contentOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default FullModal;
