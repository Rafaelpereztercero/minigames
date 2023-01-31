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
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Profile</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 sm:w-[85vw] h-[70vh]">
      <div class="flex w-[75%] justify-around">

        <div class="flex flex-col items-center">
          <p class="text-[1.5rem] text-[white] underline">Image</p><img
            class="rounded p-[1rem] border-solid h-[100px] w-[100px] border-[4px] border-black flex-col bg-blue-500"
            src="/Gameboy.png">
        </div>
        <div class="flex items-center flex-col text-[white]">
          <p class="text-[1.5rem] underline">Username</p>
          <p class="text-[2rem] font-bold flex ">Rafa380</p>
        </div>
      </div>
      <div class="grid grid-cols-4 w-[75%] items-center justify-between h-[20%] text-[white]">
        <p class="text-[1.9rem] self-end col-start-1 col-end-3 text-center">Mail</p>
        <div
          class="col-start-3 bg-gray-800 min-w-[max-content] max-w-[10rem] flex p-[0.5rem] text-white rounded items-center justify-center">
          rperezter@gmail.com</div>
        <p class="text-[1.9rem] self-end col-start-1 col-end-3 text-center">Password</p>
        <div
          class="col-start-3 bg-gray-800 min-w-[max-content] max-w-[10rem] flex p-[0.5rem] text-white rounded items-center justify-center">
          *********</div>
      </div>
    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>