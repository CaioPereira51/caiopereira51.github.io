<template>
  <header class="section-heading">
    <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
    <h2 :id="id" class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  eyebrow: {
    type: String,
    default: '',
  },
});
</script>
