const modulePathIgnorePatterns = [
  'dist',
  '.cache',
  '.tmp',
  'build',
  'node_modules'
];

module.exports = {
  projects: [
    {
      displayName: 'unit',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/*(*.)+(spec).ts'],
      preset: 'ts-jest',
      modulePathIgnorePatterns,
      rootDir: './backend/main-server'
    },
    {
      displayName: 'integration',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/*(*.)+(test).ts'],
      preset: 'ts-jest',
      modulePathIgnorePatterns,
      rootDir: './backend/main-server'
    }
  ]
};
