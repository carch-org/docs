<script setup>
import { ref, onMounted } from "vue";

const version = ref("");

onMounted(async () => {
  try {
    const res = await fetch("https://chalisehari.com.np/api/carch-version");
    const data = await res.json();
    version.value = data.tag_name || "unknown";
  } catch {
    version.value = "unknown";
  }
});
</script>

<template>
  <a
    v-if="version"
    href="https://github.com/harilvfs/carch/releases"
    target="_blank"
    rel="noopener"
    class="version-badge"
  >
    {{ version }}
  </a>
</template>

<style scoped>
.version-badge {
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  padding: 2px 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.version-badge:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
</style>
