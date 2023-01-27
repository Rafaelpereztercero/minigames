<script setup>
import asideX from '../components/aside.vue'
</script>

<template>
   <div class="grid grid-cols-8 grid-rows-[200px 300px]">
  <asideX class="row-start-1 row-end-3">
   
  </asideX>

  <div class="mt-[10%] flex col-start-2 row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 w-[85vw] h-[15vh]">
         <p class="self-center text-[2rem] text-[white]">Register</p>
        
  </div>
  <div
                     class="flex  flex-col self-center col-start-2 col-end-3 row-start-2 row-end-2 justify-around p-[4rem] items-center rounded bg-gray-700 w-[85vw] h-[70vh]">

                     <form class="border-[1px] flex flex-col justify-around align-between text-[white] rounded h-full w-full ">
                            <label class="flex w-full justify-around" for="mail">Mail
                                   <input class="rounded" type="mail" id="mail">
                            </label>
                            <label class="flex w-full justify-around" for="mail">Username
                                   <input  class="rounded" type="text" id="username">
                            </label>
                            <label class="flex w-full justify-around" for="password">Password
                                   <input class="rounded" type="password" id="password">
                            </label>
                            <button  class=" cursor-pointer hover:text-black transition duration-800 ease-in-out hover:bg-white rounded w-[75%] self-center h-[2.5rem] bg-gray-900 text-[white]">Register</button>
                     </form>
              </div>
  </div>
    
</template>