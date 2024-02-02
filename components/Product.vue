<template>
  <Paginate
    class="bg-gray-300 rounded-lg mt-5"
    :perPage="perPage"
    :totalPages="totalItems"
    :currentPage="currentPage"
    :maxPages="3"
    @input="paginate"
  >
    <template #first>
      <NavButton 
        :text="$t('first')"
        :page="'first'"
        :class="'rounded-l-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      />
    </template>
    <template #prev>
      <NavButton
        :text="'Prev'"
        :page="'prev'"
        :class="'px-1 sm:px-2 py-2 flex focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      >
        <span class="text-indigo-600 my-auto relative top-0.2">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
          </span>
          <span class="my-auto">
            {{ $t('prev') }}
          </span>
      </NavButton>
    </template>
    
    <template #next>
      <NavButton 
        :text="'Next'"
        :page="'next'"
        :class="'px-2 py-2 inline-flex focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      >
        <span class="my-auto">
          {{ $t('next') }}
        </span>
        <span class="text-indigo-600 my-auto relative top-0.2">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>
      </NavButton>
    </template>
    <template #last>
      <NavButton 
        :text="$t('last')"
        :page="'last'"
        :class="'rounded-r-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100 dark-hover:bg-gray-900'"
      />
    </template>
  </Paginate>
  <div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="products">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="item in products" :key="item">
          <article class="overflow-hidden rounded-lg shadow-lg">
            <NuxtLink :to="`/product/${item.id}`" class="flex justify-center">
              <img alt="Placeholder" class="block h-[120px] w-auto" :src="item.image">
            </NuxtLink>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg truncate">
                <NuxtLink :to="`/product/${item.id}`" class="no-underline hover:underline text-black" :title="item.title">
                  {{ item.title }}
                </NuxtLink>
              </h1>
              <p class="text-grey-darker text-sm">
                ${{ item.price }}
              </p>
            </header>
            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                    <p class="ml-2 text-sm">
                      {{ item.category }}
                    </p>
                </a>
                <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span class="hidden">Like</span>
                    <i class="fa fa-heart"></i>
                </a>
            </footer>
            <footer class="flex items-center justify-between p-2 md:p-4">
              <NuxtRating :read-only="false" :ratingValue="item.rating.rate || 0" />
            </footer>
          </article>
        </div>
      </div>
    </div>
  </div>
  
  <Paginate
    class="bg-gray-300 rounded-lg mt-5"
    :perPage="perPage"
    :totalPages="totalItems"
    :currentPage="currentPage"
    :maxPages="3"
    @input="paginate"
  >
    <template #first>
      <NavButton 
        :text="$t('first')"
        :page="'first'"
        :class="'rounded-l-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      />
    </template>
    <template #prev>
      <NavButton
        :text="'Prev'"
        :page="'prev'"
        :class="'px-1 sm:px-2 py-2 flex focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      >
        <span class="text-indigo-600 my-auto relative top-0.2">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
          </span>
          <span class="my-auto">
            {{ $t('prev') }}
          </span>
      </NavButton>
    </template>
    
    <template #next>
      <NavButton 
        :text="'Next'"
        :page="'next'"
        :class="'px-2 py-2 inline-flex focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100'"
      >
        <span class="my-auto">
          {{ $t('next') }}
        </span>
        <span class="text-indigo-600 my-auto relative top-0.2">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>
      </NavButton>
    </template>
    <template #last>
      <NavButton 
        :text="$t('last')"
        :page="'last'"
        :class="'rounded-r-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100 dark-hover:bg-gray-900'"
      />
    </template>
  </Paginate>
</template>

<script setup>
import { Paginate, NavButton } from '@brutforce/vue3-paginate'

let products = []
let products_json = []

await fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => products_json = data);

products = products_json && products_json.slice(0, 6)

const page = ref(1)
const currentPage = ref(1)
const perPage = ref(6)
const totalItems = ref((products_json && products_json.length) || 0)

const paginate = (page) => {
  currentPage.value = page
  products = products_json.slice(((page -1) * 6), (page * 6))
}

defineExpose({
  products,
  currentPage,
  perPage,
  totalItems,
})

</script>


<style>
.average-rating::before {
  position: relative;
}
</style>