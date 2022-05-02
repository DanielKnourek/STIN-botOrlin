import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  roots: [
    "frontend",
    "node_modules/frontend/lib"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    }
  },
  setupFilesAfterEnv: ["jest-extended/all"],
  // testPathIgnorePatterns: [
  //   "<rootDir>/**/node_modules/"
  // ],
  // testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
  // testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "../frontend/**/*.{js,jsx,ts,tsx}",
    "frontend/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
  ],
  coverageReporters: ["lcov", ["text", { "skipFull": true }]],
  testResultsProcessor: "jest-sonar-reporter",
  // "coveragePathIgnorePatterns": [
  //   "/node_modules/",
  //   "/test/"
  // ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
  testEnvironment: 'jest-environment-node',
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
    '/.next',
  ],
  // automock: true,
  verbose: true,
};

export default config;