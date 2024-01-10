<template>
  <section class="py-10 font-poppins dark:bg-gray-800">
    <div class="max-w-6xl px-4 mx-auto">
      <div class="flex flex-wrap mb-24 -mx-4">
        <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
          <div class="sticky top-0 overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-96">
              <a
                class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </a>
              <img
                class="object-contain w-full lg:h-full"
                :src="products_detail.image"
                alt=""
              />
              <a
                class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex-wrap hidden -mx-2 md:flex">
              <div class="w-1/2 p-2 sm:w-1/4">
                <a
                  class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                  href="#"
                >
                  <img
                    class="object-contain w-full lg:h-28"
                    :src="products_detail.image"
                    alt=""
                  />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a
                  class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                  href="#"
                >
                  <img
                    class="object-contain w-full lg:h-28"
                    :src="products_detail.image"
                    alt=""
                  />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a
                  class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                  href="#"
                >
                  <img
                    class="object-contain w-full lg:h-28"
                    :src="products_detail.image"
                    alt=""
                  />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a
                  class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                  href="#"
                >
                  <img
                    class="object-contain w-full lg:h-28"
                    :src="products_detail.image"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-6">
              <span
                class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200"
                >{{products_detail.category}}</span
              >
              <h2
                class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300"
              >
                {{products_detail.title}}
              </h2>
              <div class="flex flex-wrap items-center mb-6">
                <div class="rating flex mb-4 mr-2 lg:mb-0">
                 <NuxtRating :read-only="false" :ratingValue="products_detail.rating.rate || 0" />
                </div>
                <a
                  class="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                  href="./"
                >
                  View the acer store
                </a>
              </div>
              <p
                class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400"
              >
                <span>${{products_detail.price}}</span>
                <span
                  class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400"
                  >$200</span
                >
              </p>
            </div>
            <div class="mb-6">
              <h2
                class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400"
              >
                Description :
              </h2>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl">
                <div class="p-3 lg:p-5">
                  <div
                    class="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50"
                  >
                    <div class="flex flex-wrap justify-center gap-x-10 gap-y-4">
                      <div class="w-full mb-4">
                        <div class="flex">
                          <span class="mr-3 text-gray-500 dark:text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-clock-history w-7 h-7"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                              ></path>
                              <path
                                d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                              ></path>
                              <path
                                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                              ></path>
                            </svg>
                          </span>
                          <div>
                            <p
                              class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                            >
                              {{ products_detail.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700"
            >
              <span class="text-base text-gray-600 dark:text-gray-400"
                >In Stock</span
              >
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-200">
                Ships from china.
                <span class="text-gray-600 dark:text-gray-400">
                  Most customers receive within 3-31 days.
                </span>
              </p>
            </div>
            <div class="mb-6"></div>
            <div class="flex flex-wrap items-center mb-6">
              <div class="mb-4 mr-4 lg:mb-0">
                <div class="w-28">
                  <div
                    class="relative flex flex-row w-full h-10 bg-transparent rounded-lg"
                  >
                    <button
                      class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                    >
                      <span class="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button
                      class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                    >
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-4 lg:mb-0">
                <button
                  class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    ></path>
                  </svg>
                </button>
              </div>
              <a
                @click="addToCart"
                href="#"
                class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
              >
                Add to cart
              </a>
            </div>
            <div class="flex gap-4 mb-6">
              <a
                href="#"
                class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
              >
                Buy now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()

let products_detail = []

await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
.then(res => res.json())
.then(data => products_detail = data);

const emit = defineEmits(['addToCart'])

// const emit = defineEmits({
//   // Validate submit event
//   addToCart: ({ data }) => {
//     console.log('dataaaaaa   ', data)
//     if (data) return true
//     else return false
//   }
// })

const addToCart = () => {
  emit('addToCart', products_detail )
}

defineExpose({
  products_detail,
  addToCart
})
</script>

<style>
  .rating {
    min-width: 150px;
  }
  .average-rating::before {
    position: relative;
  }
</style>
