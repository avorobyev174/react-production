module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [ '.eslintrc.js', '*.config.[jt]s '],
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next",
        "jest",
        "react-hooks"
    ],
    "rules": {
        "react/jsx-indent": [ 2, 2 ],
        "react/jsx-indent-props": [ 2, 2 ],
        "indent": [ 2, 2 ],
        "react/jsx-filename-extension": [ 2, { "extensions": [".js", ".jsx", ".tsx"] } ],
        "import/no-unresolved": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "space-in-brackets": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "array-bracket-spacing": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "computed-property-spacing": "off",
        "import-extensions": "off",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "no-undef": "off",
        "react/display-name": "off",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: [ "data-testid", "to", "name" ]
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "template-curly-spacing": ["error", "always"]
    },
    "globals": {
        __IS_DEV__: true,
        __API__: true,
    },
    "overrides": [
        {
            files: [ '**/src/**/*/*.{test, stories}.{ts,tsx}' ],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off"
            }
        }
    ]
}
