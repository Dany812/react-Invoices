'use strict';
module.exports = {
  "env": {
    "browser": true,
    "jasmine": true,
    "jest": true
  },
  "extends": "react-app",
  "globals": {
    "Map": true,
    "Promise": true,
    "specs": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  "plugins": [
    "react",
    "lodash",
    "prettier",
    "jest",
    "graphql"
  ],
  "rules": {
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "keyword-spacing": 2,
    "lodash/import-scope": [
      2,
      "member"
    ],
    "no-console": 2,
    "no-debugger": 2,
    "no-else-return": 2,
    "no-extra-semi": 2,
    "no-mixed-operators": 0,
    "no-return-assign": 2,
    "no-unused-vars": [
      2,
      {
        "args": "after-used"
      }
    ],
    "no-var": 2,
    "object-shorthand": [
      2,
      "always"
    ],
    "one-var": [
      2,
      "never"
    ],
    "prefer-arrow-callback": 2,
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-template": 2,
    "prettier/prettier": [
      2,
      {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "none"
      }
    ],
    "react/jsx-no-literals": 1,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prop-types": 2,
    "react/sort-comp": 2,
    "react/sort-prop-types": [
      2,
      {
        "callbacksLast": false,
        "ignoreCase": true,
        "requiredFirst": false
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "strict": 2,
    "jest/no-focused-tests": 2
  }
};