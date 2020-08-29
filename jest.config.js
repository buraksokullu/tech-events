module.exports = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    './app/**/*.js',
    '!./app/**/*.styled.js',
    '!./app/assets/**',
    '!./oldApp/**',
    '!./app/model/**',
    '!./app/utils/hotjar.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  moduleFileExtensions: ['js'],
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^App(.*)$': '<rootDir>/app$1',
    '^Assets(.*)$': '<rootDir>/app/assets$1',
    '^Components(.*)$': '<rootDir>/app/components$1',
    '^Utils(.*)$': '<rootDir>/app/utils$1',
    '^Store(.*)$': '<rootDir>/app/store$1',
    '^Services(.*)$': '<rootDir>/app/services$1',
    '^Model(.*)$': '<rootDir>/app/model$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
