module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error', // Bắt lỗi khi sử dụng any
    '@typescript-eslint/no-unused-vars': 'error', // Bắt lỗi khi tạo biến mà không sử dụng
    'no-unused-vars': 'off', // Tắt quy tắc no-unused-vars của ESLint gốc để tránh xung đột với @typescript-eslint/no-unused-vars
    'import/no-unused-modules': [1, { unusedExports: true }], // Bắt lỗi khi import thư viện mà không sử dụng
  },
}
