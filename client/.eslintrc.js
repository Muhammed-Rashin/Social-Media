module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    indent: ["error", 2],
    "linebreak-style": 1,
    quotes: ["error", "double"],
    "jsx-a11y/label-has-associated-control": "off",
  },
};
