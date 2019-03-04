import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	View,
	Platform,
	FlatList
} from 'react-native';
import { Images, Colors } from '../Themes';

import Permissions from 'react-native-permissions';

// Styles
import styles from './Styles/HomeScreenStyles';
import { StatusBarColor, Button } from '../Components/Common';
class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOff}
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
					{'Home'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		// this.requestCameraPermission();

		// example
		Permissions.request('camera', {
			rationale: {
				title: 'Cool Photo App Camera Permission',
				message:
					'Cool Photo App needs access to your camera ' +
					'so you can take awesome pictures.'
			}
		}).then(response => {
			this.setState({ cameraPermission: response });
		});
	}

	_renderList = () => {
		const dataList = [
			{
				id: 1,
				date: '08/01/19',
				place: 'Cerveja',
				money: '5,00'
			},
			{
				id: 2,
				date: '07/01/19',
				place: 'Vodka',
				money: '13,00'
			},
			{
				id: 3,
				date: '07/01/19',
				place: 'Pitu',
				money: '4,50'
			},
			{
				id: 4,
				date: '08/01/19',
				place: 'Guaraná',
				money: '7,10'
			}
		];

		return (
			<FlatList
				data={dataList}
				extraData={this.state}
				keyExtractor={this._keyExtractor}
				renderItem={({ item, index }) => {
					return this._renderItem(item);
				}}
				ListHeaderComponent={() => this._renderHeader()}
				ItemSeparatorComponent={() => this._renderItemSeparator()}
			/>
		);
	};

	/**
	 * key to Flatlist
	 * @author samuelmataraso
	 * @method _keyExtractor
	 * @param {array} item
	 * @param {number} index
	 * @return {number} item.id
	 */
	_keyExtractor = (item, index) => item.id.toString();

	_renderHeader = () => {
		return (
			<View style={styles.wrapperListHeader}>
				<Text style={styles.headerTitleStyle}>{'DATA'}</Text>
				<Text style={styles.headerTitleStyle}>{'ESTABELECIMENTO'}</Text>
				<Text style={styles.headerTitleStyle}>{'VALOR'}</Text>
			</View>
		);
	};

	_renderItem = item => {
		return (
			<View>
				<View style={styles.wrapperListData}>
					<Text style={styles.listTextStyle}>{item.date}</Text>
					<Text style={styles.listTextStyle}>{item.place}</Text>
					<Text
						style={[
							styles.listTextStyle,
							{
								textAlign: 'right'
							}
						]}
					>
						{item.money}
					</Text>
				</View>
			</View>
		);
	};

	_renderItemSeparator = () => {
		return <View style={styles.line} />;
	};

	render() {
		const money = '120,00';

		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperHeader}>
					<View style={styles.wrapperInfo}>
						<View>
							<Text style={styles.avaiableMoneyTextStyle}>
								{'Saldo disponível'}
							</Text>
						</View>
						<View style={styles.wrapperMoney}>
							<Text style={styles.moneyTextStyle}>{'R$ ' + money}</Text>
						</View>
						<View style={styles.wrapperWallet}>
							<Image
								source={Images.iconWallet}
								style={styles.wallerStyle}
								resizeMode="contain"
							/>
						</View>
					</View>
				</View>
				{/*
				<View style={styles.wrapperButton}>
					<TouchableOpacity style={styles.buttonStyle}>
						<View style={styles.wrapperLabel}>
							<View style={styles.wrapperIcon}>
								<Image
									source={Images.iconMoney}
									style={styles.iconMoney}
									resizeMode="stretch"
								/>
							</View>
							<Text style={styles.labelButtonStyle}>{'Adicionar valor'}</Text>
						</View>
					</TouchableOpacity>
				</View>
				*/}
				<View style={styles.wrapperList}>
					<Text style={styles.lastBuyTextStyle}>{'Últimas vendas'}</Text>
					<View style={styles.listContent}>{this._renderList()}</View>
				</View>
			</View>
		);
	}
}

export default HomeScreen;
