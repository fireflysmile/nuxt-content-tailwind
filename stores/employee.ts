export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    users: {},
  }),
  persist: true,
  actions: {
    async fetchUsers() {
      const config = useRuntimeConfig()
      const baseUrl = config.public.APP_API

      await $fetch(`${baseUrl}/users`, { method: 'GET' }).then(
        (data: any) => {
          this.users = data
        }
      ).catch (
        (error: any) => { throw error }
      )
    },
  },
})