//import libs for making a component
import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import styles from './Styles/StatusBarColorStyles';

//make a component
const MyStatusBar = ({ backgroundColor, ...props }) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
);

//make the component avaliable to other parts of the app
export default MyStatusBar;
