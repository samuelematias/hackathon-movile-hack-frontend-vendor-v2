import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	Platform
} from 'react-native';
import { Images, Colors } from '../Themes';
import { StatusBarColor, Button } from '../Components/Common';

import { Icon } from '../Components/Common';

// Styles
import styles from './Styles/ProfileScreenStyles';

class ProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconProfileOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconProfileOff}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={Platform.OS === 'ios' ? styles.wrapperTabBarLabel : {}}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#FFF' : 'rgba(255, 255, 255, 0.5)'
						}
					]}
				>
					{'Perfil'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		this._getCurrentUser();
	}

	_getCurrentUser() {
		const user = {
			name: 'Pedro Neto',
			email: 'pedro.neto@email.com',
			photo: 'https://img.icons8.com/color/1600/engineer.png',
			address: 'Rua Arnaldo Bastos, Madalena, Recife',
			phone: '(81) 99810-7649'
		};
		this.setState({ user });
	}

	_logoutClean() {}

	render() {
		const { navigation } = this.props;
		const { user } = this.state;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					<View style={styles.header} />
					<Image source={Images.avatarGreen} style={styles.avatarContent} />
					<View style={styles.bodyContent}>
						<Text style={styles.nameContent}>{user.name}</Text>
						<Text style={styles.aboutContent}>{user.email}</Text>
						<Text style={styles.aboutContent}>{user.phone}</Text>
						<Text style={styles.aboutContent}>{user.address}</Text>
					</View>
				</View>
				<View style={styles.wrapperButton}>
					<TouchableOpacity
						style={styles.buttonStyle}
						onPress={() => {
							navigation.navigate('Login');
						}}
					>
						<View style={styles.wrapperLabel}>
							<Text style={styles.labelButtonStyle}>{'Logout'}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default ProfileScreen;
