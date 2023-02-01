<script setup>
import asideX from "../components/aside.vue"
import asideY from "../components/asideY.vue"

import router from '../router'
import footerX from '../components/footer.vue'

</script> 

<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Home</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  w-full col-start-2 col-end-[-2] sm:col-end-2 p-[4rem]  row-start-2 row-end-2   rounded bg-gray-700 sm:w-[85vw] h-[70vh] justify-center">
              <div class="grid grid-cols-4  w-[80%] rounded bg-gradient-to-l from-sky-400 via-slate-900 to-black">
                     <div class="col-start-1 col-end-4 self-center border-[1px] flex flex-col p-[1rem]">
                     
                     <h2 class="text-[white] self-center font-[retro]">Mini Games</h2>
                     <p class="text-[1rem] w-[50%] self-center text-[white] mt-[1rem]">In this website you'll be able to play some traditional games who's avarage duration does not reach 5 mins so you will have fun on your break times!</p>
                     <div class="h-[auto] p-[1rem] mt-[2rem] self-center  rounded w-[12rem] border-[1px] bg-gradient-to-l from-sky-400 via-slate-900 to-black text-[white] text-center">Join Us!</div>
              </div>
                  <div class="w-full h-full col-start-4 border-[1px] rounded-r-lg flex justify-center  self-center">
                     <div class="w-[66%] h-[66%] grid-cols-1 border-[2px] border-[black] rounded self-center rounded grid">
                            <div class="row-start-1 col-start-1 col-end-2 flex justify-center">
                            <img  class= "w-[10rem] self-center" src="/mar_px.png"/>
                     </div>
                            <p class="row-start-1 col-start-1 text-[black] font-bold text-[1rem] self-end text-center bg-gradient-to-bl from-violet-800 via-cyan-400 to-indigo-200 p-[0.5rem] rounded-[12px, 10px]">Mini Games</p>
                     </div>
                     <p>Test</p>
                  </div>
               

              </div>
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>


</template>