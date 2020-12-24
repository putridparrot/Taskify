module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "airbnb-typescript",
    "prettier",
    "plugin:compat/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/sort-comp": "off",
    "react/destructuring-assignment": "warn", //causes issues with redux connect, ie - forces different naming. also doesn't allow lambda without braces to use props/state, so maybe we should destructure in every other case.
    //explicit-member-accessibility - should this be enabled for constructors/react lifecycle functions? If a lifecycle method is private, then the React.Component interface is incorrectly implemented and is public by default.
    "class-methods-use-this": "off", //doesn't fit our functions in base adapters
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], //allows unused params to be prefixed with underscore as per typescript conventions
    "no-param-reassign": ["error", { props: false }],
    "no-parameter-properties": "off", // parameter properties make for more succinct code
    "@typescript-eslint/interface-name-prefix": "off", // for now disable the I prefix rule on interfaces
    "import/named": "off", // seems to show this when types are exported correctly
    "lines-between-class-members": "off", // doesn't seem to differentiate between methods and fields
    "react/jsx-first-prop-new-line": "off", // quite restrictive formatting of HTML like elements
    "react/jsx-max-props-per-line": "off", // quite restrictive formatting of HTML like elements
    "react/jsx-closing-bracket-location": "off", // quite restrictive formatting of HTML like elements
    "import/prefer-default-export": "warn", // requires a export default when single default, defaults to error seems harsh
    "react/jsx-one-expression-per-line": "off", // this is stupid when you have text on a new line, it things it should add another line ad infinitum
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/require-default-props": "off",
    // this stops eslint requiring storybook in Dependencies, not devDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/setupTests.ts",
          ".storybook/**",
          "**/*.stories.**",
          "__tests__/**",
          "**/*.test.**",
        ],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "dot-notation": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/indent": "warn",
    "@typescript-eslint/quotes": "off",
    "jsx-a11y/control-has-associated-label": "off", // seemed to be given false failures may need looking into
    "react/jsx-curly-newline": "off", // seemed to be given false failures may need looking into
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "max-classes-per-file": "off", // tend to agree with this to a point, but this will cause lots of changes so disabling for now
    "@typescript-eslint/lines-between-class-members": "off",
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ["**/*.test.tsx", "**/*.test.ts", "**/*.tests.ts"],
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  ignorePatterns: ["serviceWorker.ts", "**/*.d.ts", "react-app-env.d.ts"],
};
