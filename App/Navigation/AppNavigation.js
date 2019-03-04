import React from 'react';
import { Platform } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Colors } from '../Themes';

import LaunchScreen from '../Containers/LaunchScreen';
import ExampleScreen from '../Containers/ExampleScreen';
import WelcomeScreen from '../Containers/WelcomeScreen';
import InputScreen from '../Containers/InputScreen';

import HomeScreen from '../Containers/HomeScreen';
import QrCodeGeneratorScreen from '../Containers/QrCodeGeneratorScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import LoginScreen from '../Containers/LoginScreen';
import ConfirmPayment from '../Containers/ConfirmPayment';
import ConfirmPaymentSuccessScreen from '../Containers/ConfirmPaymentSuccessScreen';

const TabNav = TabNavigator(
	{
		HomeScreenTab: {
			screen: HomeScreen
		},
		QrCodeGeneratorScreenTab: {
			screen: QrCodeGeneratorScreen
		},
		ProfileScreenTab: {
			screen: ProfileScreen
		}
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'HomeScreenTab',
		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			style: {
				backgroundColor: Colors.skinBlue,
				height: 47
			},
			tabStyle: {
				borderTopWidth: 1,
				borderTopColor: Colors.skinBlue,
				flex: 1
			},
			labelStyle: {
				fontSize: 12,
				color: 'red',
				paddingBottom: 3
			},
			indicatorStyle: {
				backgroundColor: 'transparent'
			}
		}
	}
);

const AppNavigation = StackNavigator(
	{
		TabRoot: { screen: TabNav },
		Welcome: { screen: WelcomeScreen },
		Input: { screen: InputScreen },
		Login: { screen: LoginScreen },
		Payment: { screen: ConfirmPayment },
		PaymentSuccess: { screen: ConfirmPaymentSuccessScreen }
	},
	{
		headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
		initialRouteName: 'Login',
		/* The header config from HomeScreen is now here */
		navigationOptions: {
			headerStyle: {
				backgroundColor: Colors.skinBlue
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default AppNavigation;
