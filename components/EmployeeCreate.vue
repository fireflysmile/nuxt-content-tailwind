<template>
  <section class=" py-1 bg-blueGray-50">
    <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-blueGray-700 text-xl font-bold">
              Create employee
            </h6>
            <button @click="handleSubmit" class="bg-pink-500 text-black active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
              Save
            </button>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Username
                  </label>
                  <input type="text" v-model="data.username" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input type="password" v-model="data.password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Email address
                  </label>
                  <input type="email" v-model="data.email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="jesse@example.com">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    First Name
                  </label>
                  <input type="text" v-model="data.name.firstname" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Lucky">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Last Name
                  </label>
                  <input type="text" v-model="data.name.lastname" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Jesse">
                </div>
              </div>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300">

            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Street
                  </label>
                  <input type="text" v-model="data.address.street" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    City
                  </label>
                  <input type="text" v-model="data.address.city" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="New York">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Country
                  </label>
                  <input type="text" v-model="data.address.number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="United States">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Zip Code
                  </label>
                  <input type="text" v-model="data.address.zipcode" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Postal Code">
                </div>
              </div>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300">

            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    About me
                  </label>
                  <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const data = {
    email:'',
    username:'',
    password:'',
    name:{
      firstname:'',
      lastname:''
    },
    address:{
      city:'',
      street:'',
      number: null,
      zipcode:''
    },
    phone:''
  };
  const handleSubmit = () => {
    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(json => {
      console.log(json);
      navigateTo('/employee')
    })
  }
</script>
