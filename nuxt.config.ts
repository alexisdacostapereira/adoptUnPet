// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/leaflet",
    "@nuxtjs/i18n",
  ],
  tailwindcss: {
    cssPath: ["./assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  css: ["./assets/css/tailwind.css", "leaflet/dist/leaflet.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  image: {
    dir: "public",
    domains: ["localhost", "adopt-un-pet.vercel.app"],
    provider: "vercel",
  },
});
