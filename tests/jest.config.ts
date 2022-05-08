import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  globals: {
    'ts-jest': {
      isolatedModules: true,
    }
  },
  rootDir: ".",
  roots: [
    "frontend",
    "node_modules/frontend/lib",
    "../frontend/lib",
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/(?!frontend)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'jest-css-modules-transform',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '/^.+.(css|less|scss|sass)$/': 'jest-css-modules-transform',
  },
  collectCoverage: true,
  // collectCoverageFrom: [
  //   "./frontend/lib/**/*.{js,jsx,ts,tsx}",
  //   "../**/*.{js,jsx,ts,tsx}",
  //   // "lib/**/*.{js,jsx,ts,tsx}",
  // ],
  coverageReporters: ["lcov", ["text", { "skipFull": true }]],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      lines: 85,
    },
  },

  testEnvironment: "node",

  transformIgnorePatterns: [
    'node_modules/(?!frontend)',
  ],

  // // setupFilesAfterEnv: ["jest-extended/all"],
  // // testPathIgnorePatterns: [
  // //   "<rootDir>/**/node_modules/"
  // // ],
  // // testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
  // // testEnvironment: 'node',

  // testResultsProcessor: "jest-sonar-reporter",
  // // "coveragePathIgnorePatterns": [
  // //   "/node_modules/",
  // //   "/test/"
  // // ],
  // moduleFileExtensions: ['ts', 'tsx', 'js'],
  // moduleNameMapper: {
  //   '^(.*)\\.js$': '$1',
  // },
  // testEnvironment: 'jest-environment-node',
  // transform: {
  //   "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  // },
  // transformIgnorePatterns: [
  //   'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
  //   '/.next',
  // ],
  // automock: true,
  verbose: true,
};

export default config;