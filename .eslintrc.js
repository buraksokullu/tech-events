module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    hwindow: true,
    document: true,
    window: true,
    hepsiBus: true,
    global: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'class-methods-use-this': 'warn',
    'import/no-unresolved': ['off'],
    'no-shadow': ['off'],
    'import/no-named-as-default': ['off'],
    'array-callback-return': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input']
      }
    ]
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
    jest: true
  }
};
