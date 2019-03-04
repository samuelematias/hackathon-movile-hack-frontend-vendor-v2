import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images } from '../Themes';

import { Icon } from '../Components/Common';

import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import styles from './Styles/InputScreenStyles';

class InputScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text style={styles.headerLabelStyle}>{'InputScreen'}</Text>,
		headerLeft: (
			<TouchableOpacity
				style={styles.wrapperHeaderLeft}
				onPress={() => {
					navigation.goBack();
				}}
			>
				<Image
					style={styles.iconHeader}
					source={Images.iconArrowLeft}
					resizeMode={'contain'}
				/>
			</TouchableOpacity>
		),
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

		this.state = {
			email: '',
			password: '',
			visible: true
		};
	}

	/**
     * Possible props {ignore the var props value}:
        * <TextField
            value={value}
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={value => this.handleChangeText(value)}
            label={label}
            onBlur={() => this.handleOnBlur()}
            keyboardType={keyboardType}
            multiline={multiline}
            editable={editable}
            error={error}
            tintColor={tintColor}
            textColor={textColor}
            baseColor={baseColor}
            disabledLineWidth={disabledLine ? 0 : 1}
            activeLineWidth={disabledLine ? 0 : 1}
            lineWidth={disabledLine ? 0 : 1}
            labelTextStyle={labelTextStyle}
            titleTextStyle={titleTextStyle}
            affixTextStyle={affixTextStyle}
            fontSize={fontSize}
            titleFontSize={titleFontSize}
            labelFontSize={labelFontSize}
            secureTextEntry={visible ? false : secureTextEntry}
            renderAccessory={() => this.renderAccessory(secureTextEntry)}
            returnKeyType={returnKeyType}
            enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
            onSubmitEditing={onSubmitEditing}
            characterRestriction={characterRestriction}
            containerStyle={containerStyle}
            disabled={isDisabled}
        />
     * @memberof InputScreen
     */
	_renderInputs = () => {
		const { email, password } = this.state;
		return (
			<TextField
				label="Phone number"
				value={email}
				onChangeText={email => this.setState({ email })}
				secureTextEntry={false}
			/>
		);
	};

	renderAccessory = field => {
		const { email, visible } = this.state;

		if (field === 'password') {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => this.setState({ visible: !visible })}
				>
					<Icon src={visible ? Images.eye : Images.eyeOff} size={'tiny'} />
				</TouchableOpacity>
			);
		} else if (field === 'text' && email) {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => {
						this.setState({
							email: ''
						});
					}}
				>
					<Icon src={Images.clear} size={'tiny'} />
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	};

	_renderLol = () => {
		const { email, password, visible } = this.state;
		return (
			<KeyboardAwareScrollView>
				<View style={styles.keyboard}>
					<View style={styles.containerKeyboard}>
						<View style={styles.keybordForm}>
							<View style={styles.keyboardGroup}>
								<Image
									source={Images.iconLeading}
									style={styles.icon}
									resizeMode={'contain'}
								/>
								<TextField
									label={'Email'}
									value={email}
									onChangeText={email => this.setState({ email })}
									containerStyle={styles.input}
									tintColor={'rgb(108, 64, 190)'}
									renderAccessory={() => this.renderAccessory('text')}
								/>
							</View>

							<View style={[styles.keyboardGroup, styles.keyboardLast]}>
								<Image
									source={Images.iconLock}
									style={styles.icon}
									resizeMode={'contain'}
								/>
								<TextField
									label={'Password'}
									value={password}
									onChangeText={password => this.setState({ password })}
									secureTextEntry={visible}
									tintColor={'rgb(108, 64, 190)'}
									renderAccessory={() => this.renderAccessory('password')}
									containerStyle={styles.input}
								/>
							</View>

							<View style={styles.keyboardAction}>
								<TouchableOpacity
									style={styles.buttonRecoverPassword}
									onPress={() => {}}
								>
									<Text style={styles.buttonRecoverPasswordText}>
										{'Forgot Password ?'}
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									disabled={false}
									style={styles.buttonLogIn}
									onPress={() => {}}
								>
									{/*Loading on Button*/}
									{/*submitting ? (
										<ActivityIndicator />
									) : (
										<Text style={styles.buttonLogInLabel}>
											{'Sign in'.toUpperCase()}
										</Text>
                                    )*/}
									<Text style={styles.buttonLogInLabel}>
										{'Sign in'.toUpperCase()}
									</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.keyboardNotAccess}>
								<TouchableOpacity
									style={styles.buttonRegistered}
									onPress={() => {}}
								>
									<Text style={styles.buttonRegisteredLabel}>
										{'Signup'.toUpperCase()}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</KeyboardAwareScrollView>
		);
	};

	render() {
		return <View style={styles.mainContainer}>{this._renderLol()}</View>;
	}
}

export default InputScreen;
