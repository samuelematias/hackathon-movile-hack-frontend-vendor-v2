import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

// styles
import styles from './Styles/IconStyles';

export default class Icon extends Component {
	render() {
		const { src, size, tintColor, style, resizeMode } = this.props;

		const tint = tintColor ? { tintColor } : null;

		return (
			<Image
				source={src}
				style={[styles[size], style, tint]}
				resizeMode={resizeMode}
			/>
		);
	}
}

Icon.defaultProps = {
	size: 'medium',
	tintColor: null,
	style: null,
	resizeMode: 'contain'
};

Icon.propTypes = {
	src: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]).isRequired,
	size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
	tintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	style: PropTypes.any,
	resizeMode: PropTypes.oneOf([
		'contain',
		'cover',
		'stretch',
		'center',
		'repeat'
	])
};
