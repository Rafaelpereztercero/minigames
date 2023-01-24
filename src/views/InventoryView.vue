<script setup>
import asideX from '../components/aside.vue'
</script>

<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">
              </asideX>
              <div
                     class="mt-[10%] flex col-start-2 row-start-1 row-end-1 justify-center items-center rounded bg-blue-300 w-[85vw] h-[15vh]">
                     <p class="self-center text-[2rem]">Inventory</p>
              </div>
              <div
                     class="flex  flex-col col-start-2 col-end-2 row-start-2 row-end-2  items-center rounded bg-blue-900 w-[85vw] h-[70vh]">
                     <div class="flex flex-col w-[75%] justify-start p-[1rem]">
                            <div class="text-[1.2rem] self-end flex bg-white rounded p-[1rem] h-[3rem] justify-between"><div class="font-bold self-center text-center">1</div> <img class="w-[4rem] self-center" src="/star.png"></div>
                            <div class="flex flex-col text-[2rem] ">
                                   <p class="underline">Collection</p>
                                   <div id="card-container" class="flex flex-wrap ">
                                          <div
                                                 class=" flex flex-col p-[0.5rem] w-[7rem] h-[10rem] border-[solid] border-[2px] rounded-br-lg border-[black] bg-indigo-900">
                                                 <img class="rounded-br-lg justify-self-center bg-gray-900 h-[5rem] w-[100%] border-[black] border-[5px]"
                                                        src="/mario.png">
                                                 <div class="text-black text-[0.8rem] h-[1rem] mt-[0.3rem] flex items-center justify-center rounded bg-gray-400">Mario</div>
                                                 <div class="flex justify-between mt-[1rem]">
                                                        <div
                                                               class=" h-[2rem] w-[2rem] border-[solid] border-[2px] rounded-[100%] border-[black]">
                                                        </div>
                                                        
                                                        <div class="mt-[0.4rem]   grid grid-cols-[10px 40px 10px]">
                                                               
                                                               <div
                                                                      class="self-center col-start-1 col-end-1 row-start-2 row-end-2 mr-[0.2rem] h-[0.4rem] w-[0.8rem] border-[1px] bg-black">
                                                               </div>
                                                               <div
                                                                      class="self-center col-start-3 col-end-3 row-start-2 row-end-2  ml-[0.2rem] h-[0.4rem] w-[0.8rem] border-[1px] bg-black">
                                                               </div>
                                                               <div
                                                                      class="self-center col-start-2 col-end-2 row-start-1 row-end-1 mb-[0.2rem] h-[0.8rem] w-[0.4rem] border-[1px] bg-black">
                                                               </div>
                                                               <div
                                                                      class="self-center col-start-2 col-end-2 row-start-3 row-end-3 mt-[0.2rem] h-[0.8rem] w-[0.4rem] border-[1px] bg-black">
                                                               </div>

                                                        </div>

                                                 </div>

                                          </div>
 
  

                                          <div class="self-end cursor-pointer ml-[8rem] h-[4rem] w-[5rem] bg-gray-800 rounded grid grid-cols-[0.1fr 1fr 1fr] grid-rows-[1fr 1fr 1fr] border-[blue] border-[1px]">
                                                 <div class="justify-self-center bg-white rounded col-start-1 col-end-4 self-center row-start-1 row-end-3 h-[0.5rem] w-[3rem] border-[1px]"></div>
                                                 <div class="justify-self-center bg-white rounded col-start-1 col-end-4 self-center row-start-1 row-end-3 h-[3rem] w-[0.5rem] border-[1px]"></div>
                                                 
                                          </div>



                                   </div>
                            </div>
                     </div>
              </div>
       </div>

</template>