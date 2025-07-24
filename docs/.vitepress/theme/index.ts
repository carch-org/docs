import Theme from "vitepress/theme";
import "./custom.css";
import "devicon/devicon.min.css"
import { useTUI } from "vitepress-theme-tui";
import "vitepress-theme-tui/style.css";
// import Giscus from './Giscus.vue';
// import { h } from 'vue';

export default {
  ...Theme,
  enhanceApp() {
    useTUI({
      theme: 'monokai',
    });
  },
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // 'doc-after': () => h(Giscus),
  //   });
  // },
};
