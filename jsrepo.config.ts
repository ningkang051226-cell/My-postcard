import { defineConfig } from "jsrepo";

export default defineConfig({
  registries: [
    {
      name: "@react-bits",
      url: "https://reactbits.dev/r",
      type: "registry",
    },
  ],
  paths: {
    "ts-tailwind": "./src/components",
  },
});
