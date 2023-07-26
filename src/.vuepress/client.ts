// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import Releases from "./components/Releases.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Releases", Releases);
  },
});
