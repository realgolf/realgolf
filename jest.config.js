export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^\\$lib/(.*)$': '<rootDir>/src/lib/$1'
	},
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.ts$': 'ts-jest'
	}
};
