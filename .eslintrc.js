module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    // "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "object-shorthand": "error",
    "prefer-destructuring": "error",
    "prefer-template": "error",
    "no-loop-func": "error",
    "prefer-rest-params": "error",
    "no-useless-constructor": "off",
    "import/no-mutable-exports": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "context", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext", // for ReactRouter context
        ],
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
  },
};
