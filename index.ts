import type { TSESLint } from "@typescript-eslint/utils";

const configuration: TSESLint.Linter.Config = {
  rules: {
    "@graphql-eslint/input-name": "off",
    "@graphql-eslint/alphabetize": "off",
    "@graphql-eslint/naming-convention": "off",
    "@graphql-eslint/strict-id-in-types": "off",
    "@graphql-eslint/no-typename-prefix": "off",
    "@graphql-eslint/require-description": "off",
    "@graphql-eslint/no-hashtag-description": "off",
    "@graphql-eslint/match-document-filename": "off",
    "@graphql-eslint/no-scalar-result-type-on-mutation": "off",
    "@graphql-eslint/require-field-of-type-query-in-mutation-result": "off",
  },
};

export default configuration;
