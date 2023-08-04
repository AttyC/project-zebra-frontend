module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['react-refresh', '@typescript-eslint', "import"],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
    settings: {
        "import/resolver": {
            "typescript": {}
        }
    },
}