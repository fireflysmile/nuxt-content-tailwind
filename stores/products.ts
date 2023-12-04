export const useProductStore = defineStore('product', {
  state: () => ({
    products: {},
  }),
  persist: true,
  actions: {
    async fetchProduct() {
      const config = useRuntimeConfig()
      const baseUrl = config.public.APP_API

      await $fetch('https://dummyjson.com/users', { method: 'GET' }).then(
        (data: any) => {
          this.products = data
        }
      ).catch (
        (error: any) => { throw error }
      )
    },
  },
})