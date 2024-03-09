module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    //'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': ['warn', 'always'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'arrow-parens': ['warn', 'always'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'react-native/no-unused-styles': 1,
    'no-unused-expressions': [1, { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'no-empty-function': ['warn', { allow: ['methods'] }],
    'prettier/prettier': ['warn', { bracketSameLine: false }],
  },
};
