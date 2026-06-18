import Theme from "vitepress/theme";
import { h } from "vue";
import "./custom.css";
import "devicon/devicon.min.css";
import { useTUI } from "vitepress-theme-tui";
import "vitepress-theme-tui/style.css";
import VersionBadge from "./VersionBadge.vue";
// import Giscus from './Giscus.vue';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "nav-bar-content-after": () => h(VersionBadge),
      // 'doc-after': () => h(Giscus),
    });
  },
  enhanceApp() {
    useTUI({
      theme: "plain",
    });
  },
};
