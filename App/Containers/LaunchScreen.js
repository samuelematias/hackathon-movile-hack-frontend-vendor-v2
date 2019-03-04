import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text style={styles.headerLabelStyle}>{'LaunchScreen'}</Text>,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarInactive}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={styles.wrapperTabBarLabel}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#3F51B5' : '#404040'
						}
					]}
				>
					{'Launch'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Image
					source={Images.background}
					style={styles.backgroundImage}
					resizeMode="stretch"
				/>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.launch} style={styles.logo} />
					</View>

					<View style={styles.section} />
				</ScrollView>
			</View>
		);
	}
}

export default LaunchScreen;
