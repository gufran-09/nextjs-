import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import standard from "eslint-config-standard";
import prettier from "eslint-config-prettier";

// Import the plugin
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  standard,

  // Add eslint-plugin-import
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Recommended useful import rules
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/no-duplicates": "warn",
    },
  },

  // Add Prettier last (to disable conflicting rules)
  prettier,

  // Global ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
