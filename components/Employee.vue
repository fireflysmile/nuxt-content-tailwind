<template>
  <table class="table-fixed">
    <thead>
      <tr>
        <th>Email</th>
        <th>username</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in users" :key="item">
        <tr>
          <td>{{ item.email }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.phone }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
  definePageMeta({
    layout: 'private'
  })
  const config = useRuntimeConfig()
  const ENV_APP_API = config.public.APP_API

  const users = await $fetch(ENV_APP_API + "/users")

  defineExpose({
    users,
  })

</script>