const browserGlobals = {
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  fetch: "readonly",
  FormData: "readonly",
  URLSearchParams: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
};

const nodeGlobals = {
  console: "readonly",
  process: "readonly",
  Buffer: "readonly",
  __dirname: "readonly",
  module: "readonly",
  require: "readonly",
};

const nextPlugin = {
  rules: {
    "no-html-link-for-pages": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow HTML anchor tags for internal Next.js pages.",
        },
        schema: [{ type: "string" }],
      },
      create() {
        return {};
      },
    },
  },
};

export default [
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {},
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "coverage/**",
      "public/**",
      "package-lock.json",
    ],
  },
  {
    files: ["src/**/*.{js,jsx}", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        React: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^React$",
        },
      ],
    },
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
];
