<script setup>
import asideX from '../components/aside.vue'
</script>

<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] flex col-start-2  row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 w-[85vw] h-[15vh]">
                     <p class="self-center text-[2rem] text-[white]">Games</p>

              </div>
              <div
                     class="flex  flex-col col-start-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 w-[85vw] h-[70vh]">
                    <div class="text-[white]">THIS IS A TEST</div>
                     <div class="h-[40%] w-[40%] mt-[4rem]">
                     <div id="carouselExampleControls" class="carousel slide relative " data-bs-ride="carousel">
                            <div class="carousel-inner relative w-full overflow-hidden">
                                   <div class="carousel-item active relative float-left w-full">
                                          <img src="/mario.png"
                                                 class="block w-full" alt="Wild Landscape" />
                                   </div>
                                   <div class="carousel-item relative float-left w-full">
                                          <img src="/mario.png"
                                                 class="block w-full" alt="Camera" />
                                   </div>
                                   <div class="carousel-item relative float-left w-full">
                                          <img src="/mario.png"
                                                 class="block w-full" alt="Exotic Fruits" />
                                   </div>
                            </div>
                            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                   type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                   <span class="carousel-control-prev-icon inline-block bg-no-repeat"
                                          aria-hidden="true"></span>
                                   <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                   type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                   <span class="carousel-control-next-icon inline-block bg-no-repeat"
                                          aria-hidden="true"></span>
                                   <span class="visually-hidden">Next</span>
                            </button>
                     </div>
              </div>
              </div>
       </div>


</template>