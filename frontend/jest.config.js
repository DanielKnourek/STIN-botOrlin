/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json"
        }
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["jest-extended/all"],
    testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
    // testEnvironment: 'node',
    // "collectCoverage": true,
    // "coverageReporters": ["lcov", ["text", { "skipFull": true }]],
    // "testResultsProcessor": "jest-sonar-reporter",
    // "coveragePathIgnorePatterns": [
    //     "/node_modules/",
    //     "/test/"
    // ]
    // verbose: true,
    // automock: true,
};