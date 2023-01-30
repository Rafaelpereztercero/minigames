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
      
        <div class="flex flex-no-wrap flex-col justify-between h-[20rem] mt-[1rem]">
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
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack self-center  w-full mx:w-[5rem]" 
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
        <div class="mt-[1rem] h-[12rem] mx:h-[8rem] w-[60%] bg-gray-700 self-center rounded mx:grid mx:grid-cols-3 flex flex-col p-[1.8rem]">
          <div  class="self-center">
          <svg fill="#ffffff" class="self-center w-[1.5rem] rounded" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path> </g></svg>
        </div>
        <div class="self-center col-start-3  mt-[1rem] mx:mt-0">
          <svg fill="#ffffff"  class="self-center w-[1.5rem] rounded" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path> <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon> <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path> <path d="M-143,145v512h512V145H-143z M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3 c0-27.3,22.2-49.5,49.5-49.5h157c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path> </g> </g></svg>
        </div>
        <div  class="self-center col-start-1 row-start-2 ">

          <svg fill="#ffffff"  class="self-center w-[1.5rem] mt-[1rem] rounded" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-143,145v512h512V145H-143z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7 c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path> </g></svg>
        </div>
        <div  class="self-center col-start-3 row-start-2">

          <svg fill="#ffffff" class="self-center w-[1.5rem] mt-[1rem]  rounded" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon> <path d="M-143,145v512h512V145H-143z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5 c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z"></path> </g> </g></svg>
        </div>
        </div>
      </div>
      

    </div>
    
    

  </div>
</div>
</template>
