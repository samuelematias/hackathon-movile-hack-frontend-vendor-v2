import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/CardStyles';

const Card = props => {
	const { children } = props;
	return <View style={styles.containerStyle}>{children}</View>;
};

export default Card;
