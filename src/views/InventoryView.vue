<script setup>
import asideX from '../components/aside.vue'
import footerX from '../components/footer.vue'
import asideY from '../components/asideY.vue'


</script>

<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">
              </asideX>
              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-4 self-center text-[2.5rem] text-[white]">Inventory</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 sm:w-[85vw] h-[70vh]">
                     <div class="flex flex-row w-[75%] justify-end w-[100%]  p-[1rem] self-end">
                            <!-- <p class="ml-[2rem] text-[2rem] text-[white] text-[]">Collection</p> -->

                            <div
                                   class="text-[1.2rem] self-end flex bg-gray-900 rounded p-[1rem] h-[3rem] justify-between">
                                   <div class="font-bold self-center text-center text-[white]">1</div>
                                   <img class="w-[4rem] self-center" src="/star.png" />
                            </div>
                     </div>
                     <div class="flex w-[75%] flex-col text-[2rem] text-[white] ">
                           
                            <div id="card-container" class="flex flex-wrap ">
                                   <div
                                          class=" flex flex-col p-[0.5rem] w-[7rem] h-[10rem] border-[solid] border-[2px] rounded-br-lg border-[black] bg-indigo-900">
                                          <img class="rounded-br-lg justify-self-center bg-gray-900 h-[5rem] w-[100%] border-[black] border-[5px]"
                                                 src="/mario.png">
                                          <div
                                                 class="text-black text-[0.8rem] h-[1rem] mt-[0.3rem] flex items-center justify-center rounded bg-gray-400">
                                                 Mario</div>
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



                                   <div
                                          class="self-end cursor-pointer ml-[8rem] h-[4rem] w-[5rem] bg-gray-800 rounded grid grid-cols-[0.1fr 1fr 1fr] grid-rows-[1fr 1fr 1fr] border-[blue] border-[1px]">
                                          <div
                                                 class="justify-self-center bg-white rounded col-start-1 col-end-4 self-center row-start-1 row-end-3 h-[0.5rem] w-[3rem] border-[1px]">
                                          </div>
                                          <div
                                                 class="justify-self-center bg-white rounded col-start-1 col-end-4 self-center row-start-1 row-end-3 h-[3rem] w-[0.5rem] border-[1px]">
                                          </div>

                                   </div>



                            </div>
                     </div>

              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>

</template>