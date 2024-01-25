module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'prettier', '@tanstack/query'],
  rules: {
    'prefer-destructuring': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-children-prop': 0,
    'no-case-declarations': 'warn',
    '@tanstack/query/exhaustive-deps': 0,
    'import/no-cycle': 0,
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": ['./vite.config.ts', '**/*.test.tsx', '**/*.test.ts'],
        "packageDir": "./"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    'import/prefer-default-export': 0,
  },
};
