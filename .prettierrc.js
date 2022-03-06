module.exports = {
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'avoid',
  useTabs: false,
  endOfLine: 'lf',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  attributeGroups: [
    '$DEFAULT',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_INPUT',
    '$ANGULAR_OUTPUT',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_ELEMENT_REF',
  ],
  plugins: [require('prettier-plugin-organize-attributes')],
  overrides: [
    {
      files: ['**/*.pug'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
