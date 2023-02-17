<script setup>
import asideX from "../components/aside.vue"
import asideY from "../components/asideY.vue"

import router from '../router'
import footerX from '../components/footer.vue'


</script> 

<template>
       <div id="asideact" class="rounded sm:hidden content-center duration-[1000ms] fixed translate-x-[1000px] w-full z-50 h-full  p-[3rem] bg-white/20">
              <div class="flex rounded justify-center h-[100%] w-[100%] items-center">
                     <div class="bg-white rounded h-[100%] w-[100%] flex flex-col p-[0rem]">
                            <div class="flex bg-gray-900 w-[100%] p-[1rem] justify-between">

                            <div class="text-[1.7rem] text-white">MiniGames</div>
                            <button id="close" class="self-end w-[3rem] h-[3rem] rounded bg-red-600 text-white">X</button>
                     </div>
                     <div class="bg-violet-400 h-full p-[1rem]">
                            <input type="text" class="rounded w-[100%] cursor-pointer">
                            <div class="flex flex-col mt-[10%] justify-between items-center h-[40%] mt-[4rem] ">
                            <div class="bg-violet-300 rounded cursor-pointer text-center hover:h-[3rem] hover:w-[100%] hover:bg-violet-700 w-[70%] duration-[1000ms] flex justify-center items-center ">T1</div>
                            <div class="bg-violet-300 rounded cursor-pointer text-center hover:h-[3rem] hover:w-[100%] hover:bg-violet-700 w-[70%] duration-[1000ms] flex justify-center items-center ">T1</div>
                            <div class="bg-violet-300 rounded cursor-pointer text-center hover:h-[3rem] hover:w-[100%] hover:bg-violet-700 w-[70%] duration-[1000ms] flex justify-center items-center ">T1</div>
                            <div class="bg-violet-300 rounded cursor-pointer text-center hover:h-[3rem] hover:w-[100%] hover:bg-violet-700 w-[70%] duration-[1000ms] flex justify-center items-center ">T1</div>



                            </div>
                     </div>
                     </div>
              </div>
       </div>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY id="asidey" class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Home</p>
                     


              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  w-full col-start-2 col-end-[-2] sm:col-end-2 p-[0] sm:p-[4rem]  row-start-2 row-end-2   rounded bg-gradient-to-b from-fuchsia-400  sm:w-[85vw] min-h-fit mg:h-[70vh] justify-center">
              <div class="grid mg:grid-cols-2  grid-cols-1 row-start-1 row-end-3 mg:grid-rows-6 w-[100%] mx:h-[30rem] mg:w-[80%] rounded bg-gray-300/10 p-[0rem]">
                     <div class="mx:mt-[1rem] flex flex-col mx:justify-self-center grid-cols-2 col-start-1 p-[3rem]">
                     <p class=" mx:text-[2.5rem] text-[2rem] font-bold">Minigames</p>
                     <p class=" mx:text-[1.4rem] mt-[1rem]">In this website you'll be able to play some traditional games who's avarage duration does not reach 5 mins so you will have fun on your break times!</p>
                     <button class="  mx:hidden transition ease-in-out delay-150 duration-200 hover:text-[black] hover:bg-gradient-to-r from-fuchsia-500 via-violet-400 to-sky-500 mt-[1rem] border-[1px] p-[1rem] rounded">Play Now!</button>

              </div>
              <div class="flex flex-col items-center p-[2rem] mt-[-4rem] sm:mt-0 ">
                     <p class=" text-[2rem] font-bold">Top Played</p>
                     <div class="w-[13rem] h-[16rem] border-[1px] flex flex-col items-center bg-gray-400/30 rounded  p-[1rem]">
                     <div class=" col-start-3 row-start-1 self-center ">
                            <div id="carouselExampleControls" class="rounded carousel slide h-[max-content] w-full  border-[6px] flex justify-center items-center border-[black]  "
                                   data-bs-ride="carousel">
                                   <div class="object-cover carousel-inner realtive h-full w-full overflow-hidden ">
                                          <div id="first" class="carousel-item active relative float-left w-full">
                                                 <img alt="1" src="/mario.png" class="h-full w-full object-cover"  />
                                          </div>
                                          <div id="second" class="carousel-item relative float-left w-full">
                                                 <img alt="2" src="/mario.png" class=" w-full h-full object-cover"  />
                                          </div>
                                          <div id="third" class="carousel-item relative float-left w-full">
                                                 <img  alt="3" src="/mario.png" class="h-full w-full object-cover" />
                                          </div>
                                   </div>
                                 
                            </div>
                            <div class="text-center bg-gray-300 p-[0.6rem] mt-[0.5rem] rounded">
                                   MiniGames
                            </div>
                            <div class="flex justify-between  p-[1rem]">
                     <button class="bg-red-600 font-bold p-[1rem] h-[3rem] w-[3rem] flex items-center justify-center rounded-full border-[1px]"
                                          type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                          A
                                         
                                   </button>
                                   <button class="bg-red-600 font-bold p-[1rem] h-[3rem] flex items-center justify-center w-[3rem] rounded-full border-[1px]"
                                          type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                          B
                                         
                                   </button>
                            </div>
                     </div>
                    
                    </div>
              </div>
              <div class="hidden mx:inline col-start-1 col-end-[3] row-start-5 row-end-7  mb-[2rem] h-full w-full p-[3rem]">
              <button class="  h-full w-full transition ease-in-out delay-150 duration-200 hover:text-[black] hover:bg-gradient-to-r from-fuchsia-500  justify-self-center via-violet-400 to-sky-500 mt-[1rem] border-[1px] p-[1rem] rounded">Play Now!</button>
       </div>
           
              </div>
              
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>


</template>