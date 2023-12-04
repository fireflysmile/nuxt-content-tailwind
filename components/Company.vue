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
  
  <Paginate
      class="bg-white rounded-lg mt-5"
      :perPage="perPage"
      :totalPages="totalItems"
      :currentPage="currentPage"
      :maxPages="3"
      @input="paginate"
    >
      <template #first>
        <NavButton 
          :text="'First'"
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
              Prev
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
            Next
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
          :text="'Last'"
          :page="'last'"
          :class="'rounded-r-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:bg-gray-100 dark-hover:bg-gray-900'"
        />
      </template>
    </Paginate>
  
</template>

<script setup>
import { Paginate, NavButton } from '@brutforce/vue3-paginate'

let users = []
let users_json = []

await fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => users_json = data.users);

users = users_json.slice(0, 5)

const page = ref(1)
const currentPage = ref(1)
const perPage = ref(5)
const totalItems = ref(users_json.length)

const paginate = (page) => {
  currentPage.value = page
  users = users_json.slice(((page -1) * 5), (page * 5))
}

defineExpose({
  users,
  currentPage,
  perPage,
  totalItems,
})

</script>