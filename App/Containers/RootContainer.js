import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
	render() {
		return (
			<View style={styles.applicationView}>
				<StatusBar barStyle="light-content" />
				<AppNavigation />
			</View>
		);
	}
}

export default RootContainer;
