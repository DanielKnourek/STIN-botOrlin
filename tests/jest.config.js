/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "transform": {
    "node_modules/frontend/.+\\.(js|jsx|ts|tsx)?$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!frontend/.*)"
  ],
  "collectCoverage": true,
  "coverageReporters": ["lcov", ["text", { "skipFull": true }]],
  "testResultsProcessor": "jest-sonar-reporter",
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"
  ]
  // verbose: true,
  // automock: true,
};