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
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400  sm:w-[85vw] h-[70vh]">
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






                            </div>
                            <div class="self-end mt-[10rem] w-[1rem]">
                            <svg class="w-[100px] cursor-pointer border-[1px] rounded p-[1rem] col-start-3 mx:col-start-2 fill-current inline-block self-center" fill="#ffffff" version="1.1" id="XMLID_269_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="shop-cart"><g><circle cx="9" cy="21" r="2"></circle></g> <g><circle cx="19" cy="21" r="2"></circle></g> <g><path d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z"></path></g></g></g></svg>
                     </div>
                     </div>

              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>

</template>