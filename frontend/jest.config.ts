import type { Config } from '@jest/types';
import nextJest from 'next/jest';


const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/tests/config/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    'node_modules/',
    '.next/',
    '<rootDir>/tests/',
  ],
  coverageDirectory: "tests/coverage",
  testResultsProcessor: 'jest-sonar-reporter',
  coverageReporters: ["lcov", ["text", { "skipFull": true }]],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '/^.+.(css|less|scss|sass)$/': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    'node_modules/',
    '.next/',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
