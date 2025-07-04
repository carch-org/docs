<template>
  <div ref="giscus"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const giscus = ref(null);

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.setAttribute('data-repo', 'carch-org/docs');
  script.setAttribute('data-repo-id', 'R_kgDONbJCIg');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDONbJCIs4ClEXA');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'catppuccin_mocha');
  script.setAttribute('data-lang', 'en');
  script.setAttribute('crossorigin', 'anonymous');
  giscus.value.appendChild(script);
});
</script>
