import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({}).override(
  "vue/multi-word-component-names",
  {
    rules: {
      "@vue/multi-word-component-names": "off",
    },
  }
);
