// export default {
//     roots: [
//       "<rootDir>/src"
//     ],
//     testMatch: [
//       "**/__tests__/**/*.+(ts|tsx|js)",
//       "**/?(*.)+(spec|test).+(ts|tsx|js)"
//     ],
//     transform: {
//       "^.+\\.(ts|tsx)$": "ts-jest"
//     },
//     // Setup Enzyme
//    "snapshotSerializers": ["enzyme-to-json/serializer"],
//    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
//   };
export default {
  // Your Jest configuration options go here
  // For example:
  testEnvironment: 'jsdom', // Use jsdom for DOM simulation
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  //setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Optional setup file
  // Add other configuration options as needed
};