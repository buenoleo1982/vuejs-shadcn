<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>{{ t('intro.desc') }}</div>
  <RouterView />
</template>

<style lang="scss" scoped></style>
