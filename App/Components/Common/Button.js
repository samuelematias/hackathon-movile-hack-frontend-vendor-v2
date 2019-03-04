import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Styles
import styles from './Styles/ButtonStyles';

class Button extends Component {
	_renderLabelButton(enabled, label) {
		const { labelButtonStyle, labelDisabledStyle } = this.props;

		if (enabled) {
			return (
				<Text style={[styles.buttonLabel, labelButtonStyle]}>{label}</Text>
			);
		} else {
			return (
				<Text
					style={[
						styles.buttonLabelDisabled,
						labelButtonStyle,
						labelDisabledStyle
					]}
				>
					{label}
				</Text>
			);
		}
	}

	_renderLoadingButton() {
		const { loadingColor } = this.props;

		return (
			<View style={styles.loadingButton}>
				{loadingColor ? (
					<ActivityIndicator color={loadingColor} />
				) : (
					<ActivityIndicator />
				)}
			</View>
		);
	}

	render() {
		const {
			full,
			labelButton,
			loadingButton,
			enabledButton,
			squareButton,
			invalidButton,
			onPress,
			buttonStyle,
			buttonDisabledStyle
		} = this.props;

		return (
			<TouchableOpacity
				style={[
					invalidButton ? styles.invalidButton : null,
					squareButton ? styles.squareButton : null,
					full ? styles.fullButton : null,
					buttonStyle,
					enabledButton
						? [styles.button, buttonStyle]
						: [styles.buttonDisabled, buttonDisabledStyle]
				]}
				disabled={enabledButton && !loadingButton ? false : true}
				onPress={loadingButton === true ? () => {} : onPress}
			>
				{loadingButton === true
					? this._renderLoadingButton()
					: this._renderLabelButton(enabledButton, labelButton)}

				{loadingButton ? null : this.props.children}
			</TouchableOpacity>
		);
	}
}

Button.defaultProps = {
	full: false,
	labelButton: 'Button',
	labelButtonStyle: null,
	loadingButton: false,
	enabledButton: true,
	buttonStyle: null,
	squareButton: false,
	invalidButton: false,
	onPress: () => {},
	loadingColor: null,
	labelDisabledStyle: {},
	buttonDisabledStyle: {}
};

Button.propTypes = {
	full: PropTypes.bool.isRequired,
	labelButton: PropTypes.string.isRequired,
	labelButtonStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	labelDisabledStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	buttonStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	buttonDisabledStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	loadingButton: PropTypes.bool.isRequired,
	enabledButton: PropTypes.bool.isRequired,
	squareButton: PropTypes.bool.isRequired,
	invalidButton: PropTypes.bool.isRequired,
	onPress: PropTypes.func.isRequired,
	loadingColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Button;
