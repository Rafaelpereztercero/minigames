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
            <div v-on:click="load('Login')" class="text-[white] cursor-pointer hover:bg-gray-900 rounded w-[4rem] text-center border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">Login</div>
            <div v-on:click="load('Register')" class="text-[white] cursor-pointer mt-[1rem] mx:mt-[0] hover:bg-gray-900 rounded text-center w-[4rem] border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">Register
            </div>
          </div>
        </div>
      
        <div class="flex flex-no-wrap flex-col justify-between h-[20rem] mt-[1rem]">
          <div v-on:click="load('Home')"
            class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.398 495.398" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path> <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path> </g> </g> </g> </g></svg>

            <div class="self-center items-center ml-[20px]  mx:inline hidden">Home</div>
          </div>
          <div v-on:click="load('Games')"
            class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9,21a1,1,0,0,0,1-1V19a2,2,0,0,1,4,0v.78A1.223,1.223,0,0,0,15.228,21,7.7,7.7,0,0,0,23,13.73,7.5,7.5,0,0,0,15.5,6H13V4a1,1,0,0,0-2,0V6H8.772A7.7,7.7,0,0,0,1,13.27a7.447,7.447,0,0,0,2.114,5.453A7.81,7.81,0,0,0,9,21ZM8.772,8H15.5A5.5,5.5,0,0,1,21,13.67a5.643,5.643,0,0,1-5,5.279,4,4,0,0,0-8,.029A5.5,5.5,0,0,1,3,13.33,5.684,5.684,0,0,1,8.772,8ZM5,12.5a1,1,0,0,1,1-1H7v-1a1,1,0,0,1,2,0v1h1a1,1,0,0,1,0,2H9v1a1,1,0,0,1-2,0v-1H6A1,1,0,0,1,5,12.5ZM17,11a1,1,0,1,1,1,1A1,1,0,0,1,17,11Zm-2,3a1,1,0,1,1,1,1A1,1,0,0,1,15,14Z"></path></g></svg>

            <div class="self-center items-center ml-[20px]  mx:inline hidden">Games</div>
          </div>
          <div v-on:click="load('Shop')"  class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" fill="#ffffff" height="200px" width="200px" version="1.1" id="XMLID_269_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="shop-cart"> <g> <circle cx="9" cy="21" r="2"></circle> </g> <g> <circle cx="19" cy="21" r="2"></circle> </g> <g> <path d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z"></path> </g> </g> </g></svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Shop</div>

          </div>
          <div  v-on:click="load('Inventory')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg  class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" fill="#000000" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-bag-personal"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17 15H9V17H7V15H5V19H17V15M17 9H16V8H15V7H7V8H6V9H5V13H17V9M13 11H9V10H10V9H12V10H13V11M3 8H4V6H6V5H7V2H8V1H14V2H15V5H16V6H18V8H19V20H18V21H4V20H3V8M9 3V5H13V3H9Z"></path></g></svg>
            <div class="self-center items-center text-center ml-[20px] mx:inline hidden">Inventory</div>
          </div>
          <div  v-on:click="load('Stats')" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_1558)"> <path d="M29 7H30C30.553 7 31 7.447 31 8V30C31 30.553 30.553 31 30 31H2C1.447 31 1 30.553 1 30V8C1 7.447 1.447 7 2 7H19M6 28V19H10V28M14 28V13H18V28M22 28V1H26V28" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_1558"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>
            <div class="self-center items-center ml-[20px]  mx:inline hidden">Stats</div>
          </div>
          
          <div v-on:click="load('Profile')" id="Profile" class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white flex items-center ">
            <svg class="mx:w-[20px] w-full h-6 fill-current inline-block self-center" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z"></path></g></svg>            <div class="self-center items-center ml-[20px]  mx:inline hidden">Profile</div>
          </div>

        </div>
        <div class="mt-[1rem] h-[12rem] mx:h-[6rem] w-[60%] bg-gray-700 self-center rounded mx:grid mx:grid-cols-3 flex flex-col p-[1rem]">
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
