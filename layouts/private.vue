<script setup>
  definePageMeta({
    middleware: 'auth',
  });
  const username = useState('username');
</script>

<template>
  <div>
    <h1>
      Welcome <span class="text-primary">{{ username }}</span
      >!
    </h1>
    <p class="mb-6 text-lg">
      You have been given access to the private page 😁🤫
    </p>
    <NuxtLink to="/" class="p-3 bg-secondary text-white rounded-md"
      >Back to Home</NuxtLink
    >
    <main>
      <ContentDoc />
    </main>
  </div>
</template>