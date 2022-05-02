module.exports = {
    rootDir: '../',
    roots: [
        "../frontend/"
    ],
    setupFilesAfterEnv: ["./config/jest.setup.js"],
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: ["<rootDir>/frontend/test-utils.js"]
};