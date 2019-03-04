import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	PermissionsAndroid
} from 'react-native';
import Permissions from 'react-native-permissions';
import { Images } from '../Themes';
import {
	Button,
	Card,
	CardSection,
	BottomModal,
	CenterModal,
	FullModal,
	Spinner
} from '../Components/Common';

// Styles
import styles from './Styles/ExampleScreenStyles';

class ExampleScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text style={styles.headerLabelStyle}>{'ExampleScreen'}</Text>,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconProfileActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconProfileInactive}
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
					{'Example'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			openBottomModal: false,
			openCenterModal: false,
			openFullModal: false,
			showSpinner: false
		};
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

	requestCameraPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: 'Cool Photo App Camera Permission',
					message:
						'Cool Photo App needs access to your camera ' +
						'so you can take awesome pictures.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK'
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the camera');
			} else {
				console.log('Camera permission denied');
			}
		} catch (err) {
			console.warn(err);
		}
	};

	/**
	 * Handle to setState on openBottomModal state (to open the modal).
	 * @author samuelmataraso
	 * @method _handleOpenBottomModal
	 * @param none
	 * @return state
	 */
	_handleOpenBottomModal = () => {
		this.setState({ openBottomModal: true });
	};

	/**
	 * Handle to setState on openBottomModal state (to close the modal).
	 * @author samuelmataraso
	 * @method _handleCloseBottomModal
	 * @param none
	 * @return {state} state
	 */
	_handleCloseBottomModal = () => {
		this.setState({ openBottomModal: false });
	};

	/**
	 * Handle to setState on openCenterModal state (to show ModalWithOpacity).
	 * @author samuelmataraso
	 * @method _handleOpenCenterModal
	 * @param none
	 * @return state
	 */
	_handleOpenCenterModal = () => {
		this.setState({ openCenterModal: true });
	};

	/**
	 * Handle to setState on openCenterModal state (to close ModalWithOpacity).
	 * @author samuelmataraso
	 * @method _handleCloseCenterModal
	 * @param none
	 * @return {state} state
	 */
	_handleCloseCenterModal = () => {
		this.setState({ openCenterModal: false });
	};

	/**
	 * Handle to setState on openCenterModal state (to show ModalWithOpacity).
	 * @author samuelmataraso
	 * @method _handleOpenFullModal
	 * @param none
	 * @return state
	 */
	_handleOpenFullModal = () => {
		this.setState({ openFullModal: true });
	};

	/**
	 * Handle to setState on openCenterModal state (to close ModalWithOpacity).
	 * @author samuelmataraso
	 * @method _handleCloseFullModal
	 * @param none
	 * @return {state} state
	 */
	_handleCloseFullModal = () => {
		this.setState({ openFullModal: false });
	};

	/**
	 * Handle to setState on showSpinner state (to show Spinner).
	 * @author samuelmataraso
	 * @method _handleShowSpinner
	 * @param none
	 * @return state
	 */
	_handleShowSpinner = () => {
		this.setState({ showSpinner: true });
	};

	/**
	 * Handle to setState on showSpinner state (to close Spinner).
	 * @author samuelmataraso
	 * @method _handleCloseSpinner
	 * @param none
	 * @return {state} state
	 */
	_handleCloseSpinner = () => {
		this.setState({ showSpinner: false });
	};

	/**
	 * render the modal content
	 * @author samuelmataraso
	 * @method _renderBottomModalContent
	 * @param none
	 * @return {func} render
	 */
	_renderBottomModalContent = () => {
		return (
			<View style={styles.wrapperModal}>
				<Text style={styles.sectionTitleStyle}>{'BottomModal'}</Text>
			</View>
		);
	};

	/**
	 * render the modal content
	 * @author samuelmataraso
	 * @method _renderCenterModalContent
	 * @param none
	 * @return {func} render
	 */
	_renderCenterModalContent = () => {
		return (
			<View style={styles.wrapperDialogPopup}>
				<Text style={styles.sectionTitleStyle}>{'BottomModal'}</Text>
				<View>
					<Button
						labelButton={'Close'}
						onPress={() => this._handleCloseCenterModal()}
					/>
				</View>
			</View>
		);
	};

	/**
	 * render the modal content
	 * @author samuelmataraso
	 * @method _renderModalContent
	 * @param none
	 * @return {func} render
	 */
	_renderFullModalContent = () => {
		return (
			<View style={styles.wrapperModal}>
				<Text style={styles.sectionTitleStyle}>{'BottomModal'}</Text>
				<View>
					<Button
						labelButton={'Close'}
						onPress={() => this._handleCloseFullModal()}
					/>
				</View>
			</View>
		);
	};

	render() {
		const {
			openBottomModal,
			openCenterModal,
			openFullModal,
			showSpinner
		} = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				<Image
					source={Images.background}
					style={styles.backgroundImage}
					resizeMode="stretch"
				/>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Card>
							<Text style={styles.sectionTitleStyle}>{'Buttons'}</Text>
							<CardSection>
								<Button labelButton={'Enabled'} />
								<Button labelButton={'Disabled'} enabledButton={false} />
							</CardSection>
						</Card>
						<Card>
							<Text style={styles.sectionTitleStyle}>{'Modals'}</Text>
							<CardSection>
								<Button
									labelButton={'Open BottomModal'}
									onPress={() => this._handleOpenBottomModal()}
								/>
								<Button
									labelButton={'Open CenterModal'}
									onPress={() => this._handleOpenCenterModal()}
								/>
								<Button
									labelButton={'Open Modal'}
									onPress={() => this._handleOpenFullModal()}
								/>
							</CardSection>
						</Card>
						<Card>
							<Text style={styles.sectionTitleStyle}>
								{'Screen navigation'}
							</Text>
							<CardSection>
								<Button
									labelButton={'Navigate'}
									onPress={() => navigation.navigate('Welcome')}
								/>
							</CardSection>
						</Card>
						<Card>
							<Text style={styles.sectionTitleStyle}>{'TextInput Screen'}</Text>
							<CardSection>
								<Button
									labelButton={'Navigate'}
									onPress={() => navigation.navigate('Input')}
								/>
							</CardSection>
						</Card>
						<Card>
							<Text style={styles.sectionTitleStyle}>{'Spinner'}</Text>
							<CardSection>
								<Button
									labelButton={'Show Spinner'}
									onPress={() => this._handleShowSpinner()}
								/>
							</CardSection>
						</Card>
					</View>
					<View style={styles.section} />
					{
						<BottomModal
							open={openBottomModal}
							onPressOutside={() => this._handleCloseBottomModal()}
							modalContent={() => this._renderBottomModalContent()}
							showButtonOnOverlay //Facebook Modal Style
							// showButtonOnModal //LinkedIn Modal style
							// roundCorner={10} //LinkedIn Modal style
						/>
					}
					{
						<CenterModal
							open={openCenterModal}
							onPressOutside={() => this._handleCloseCenterModal()}
							modalContent={() => {
								return this._renderCenterModalContent();
							}}
							animationType={'slide'}
							disableOnPressOutside
						/>
					}
					{
						<FullModal
							open={openFullModal}
							onPressOutside={() => this._handleCloseFullModal()}
							modalContent={() => this._renderFullModalContent()}
							// showButtonOnOverlay //Facebook Modal Style
							// showButtonOnModal //LinkedIn Modal style
							// roundCorner={10} //LinkedIn Modal style
						/>
					}
					{
						<Spinner
							open={showSpinner}
							//when you're going to use it, uncomment it (disableOnPressSpinner props)
							// disableOnPressSpinner
							//when you're going to use it, remove it (onPressOutside props)
							onPressOutside={() => this._handleCloseSpinner()}
						/>
					}
				</ScrollView>
			</View>
		);
	}
}

export default ExampleScreen;
