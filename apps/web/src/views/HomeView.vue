<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section class="home">
    <h1>{{ t('app.name') }}</h1>
    <p>{{ t('home.empty') }}</p>
  </section>
</template>

<style scoped>
.home {
  padding: var(--space-4);
}
</style>
