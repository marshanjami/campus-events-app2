export default {
  testEnvironment: 'node', 
  
  
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  
  transform: {},
  
  testMatch: ['**/tests/**/*.test.js'],
  
  collectCoverageFrom: [
    'public/js/**/*.js',
    '!public/js/main.js'
  ],
};