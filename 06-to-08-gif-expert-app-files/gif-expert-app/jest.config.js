// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Add this to transform JS and JSX files using babel-jest
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
