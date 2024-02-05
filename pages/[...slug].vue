
<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <NuxtLayout>
    <main>
      <ContentDoc />
    </main>
  </NuxtLayout>
</template>