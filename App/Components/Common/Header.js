//import libs for making a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import styles from './Styles/HeaderStyles';

//make a component
const Header = props => {
	const { viewStyle, textStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

//make the component avaliable to other parts of the app
export default Header;
