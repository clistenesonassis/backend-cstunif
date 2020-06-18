module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // override default options
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};

/*
{
  "env": {
      "browser": true,
      "es2020": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "prettier"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 11,
      "sourceType": "module"
  },
  "plugins": [
      "prettier"
  ],
  "rules": {
      "prettier/prettier": "error"
  }
}
*/
