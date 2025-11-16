import nx from "@nx/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Packages `react` related packages come first.
            ["^react", "^@?\\w"],
            // Side effect imports.
            ["^\\u0000"],
            // shadcn/ui components imports.
            ["^@/components/ui"],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^@?\\w"],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ["^"],
            // Relative imports.
            // Anything that starts with a dot.
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.cts",
      "**/*.mts",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
    // Override or add rules here
    rules: {},
  },
];
