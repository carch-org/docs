import Theme from "vitepress/theme";
import "./custom.css";
import "devicon/devicon.min.css"
// import Giscus from './Giscus.vue';
// import { h } from 'vue';

export default {
  ...Theme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // 'doc-after': () => h(Giscus),
  //   });
  // },
};
