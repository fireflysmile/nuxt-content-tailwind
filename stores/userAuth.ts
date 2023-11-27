interface UserInfo {
  username: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  actions: {
    async login(loginForm: UserInfo) {
      const config = useRuntimeConfig()
      const baseUrl = config.public.APP_API

      await $fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        body: loginForm
      }).then(
        (data: any) => {
          const userToken = useCookie('token', {})
          const username = useCookie('username', {})
          userToken.value = data.token
          username.value = loginForm.username
        }
      ).catch (
        (error: any) => { throw error }
      )
    },
    logout() {
      const userToken = useCookie('token', {})
      const username = useCookie('username', {})

      userToken.value = username.value = null

      return navigateTo('/auth/signin')
    }
  }
})