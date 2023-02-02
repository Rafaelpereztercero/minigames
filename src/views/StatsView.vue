<script setup>
import asideX from '../components/aside.vue'
import asideY from '../components/asideY.vue'
import footerX from '../components/footer.vue'
</script>

<template>

<div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Stats</p>

              </div>
              <div
                     class="grid mt-[10%] sm:mt-0  grid-cols-5 w-full col-start-2 col-end-[-2] sm:col-end-2 p-[2rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh] grid-rows-5">
              <div class="h-full row-start-1 col-start-1 col-end-3 row-end-3 w-full border-[1px] rounded bg-gray-200/10">
              </div> 
              <div class="h-full w-full row-start-1 row-end-3 col-start-4 col-end-6 border-[1px] rounded bg-gray-200/10">
              </div> <div class="h-full row-start-4 row-end-6 col-start-1 col-end-3 w-full border-[1px] rounded bg-gray-200/10">
              </div> <div class="h-full  row-start-4 row-end-6  col-start-4 col-end-6 w-full border-[1px] rounded bg-gray-200/10">
              </div>
        
              </div>
                         <footerX class="row-start-4 row-end-5"></footerX>

</div>
    
</template>