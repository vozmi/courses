module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'xo',
    overrides: [
        {
            extends: [
                'xo-typescript',
            ],
            files: [
                '*.ts',
                '*.tsx',
            ],
            rules: {
                indent: ['error', 4, {SwitchCase: 1}],
                '@typescript-eslint/indent': ['error', 4, {SwitchCase: 1}],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        '@typescript-eslint/indent': ['error', 4, {SwitchCase: 1}],
    },
};
