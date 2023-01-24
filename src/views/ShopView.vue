<script setup>
import asideX from "../components/aside.vue";
</script>

<template>
  <div class="grid grid-cols-8 grid-rows-[200px 300px]">
    <asideX class="row-start-1 row-end-3"> </asideX>

    <div
      class="mt-[10%] flex col-start-2 row-start-1 row-end-1 justify-center items-center rounded bg-gray-400 w-[85vw] h-[15vh]"
    >
      <p class="self-center text-[2rem]">Shop</p>
    </div>
    <div
      class="flex flex-col col-start-2 col-end-2 row-start-2 row-end-2 items-center rounded bg-gray-400 w-[85vw] h-[70vh]"
    >
      <div class="flex flex-col w-[75%] justify-start p-[1rem]">
        <div
          class="text-[1.2rem] self-end flex bg-white rounded p-[1rem] h-[3rem] justify-between"
        >
          <div class="font-bold self-center text-center">1</div>
          <img class="w-[4rem] self-center" src="/star.png" />
        </div>
        <div class="flex flex-row text-[2rem]">
          <!--  -->
          <div
            class="group h-[11rem] w-[8rem] [perspective:1000px]  rounded"
          >
            <div
              class="relative h-full w-full border-[violet] border-[2px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="/mario.png"
                  alt=""
                />
              </div>
              <div
                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div
                  class="flex min-h-full flex-col items-center justify-center"
                >
                  <h1 class="text-3xl font-bold">Mario</h1>
                  <p class="text-lg">Epic</p>
                  <button
                    class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="group h-[11rem] w-[8rem] [perspective:1000px] ml-[5rem] rounded"
          >
            <div
              class="relative h-full w-full border-[blue] border-[2px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="/mario.png"
                  alt=""
                />
              </div>
              <div
                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div
                  class="flex min-h-full flex-col items-center justify-center"
                >
                  <h1 class="text-3xl font-bold">Mario</h1>
                  <p class="text-lg">Rare</p>
                  <button
                    class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="group h-[11rem] w-[8rem] [perspective:1000px] ml-[5rem] rounded"
          >
            <div
              class="relative h-full w-full border-[green] border-[2px] rounded-xl shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="/mario.png"
                  alt=""
                />
              </div>
              <div
                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div
                  class="flex min-h-full flex-col items-center justify-center"
                >
                  <h1 class="text-3xl font-bold">Mario</h1>
                  <p class="text-lg">Common</p>
                  <button
                    class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>
