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
  // verbose: true,
  // automock: true,
};