<script setup>
import asideX from '../components/aside.vue'
import asideY from '../components/asideY.vue'
import footerX from '../components/footer.vue'
</script>
<script>
export default {
       data() {
              return {
                     users: [],
                     stats:[]
              }
       },
       created() {
              if (document.cookie == "") {
                     return this.users = []
              }

              fetch("http://localhost:3000/players")
                     .then(response => response.json())
                     .then(data => {

                            for (let x = 0; x < data.length; x++) {
                                   if (document.cookie == ("auth=" + data[x].cookie)) {

                                           this.users = data[x]
                                           fetch("http://localhost:3000/stats/"+this.users.name) 
                            .then(response => response.json())
                            
                            .then(data => this.stats = data)
                                   }
                            }
                           


                     })
              

       },

       methods: {

       }
}
</script>
<template>

       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Stats</p>

              </div>
              <div
                     class="grid mt-[10%] sm:mt-0  grid-cols-5 w-full col-start-2 col-end-[-2] sm:col-end-2 p-[2rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh] grid-rows-5">
                     <img class="col-start-1 col-end-6  bg-gray-400/20 justify-self-center object-cover h-[8rem] w-[8rem] border-[5px] flex justify-center items-center rounded-full  overflow-hidden"
                            :src=this.users.photo>

                     <div
                            class="grid grid-cols-3 h-full justify-self-center row-start-1 col-start-1 col-end-3 row-end-3 w-[80%] border-[1px] rounded bg-gray-200/10">
                            <div class="justify-self-center self-center col-start-1 w-[5rem] h-[5rem] border-[1px]">

                            </div>
                            <div
                                   class="justify-self-center col-start-2 col-end-4 flex flex-col justify-around  h-[100%]">
                                   <p class="text-[2rem] font-bold w-[100%]">Coins</p>
                                   <p class="self-center text-[2rem] font-bold ">{{ this.users.coins }}</p>
                            </div>
                     </div>
                     <div
                            class="grid grid-cols-3 h-full w-[80%] justify-self-center row-start-1 row-end-3 col-start-4 col-end-6 border-[1px] rounded bg-gray-200/10">
                            <div class="justify-self-center self-center col-start-1 w-[5rem] h-[5rem] border-[1px]">

                            </div>
                            <div
                                   class="justify-self-center col-start-2 col-end-4 flex flex-col justify-around  h-[100%]">
                                   <p class="text-[2rem] font-bold w-[100%]">Points</p>
                                   <p class="self-center text-[2rem] font-bold ">{{ this.users.points }}</p>
                            </div>
                     </div>
                     <div
                            class="grid grid-cols-3 h-full row-start-4 justify-self-center row-end-6 col-start-1 col-end-3 w-[80%] border-[1px] rounded bg-gray-200/10">
                            <div class="justify-self-center self-center col-start-1 w-[5rem] h-[5rem] border-[1px]">

                            </div>
                            <div
                                   class="justify-self-center col-start-2 col-end-4 flex flex-col justify-around  h-[100%]">
                                   <p class="text-[2rem] font-bold w-[100%]">Most played</p>
                                   <p class="self-center text-[2rem] font-bold ">{{ this.stats.most_played }}</p>
                            </div>
                     </div>
                     <div
                            class="grid grid-cols-3 h-full  row-start-4 row-end-6 justify-self-center  col-start-4 col-end-6 w-[80%] border-[1px] rounded bg-gray-200/10">
                            <div class="justify-self-center self-center col-start-1 w-[5rem] h-[5rem] border-[1px]">

                            </div>
                            <div
                                   class="justify-self-center col-start-2 col-end-4 flex flex-col justify-around  h-[100%]">
                                   <p class="text-[2rem] font-bold w-[100%]">Games Played</p>
                                   <p class="self-center text-[2rem] font-bold ">{{ this.stats.games }}</p>
                            </div>
                     </div>

              </div>
              <footerX class="row-start-4 row-end-5"></footerX>

       </div>

</template>