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
        <h1>
          Welcome <span class="text-primary">{{ USER_NAME }}</span
          >!
        </h1>
        <p class="mb-6 text-lg">
          You have been given access to the private page 😁🤫
        </p>
        <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Shopping cart - $ {{ totalSum }}</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
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
        <button @click="logout" class="p-3 bg-secondary text-white rounded-md"
          >Logout</button
        >
      </div>
      <slot @onAddToCart="addToCart" />
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from '../stores/userAuth'
import nuxtStorage from 'nuxt-storage';

// const props = defineProps({
//   modelValue: Number
// })

const authStore = useAuthStore()

const username = useCookie('username', {})
const USER_NAME = username.value

let toggleOpen = ref(true)
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

const totalCart = JSON.parse(nuxtStorage.localStorage.getData('shoppingCart') || "[]")

watch(totalCart, (totalCart, prevTotalCart) => {
  if (totalCart != prevTotalCart) {
    nuxtStorage.localStorage.setData('shoppingCart', JSON.stringify(newValue));
  }
})

const totalSum = computed(() => {
  let sum = 0;

  for (const product of totalCart) {
    sum += product.price * product.amount;
  }
  
  return sum;
})

const logout = () => {
  authStore.logout()
}

const addToCart = (product) => {
  console.log('productproductproduct    ', product)
    let exists = false;
    
    for (const cartItem of totalCart) {
        if (cartItem.id === product.id) {
            cartItem.amount = cartItem.amount + 1;
            exists = true;
            break;
        }
    }

    if (!exists) {
      totalCart.push({
        ...product,
        amount: 1,
      })
    }
}

const removeFromCart = (product) => {
  const productIndex = totalCart.findIndex(item => item.uuid === product.uuid)
  totalCart[productIndex].amount -= 1
  
  if (totalCart[productIndex].amount < 1) {
    totalCart.splice(productIndex, 1);
  }
}
</script>
