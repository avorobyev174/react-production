module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
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
        "i18next/no-literal-string": [ "error", { markupOnly: true } ]
    },
}
