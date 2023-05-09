const pluginSortImports = require('@ianvs/prettier-plugin-sort-imports')
const pluginTailwindCss = require('prettier-plugin-tailwindcss')

/** @type {import("prettier").Parser}  */
const parser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindCss.parsers.typescript.parse
}

/** @type {import("prettier").Plugin}  */
const myPlugin = {
  parsers: {
    typescript: parser
  }
}

/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  indent_style: 'space',
  indent_size: 2,
  jsxSingleQuote: true,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  singleAttributePerLine: false,
  tabWidth: 2,
  trailingComma: 'none',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^@/providers/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@local/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/ui/(.*)$',
    '^@/hooks/(.*)$',
    '^@/styles/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
