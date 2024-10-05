// jest.config.js

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"], // Use setupFilesAfterEnv instead of setupFiles
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
