module.exports = {
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules/", "dist/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testEnvironment: "node",
  // testMatch: ["**/*.test.ts", '"**/*.test.tsx'],
  testRegex: ".test.tsx?$",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/packages/browser/", "/packages/bunyan/","/packages/core/",
                           "/packages/koa/","/packages/winston/","/packages/tools/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
