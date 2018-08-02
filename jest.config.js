module.exports = {
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
	],
	globals: {
		'ts-jest': {
		tsConfigFile: '/Users/zaku/project/react/react-app-material-ts-boilerplate/tsconfig.test.json',
		},
	},
	moduleDirectories: [
		'node_modules',
		'src',
	],
	moduleFileExtensions: [
		'web.ts',
		'ts',
		'web.tsx',
		'tsx',
		'web.js',
		'js',
		'web.jsx',
		'jsx',
		'json',
		'node',
		'mjs',
	],
	moduleNameMapper: {
		'^react-native$': 'react-native-web',
	},
	// setupFiles: [
	// 	'<rootDir>/config/polyfills.js',
	// ],
	testEnvironment: 'node',
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
		'<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)',
	],
	testURL: 'http://localhost',
	transform: {
		'^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
		'^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
		'^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
	},
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$',
	],
}