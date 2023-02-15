<script setup>
import asideX from "../components/aside.vue";
import footerX from "../components/footer.vue";
import asideY from "../components/asideY.vue";
</script>
<script>
export default {
       data() {
              return {
                     users: [],
                     nfts: [],
              };
       },

       methods: {
              display(param, name) {
                     document.getElementById(name).addEventListener("click", function () {
                            if (document.getElementById(param).classList.contains("hidden")) {
                                   document.getElementById(param).classList.remove("hidden");
                            } else {
                                   document.getElementById(param).classList.add("hidden");
                            }
                     });
              },

              async patchUser(user) {
                     console.log(user);
                     const response = await fetch(`http://localhost:3000/players/${user.id}`, {
                            method: "PATCH",
                            headers: {
                                   "Content-type": "application/json",
                            },
                            body: JSON.stringify(user),
                     });
                     return;
              },
              sell(nft, users) {
                     for (let x = 0; x < users.nfts.length; x++) {
                            if (parseInt(nft.id) === parseInt(users.nfts[x])) {
                                   let temp = [];
                                   for (let k = 0; k < users.nfts.length; k++) {
                                          if (k != x) {
                                                 temp.push(users.nfts[k]);
                                          }
                                   }
                                   users.nfts = temp;
                                   users.coins = users.coins + nft.value;
                                   this.patchUser(users);
                                   document.getElementById(nft.name).classList.add("hidden");
                            }
                     }
              },
       },
       async mounted() {
              if (document.cookie == "") {
                     return (this.users = []);
              }
              await fetch(
                     "http://localhost:3000/players?cookie=" +
                     document.cookie.substring(5, document.cookie.length)
              )
                     .then((response) => response.json())
                     .then((data) => {
                            let x = 0;
                            if (data[x]) {
                                   this.users = data[x];
                            }
                     });

              for (let c = 0; c < this.users.nfts.length; c++) {
                     await fetch("http://localhost:3000/nfts/" + this.users.nfts[c])
                            .then((response2) => response2.json())
                            .then((data2) => {
                                   this.nfts.push(data2);
                            });
              }
       },
};
</script>
<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3"> </asideX>
              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-4 self-center text-[2.5rem] text-[white]">
                            Inventory
                     </p>
              </div>
              <div
                     class="flex mt-[10%] sm:mt-0 flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem] row-start-2 row-end-2 items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh]">
                     <div class="flex flex-row w-[75%] justify-end w-[100%] p-[1rem] self-end">
                            <!-- <p class="ml-[2rem] text-[2rem] text-[white] text-[]">Collection</p> -->

                            <div
                                   class="text-[1.2rem] self-end flex bg-gray-900 rounded p-[1rem] h-[3rem] justify-between">
                                   <div class="font-bold self-center text-center text-[white]">
                                          {{ this.users.coins }}
                                   </div>
                                   <img class="w-[4rem] self-center" src="/star.png" />
                            </div>
                     </div>
                     <div class="flex w-[75%] flex-col text-[2rem] text-[white]">
                            <div id="card-container" class="h-[20rem] flex flex-wrap">
                                   <div :id="nft.name" v-for="(nft, index) in nfts"
                                          v-on:click="display(index, nft.name)"
                                          class="card-select mr-[3rem] shadow-xl hover:translate-y-[-30px] duration-[1000ms] cursor-pointer bg-gray-300/20 border-[1px] h-[17rem] w-[12rem] rounded-br-lg">
                                          <div :id="index"
                                                 class="hidden absolute w-[12rem] h-[17rem] flex justify-around items-center bg-green-400 p-[1rem] pt-[4rem] pb-[4rem] flex-col text-[1.6rem]">
                                                 Item cost {{ nft.value }}
                                                 <button v-on:click="sell(nft, this.users)"
                                                        class="p-[0.5rem] rounded text-white bg-red-500">
                                                        Sell
                                                 </button>
                                          </div>
                                          <div
                                                 class="pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] flex justify-center content-center w-[100%] h-[60%]">
                                                 <img :src="nft.photo"
                                                        class="border-[3px] object-cover w-[100%] h-[100%]" />
                                          </div>
                                          <div class="w-[100%] text-center text-[2rem]">{{ nft.name }}</div>
                                          <div class="flex justify-between pr-[1rem] pl-[1rem]">
                                                 <div class="grid grid-cols-1">
                                                        <div
                                                               class="row-start-1 row-end-2 bg-gray-800 self-center col-start-1 rounded w-[2.3rem] h-[0.7rem]">
                                                        </div>
                                                        <div
                                                               class="row-start-1 row-end-2 self-center bg-gray-800 col-start-1 rounded justify-self-center h-[2.3rem] w-[0.7rem]">
                                                        </div>
                                                 </div>
                                                 <div v-if="nft.rarity == 'common'"
                                                        class="h-[3rem] w-[3rem] border-[1px] bg-green-500/50 rounded-full">
                                                 </div>
                                                 <div v-if="nft.rarity == 'rare'"
                                                        class="h-[3rem] w-[3rem] border-[1px] bg-blue-500/50 rounded-full">
                                                 </div>

                                                 <div v-if="nft.rarity == 'epic'"
                                                        class="h-[3rem] w-[3rem] border-[1px] bg-violet-500/50 rounded-full">
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div class="self-end w-[1rem]">
                                   <svg class="w-[100px] cursor-pointer border-[1px] rounded p-[1rem] col-start-3 mx:col-start-2 fill-current inline-block self-center"
                                          fill="#ffffff" version="1.1" id="XMLID_269_"
                                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                          viewBox="0 0 24 24" xml:space="preserve">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                          </g>
                                          <g id="SVGRepo_iconCarrier">
                                                 <g id="shop-cart">
                                                        <g>
                                                               <circle cx="9" cy="21" r="2"></circle>
                                                        </g>
                                                        <g>
                                                               <circle cx="19" cy="21" r="2"></circle>
                                                        </g>
                                                        <g>
                                                               <path
                                                                      d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z">
                                                               </path>
                                                        </g>
                                                 </g>
                                          </g>
                                   </svg>
                            </div>
                     </div>
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>
</template>
