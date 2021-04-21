module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint', // needed to make babel stuff work properly
  extends: 'airbnb',
  rules: {
    'linebreak-style': process.platform === 'win32' ? [0, 'windows'] : [2, 'unix'],
    'react/prefer-stateless-function': [
      0,
    ],
    'react/jsx-filename-extension': [
      0,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/destructuring-assignment': [
      2,
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/prop-types': [
      2,
      {
        ignore: [
          'navigation',
          'screenProps',
        ],
      },
    ],
  },
};
