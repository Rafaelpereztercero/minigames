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
                     <p class="col-start-4 self-center text-[2.5rem] text-[white]">Stats</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 sm:w-[85vw] h-[70vh]">
                     </div>
                         <footerX class="row-start-4 row-end-5"></footerX>

</div>
    
</template>