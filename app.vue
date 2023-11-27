<script setup>
  definePageMeta({
    middleware: 'auth',
  });
  const username = useState('username');
  console.log('username.valueusername.valueusername.value    ', username.value)
  const layout = !username.value ? 'default' : 'private'

  console.log('layoutlayoutlayout    ', layout)
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator color="#000" :height="5" />
    <NuxtPage />
  </NuxtLayout>
</template>
