<script>
import router from '../router'

export default {
  computed:{
     routeName(){
       return this.$route.name
    },
  },
  methods: {
    load(t) {
      router.push(t)
    }
  },
  screen: {
    'mz':'1280px',
  }

};


</script>

<template>

    <!-- PHONE BURGER  -->
 


  <!-- DESKTOP BURGER  -->
  <div class="hidden sm:inline"
  >
    
  <div class="hidden sm:inline w-full h-full flex flex-col ">
    <div class="flex flex-no-wrap">
      
      <div style="min-height: 95vh" 
        class="flex rounded-br-lg w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col  ">
        <div class="flex flex-col text-[1.2rem] text-blue-400 self-center font-bold">
          <img class="self-center w-[10rem]" src="/Gameboy.png" />
          <div class="flex flex-col mx:flex-row flex-wrap justify-center items-center mx:justify-between mx:items-between p-[0.4rem] text-[0.8rem] ">
            <div v-on:click="load('Login')" class="cursor-pointer hover:bg-gray-900 rounded w-[4rem] text-center border-solid border-white border-[3px] p-[0.2rem] bg-gry-300">Login</div>
            <div v-on:click="load('Register')" class="cursor-pointer mt-[1rem] mx:mt-[0] hover:bg-gray-900 rounded text-center w-[4rem] border-solid border-white border-[3px] p-[0.2rem] bg-gry-300">Register
            </div>
          </div>
        </div>
      
        <div class="flex flex-no-wrap flex-col justify-between h-[20rem] mt-[3rem]">
          <div v-on:click="load('Games')"
            class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-6 w-full h-6 fill-current inline-block self-center" fill="currentColor" viewBox="0 0 20 20" width="18"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z">
              </path>
            </svg>

            <div class="self-center items-center ml-[20px]  mx:inline hidden">Games</div>
          </div>
          <div v-on:click="load('Shop')"  class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justify-between w-[75%] text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle self-center w-full mx:w-[1rem]" 
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
              </path>
            </svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Shop</div>

          </div>
          <div  v-on:click="load('Inventory')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center justify-center mx:justify-between w-[75%] text-white flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack self-center w-full mx:w-[1rem]" 
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
              <polyline points="4 12 12 16 20 12"></polyline>
              <polyline points="4 16 12 20 20 16"></polyline>
            </svg>
            <div class="self-center items-center text-center ml-[20px] mx:inline hidden">Inventory</div>
          </div>
          <div  v-on:click="load('Stats')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer  justify-center mx:justify-between w-[75%] self-center text-white flex w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid self-center"
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <rect x="4" y="4" width="6" height="6" rx="1"></rect>
              <rect x="14" y="4" width="6" height="6" rx="1"></rect>
              <rect x="4" y="14" width="6" height="6" rx="1"></rect>
              <rect x="14" y="14" width="6" height="6" rx="1"></rect>
            </svg>
            <div class=" mx:inline hidden">Stats</div>
          </div>
          
          <div v-on:click="load('Profile')" id="Profile" class="hover:bg-gray-900  justify-center mx:justify-between w-[75%] rounded p-[1rem] cursor-pointer self-center text-white flex w-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
            <div class="self-center items-center text-center ml-[20px] mx:inline hidden">Profile</div>
          </div>

        </div>

      </div>

    </div>
    
    

  </div>
</div>
</template>
