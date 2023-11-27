<template>
  <table class="min-w-full table-fixed">
    <thead>
      <tr class="border-b border-primary text-neutral-800">
        <th class="text-left px-6 py-4">Email</th>
        <th class="text-left px-6 py-4">username</th>
        <th class="text-left px-6 py-4">phone</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in users" :key="item">
        <tr class="border-b border-primary text-neutral-800">
          <td class="whitespace-nowrap px-6 py-4">{{ item.email }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ item.username }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ item.phone }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import { useEmployeeStore } from '../stores/employee'

const employeeStore = useEmployeeStore()
// employeeStore.fetchUsers()
let users = computed(() => employeeStore.users)

defineExpose({
  users,
})

</script>