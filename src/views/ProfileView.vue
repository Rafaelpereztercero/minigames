<script setup>
import asideX from '../components/aside.vue'
</script>

<template>
  <div class="grid grid-cols-8 grid-rows-[200px 300px]">
    <asideX class="row-start-1 row-end-3">

    </asideX>

    <div
      class="mt-[10%] flex col-start-2 row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 w-[85vw] h-[15vh]">
      <p class="self-center text-[white] text-[2rem]">Profile</p>

    </div>
    <div
      class="flex  flex-col col-start-2 col-end-2 row-start-2 row-end-2 justify-around items-center rounded bg-gray-700 w-[85vw] h-[70vh]">
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
  </div>
</template>