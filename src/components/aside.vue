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
          <div v-on:click="load('Home')"
            class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[2rem] w-full h-6 fill-current inline-block self-center" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.398 495.398" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path> <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path> </g> </g> </g> </g></svg>

            <div class="self-center items-center ml-[20px]  mx:inline hidden">Home</div>
          </div>
          <div v-on:click="load('Games')"
            class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[2rem] w-full h-6 fill-current inline-block self-center" fill="currentColor" viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z">
              </path>
            </svg>

            <div class="self-center items-center ml-[20px]  mx:inline hidden">Games</div>
          </div>
          <div v-on:click="load('Shop')"  class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle self-center w-full mx:w-[2rem]" 
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
              </path>
            </svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Shop</div>

          </div>
          <div  v-on:click="load('Inventory')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack self-center  w-full mx:w-[4rem]" 
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
              <polyline points="4 12 12 16 20 12"></polyline>
              <polyline points="4 16 12 20 20 16"></polyline>
            </svg>
            <div class="self-center items-center text-center ml-[20px] mx:inline hidden">Inventory</div>
          </div>
          <div  v-on:click="load('Stats')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid  self-center w-full mx:w-[2rem]"
              height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <rect x="4" y="4" width="6" height="6" rx="1"></rect>
              <rect x="14" y="4" width="6" height="6" rx="1"></rect>
              <rect x="4" y="14" width="6" height="6" rx="1"></rect>
              <rect x="14" y="14" width="6" height="6" rx="1"></rect>
            </svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Stats</div>
          </div>
          
          <div v-on:click="load('Profile')" id="Profile" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class=" self-center w-full mx:w-[2rem] h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Profile</div>
          </div>

        </div>

      </div>

    </div>
    
    

  </div>
</div>
</template>
