const type = {
	base: 'Avenir-Book',
	medium: 'Avenir-Medium',
	bold: 'Avenir-Black',
	alternate: 'ProximaNova-Regular'
};

const size = {
	h1: 24,
	h2: 14,
	h4: 12,
	body: 13,
	storybook: 18,
	tag: 10,
	input: 16
};

const style = {
	h1: {
		fontFamily: type.bold,
		fontSize: size.h1
	},
	h2: {
		fontFamily: type.bold,
		fontSize: size.h2
	},
	h3: {
		fontFamily: type.base,
		fontSize: size.h2
	},
	h4: {
		fontFamily: type.base,
		fontSize: size.h4
	},
	body: {
		fontFamily: type.alternate,
		fontSize: size.body
	},
	storybook: {
		fontFamily: type.medium,
		fontSize: size.storybook,
		fontWeight: '500'
	},
	storybookLabel: {
		fontFamily: type.alternate,
		fontSize: size.regular
	},
	tag: {
		fontFamily: type.base,
		fontSize: size.tag
	},
	input: {
		fontFamily: type.base
	},
	numberControl: {
		fontFamily: type.base,
		fontSize: size.input
	}
};

export default {
	type,
	size,
	style
};
