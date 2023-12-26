module.exports = {
    semi: true,
    singleQuote: false,
    printWidth: 80,
    tabWidth: 2,
    arrowParens: "avoid",
    trailingComma: "none",
    quoteProps: "as-needed",
    bracketSpacing: false,
    importOrder: [
        "^react$",
        "^@?\\w",
        "^\\.\\w",
        "^\\.",
        "^\\.css$"
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    plugins: ["@trivago/prettier-plugin-sort-imports"]
};