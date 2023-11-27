<template>
  <div class="justify-center w-full md:flex">
    <SideNav
      v-if="toggleOpen"
      :tabs="tabs"
      :currentRoute="currentRoute"
      @toggleOpen="toggleOpen = $event"
    />
    <div v-else class="p-8">
      <img @click="toggleOpen = true" src="/menu-open.png" class="h-7" />
    </div>
    <div class="w-full max-w-5xl max-h-screen px-12 overflow-y-auto pb-9 pt-5">
      <div class="flex flex-col items-end mb-10">
        <h1>
          Welcome <span class="text-primary">{{ USER_NAME }}</span
          >!
        </h1>
        <p class="mb-6 text-lg">
          You have been given access to the private page 😁🤫
        </p>
        <button @click="logout" class="p-3 bg-secondary text-white rounded-md"
          >Logout</button
        >
      </div>
      <slot />
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from '../stores/userAuth'

const authStore = useAuthStore()

const username = useCookie('username', {})
const USER_NAME = username.value

const open = false
const toggleOpen = true
const tabs = [
  {
    title: 'Employee',
    path: '/employee',
  },
  {
    title: 'Company',
    path: '/company',
  }
]

const route = useRoute()

const currentRoute = computed(() => {
  return route.path;
})

const currentTab = computed(() => {
  return tabs.find((tab) => {
    return tab.path === currentRoute;
  })
})

const logout = () => {
  authStore.logout()
}
</script>
