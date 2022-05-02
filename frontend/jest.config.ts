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
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '/^.+.(css|less|scss|sass)$/': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    'node_modules/',
    '.next/',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)




// import type { Config } from '@jest/types';
// import nextJest from 'next/jest';

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   globals: {
//     'ts-jest': {
//       isolatedModules: true,
//     }
//   },
//   rootDir: "../../",
//   // roots: [
//   //   "frontend",
//   //   "node_modules/frontend/lib",
//   //   "../frontend/lib",
//   // ],
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//   setupFilesAfterEnv: ['<rootDir>/tests/config/setupTests.js'],
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'jest-css-modules-transform',
//   },
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
//     '/^.+.(css|less|scss|sass)$/': 'jest-css-modules-transform',
//   },
//   transformIgnorePatterns: [
//     'node_modules/',
//     '.next/',
//   ],
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "**/*.{js,jsx,ts,tsx}",
//   ],
//   coveragePathIgnorePatterns: [
//     'node_modules/',
//     '.next/',
//     '<rootDir>/tests/',
//   ],
  
//   coverageReporters: ["lcov", ["text", { "skipFull": true }]],
//   coverageDirectory: "tests/coverage",
//   coverageThreshold: {
//     global: {
//       lines: 85,
//     },
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   testEnvironment: "jest-environment-jsdom",
//   // testEnvironment: "node",

//   // // setupFilesAfterEnv: ["jest-extended/all"],
//   // // testPathIgnorePatterns: [
//   // //   "<rootDir>/**/node_modules/"
//   // // ],
//   // // testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
//   // // testEnvironment: 'node',

//   // testResultsProcessor: "jest-sonar-reporter",
//   // // "coveragePathIgnorePatterns": [
//   // //   "/node_modules/",
//   // //   "/test/"
//   // // ],

//   // moduleNameMapper: {
//   //   '^(.*)\\.js$': '$1',
//   // },
//   // testEnvironment: 'jest-environment-node',
//   // transform: {
//   //   "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
//   // },
//   // transformIgnorePatterns: [
//   //   'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
//   //   '/.next',
//   // ],
//   // automock: true,
//   verbose: true,
// };

// const createJestConfig = nextJest({
//   dir: "./",
// });

// // const jestConfig = createJestConfig(config);
// // export default jestConfig;
// // module.exports = jestConfig;
// export default config;