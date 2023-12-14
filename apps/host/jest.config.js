module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
