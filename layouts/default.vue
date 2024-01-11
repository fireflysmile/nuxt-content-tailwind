<template>
  <div class="justify-center w-full md:flex">
    <SideNav
      v-if="toggleOpen"
      :tabs="tabs"
      :currentRoute="currentRoute"
      @toggleOpen="toggleOpen = false"
    />
    <div v-else class="p-8">
      <img @click="toggleOpen = true" src="/menu-open.png" class="h-7" />
    </div>
    <div class="w-full max-w-5xl max-h-screen px-12 overflow-y-auto pb-9 pt-5">
      <div class="flex flex-col items-end mb-10">
        <h1 class="flex justify-center items-center">
          Welcome <span class="text-primary">{{ "  " + USER_NAME }}</span
          >!
          <span title="Logout" class="logout" @click="logout"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 16l4-4m0 0l-4-4 m4 4h-14m-4 -8 V20"></path></svg></span>
        </h1>
        <p class="mb-6 text-lg">
          You have been given access to the private page 😁🤫
        </p>
        
        <div class="offcanvas-header flex justify-center items-center">
          <h5 id="offcanvasRightLabel">Shopping cart - $ {{ totalSum }}</h5>
          <div class="bg-gray-100 flex justify-center items-center" data-popover-target="popover-click" data-popover-trigger="click">
            <div class="relative cursor-pointer">
              <div class="-mt-3 absolute left-3">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div data-popover id="popover-click" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
          <div v-for="(product, index) in totalCart" :key="'cart-product-' + index" class="card mb-3">
            <div class="row">
              <div class="col-md-4">
                <img :src="product.photoURL" class="img-fluid rounded-start">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">{{ product.description }}</p>
                  <p class="card-text">{{ product.price }} x $ {{ product.amount }}</p>
                  <div class="d-grid">
                    <button @click="removeFromCart(product)" class="btn btn-outline-secondary">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from '../stores/userAuth'
import useCart from '../stores/cart'

const cartStore = useCart()
const authStore = useAuthStore()

const username = useCookie('username', {})
const USER_NAME = username.value

let toggleOpen = ref(true)

const { totalCart, totalSum } = cartStore

const removeFromCart = product => {
  cartStore.removeFromCart(product)
}

const tabs = [
  {
    title: 'Product',
    path: '/product',
  },
  {
    title: 'Company',
    path: '/company',
  },
  {
    title: 'Employee',
    path: '/employee',
  },  
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

<style>
  .logout {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }
  .logout svg {
    width: 25px;
  }
</style>
