import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './Styles/InputStyles';

const Input = ({
	label,
	value,
	onChangeText,
	placeHolder,
	secureTextEntry,
	editable,
	textStyle
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={[inputStyle, textStyle]}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={false}
				placeholder={placeHolder}
				autoCapitalize="none"
				secureTextEntry={secureTextEntry}
				editable={editable}
			/>
		</View>
	);
};

export default Input;
