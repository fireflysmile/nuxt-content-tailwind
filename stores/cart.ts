// import nuxtStorage from 'nuxt-storage';
import { useStorage } from '@vueuse/core'

// export const useCart = defineStore('cart', {
export default defineStore('cart', () => {
    // const items = ref([]);
    // const totalItems = ref(0);
    // const totalCost = ref(0);

    // const totalCart = reactive(JSON.parse(nuxtStorage.localStorage.getData('shoppingCart') || "[]"))

    const initCart = useStorage('shoppingCart', [])
    let totalCart = initCart.value
    

    // watch(totalCart, (totalCart, prevTotalCart) => {
    //   if (totalCart != prevTotalCart) {
    //     nuxtStorage.localStorage.setData('shoppingCart', JSON.stringify(totalCart));
    //   }
    //   console.log('totalCart1111   ', JSON.parse(nuxtStorage.localStorage.getData('shoppingCart')))
    //   console.log('totalCart 22222  ', JSON.parse(nuxtStorage.localStorage.getData('shoppingCart') || "[]"))
    // })

    watch(() => totalCart,
      (newValue, oldValue) => {
        console.log('tes    ', newValue)
        if (newValue != oldValue) {
          // nuxtStorage.localStorage.setData('shoppingCart', JSON.stringify(totalCart));

          useStorage('shoppingCart', JSON.stringify(newValue))
        }
      },
      { deep: true }
    )

    const totalSum = computed(() => {
      let sum = 0;

      for (const product of totalCart) {
        sum += product.price * product.amount;
      }
      
      return sum;
    })

    const addToCart = (product: { id: any; }) => {
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
    
    const removeFromCart = (product: { id: any; }) => {
      const productIndex = totalCart.findIndex((item: { id: any; }) => item.id === product.id)

      console.log(totalCart)
      totalCart[productIndex].amount -= 1
      
      if (totalCart[productIndex].amount < 1) {
        totalCart.splice(productIndex, 1);
      }
    }

    return {
      totalCart,
      totalSum,
      addToCart,
      removeFromCart
    };

});