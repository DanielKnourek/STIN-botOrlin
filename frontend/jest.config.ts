import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["jest-extended/all"],
    testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
    // testEnvironment: 'node',
    "collectCoverage": true,
    "coverageReporters": ["lcov", ["text", { "skipFull": true }]],
    "testResultsProcessor": "jest-sonar-reporter",
    "coveragePathIgnorePatterns": [
        "/node_modules/",
        "/test/"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        '^(.*)\\.js$': '$1',
    },
    testEnvironment: 'jest-environment-node',
    transformIgnorePatterns: [
        'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
    ],
    // verbose: true,
    // automock: true,
};

export default config;