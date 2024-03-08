module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': ['warn', 'always'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'arrow-parens': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-native/no-unused-styles': 1,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'no-empty-function': ['error', { allow: ['methods'] }],
    'prettier/prettier': ['error', { bracketSameLine: false }],
  },
};
