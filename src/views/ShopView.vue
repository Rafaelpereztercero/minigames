<script setup>
import asideX from '../components/aside.vue'
import asideY from '../components/asideY.vue'
import footerX from '../components/footer.vue'
import router from "../router";
</script> 
<script>
function  load(t) {
      router.push(t)
    }
export default {
  data() {
    return {
      users: [],
      nfts: []
    }
  },

  async created() {
    
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
  methods: {
    getColor(rarity) {
      if (document.getElementById("bColor").classList.contains('bg-blue-500/50')) {
        document.getElementById("bColor").classList.remove('bg-blue-500/50')

      }
      if (document.getElementById("bColor").classList.contains('bg-green-500/50')) {
        document.getElementById("bColor").classList.remove('bg-green-500/50')

      }
      if (
        document.getElementById("bColor").classList.contains('bg-violet-500/50')) {
        document.getElementById("bColor").classList.remove('bg-violet-500/50')
      }
      if (rarity == 'common') {

        return 'bg-green-500/50'
      }
      if (rarity == 'rare') {
        return 'bg-blue-500/50'
      }
      else {
        return 'bg-violet-500/50'
      }
    },
    async setRandom(param, nfts) {
      let x = 0
      let count = 0
      let who = 0
      document.getElementById("card").classList.add("translate-y-[-30px]")

      while (x < 30) {
        let random = Math.floor(Math.random() * nfts.length)

        x++
        count += 1
        let color = this.getColor(nfts[random].rarity)
        if (document.getElementById("card").classList.contains("translate-y-[30px]") && count == 1) {
          if (who == 0) {   document.getElementById("card").classList.remove("translate-y-[30px]")
        document.getElementById("card").classList.add("translate-y-[-30px]")
      who = 1
      }
        else {

          if (document.getElementById("card").classList.contains("translate-x-[30px]")) {
            document.getElementById("card").classList.remove("translate-x-[30px]")

          }
          document.getElementById("card").classList.add("translate-x-[-30px]")
          who = 0
        }
        
          count = 0
        }
        if (document.getElementById("card").classList.contains("translate-y-[-30px]") && count == 1) {
          if (who == 0) { document.getElementById("card").classList.remove("translate-y-[-30px]")
         
         document.getElementById("card").classList.add("translate-y-[30px]")
        who = 1
      }else {
          if (document.getElementById("card").classList.contains("translate-x-[-30px]")) {
            document.getElementById("card").classList.remove("translate-x-[-30px]")

          }
          document.getElementById("card").classList.add("translate-x-[30px]")
         who  = 0 
        }
          count = 0
        }

        document.getElementById("bColor").classList.add(color)
        document.getElementById("bName").innerHTML = nfts[random].name
        document.getElementById("bImg").src = nfts[random].photo
        await new Promise(r => setTimeout(r, 100));
      }
      
      if (document.getElementById("card").classList.contains("translate-x-[-30px]")) {
            document.getElementById("card").classList.remove("translate-x-[-30px]")

      }
      if (document.getElementById("card").classList.contains("translate-x-[30px]")) {
            document.getElementById("card").classList.remove("translate-x-[30px]")

      }
      if (document.getElementById("card").classList.contains("translate-y-[-30px]")) {
        document.getElementById("card").classList.remove("translate-y-[-30px]")

      }
      if (document.getElementById("card").classList.contains("translate-y-[30px]")) {
        document.getElementById("card").classList.remove("translate-y-[30px]")

      }
      document.getElementById("card").classList.add("translate-y-[-30px]")
      document.getElementById("cont").addEventListener("click", function () {
        document.getElementById("cont").classList.add("hidden")
      })
    },

    async patchUser(user) {
      console.log(user)
      const response = await fetch(`http://localhost:3000/players/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      return;
    },
   
    async buyRandom(param, nftsd) {
      let coin
      let rarity
      if (param == 0) {
        coin = 1
        rarity = "common"
      }
      if (param == 1) {
        coin = 5
        rarity = "rare"
      }
      if (param == 2) {
        coin = 20
        rarity = "epic"
      }
      if (param == 3) {
        coin = "7"
        rarity = ['rare', 'common', 'epic', 'common', 'common', 'rare']
        rarity = rarity[Math.floor(Math.random() * rarity.length)]
      }

      if (this.users.coins < coin) {
        alert('Not enough balance!')
      } else {
        let continueX = true
        let count = 0
        fetch("http://localhost:3000/nfts?rarity=" + rarity)
          .then(response => response.json())
          .then(async data => {
            while (continueX == true) {
              continueX = false
              if (count > data.length) {
                return
              }
              let j = Math.floor(Math.random() * data.length)

              for (let g = 0; g < this.users.nfts.length; g++) {
                if (this.users.nfts[g] == data[j].id) {

                  continueX = true

                }

              }
              if (continueX == false) {
                this.users.nfts.push(data[j].id)
                document.getElementById("cont").classList.remove("hidden")

                await this.setRandom(0, data)
                let color = this.getColor(data[j].rarity)
                document.getElementById("bColor").classList.add(color)
        document.getElementById("bName").innerHTML = data[j].name
        document.getElementById("bImg").src = data[j].photo
                this.users.coins = this.users.coins - coin
                this.patchUser(this.users)
              }
              count++



            }
          })

      }
    }

  }
}
</script>
<template>
   <div id="asideact" class="rounded sm:hidden content-center duration-[1000ms] fixed translate-x-[1000px] w-full z-50 h-full  p-[3rem] bg-white/20">
              <div class="flex rounded justify-center h-[100%] w-[100%] items-center">
                     <div class="bg-white rounded h-[100%] w-[100%] flex flex-col p-[0rem]">
                            <div class="flex bg-gray-900 w-[100%] p-[1rem] justify-between">

                            <div class="text-[1.7rem] text-white">MiniGames</div>
                            <button id="close" class="self-end w-[3rem] h-[3rem] rounded bg-red-600 text-white">X</button>
                     </div>
                 
                     <div class="bg-violet-300 h-full p-[0rem] w-full flex flex-col items-center mt-[0rem]">
                            <div class="bg-violet-400 w-full flex flex-col items-center">
                            <input type="text" class="rounded w-[70%] cursor-pointer mt-[1rem]">
                            <div class="bg-violet-400 h-[20%]  pb-[1rem] grid grid-cols-3 w-full mt-[2rem]">
                           
                                   <div v-on:click="load('Login')"
                class="text-[white] justify-self-center cursor-pointer hover:bg-gray-900 rounded w-[4rem] h-[2rem] text-center border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">
                Login</div>
                                   <img src="" class="border-[1px] justify-self-center w-[5rem] h-[5rem] rounded-full "/>
              <div v-on:click="load('Register')"
                class="text-[white] cursor-pointer justify-self-center  hover:bg-gray-900 rounded w-[4rem] h-[2rem] text-center border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">
                Register
              </div>
       </div>
      
                    </div>
                            <div  class="flex w-full flex-col  justify-between items-center h-[40%]  ">
                            <div v-on:click="load('Home')" class="bg-violet-300  cursor-pointer text-center hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Home</div>
                            <div v-on:click="load('Games')" class="bg-violet-300  cursor-pointer text-center  hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Games</div>
                            <div v-on:click="load('Shop')" class="bg-violet-300  cursor-pointer text-center   hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Shop</div>
                            <div v-on:click="load('Inventory')" class="bg-violet-300  cursor-pointer text-center   hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Inventory</div>
                            <div v-on:click="load('Stats')" class="bg-violet-300  cursor-pointer text-center   hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Stats</div>
                            <div v-on:click="load('Profile')" class="bg-violet-300  cursor-pointer text-center   hover:bg-violet-700 hover:text-white w-[100%] h-[3rem] duration-[1000ms] flex justify-center items-center ">Profile</div>




                            </div>
                     </div>
                     </div>
              </div>
       </div>
  <div id="cont" class="hidden z-50 h-full bg-gray-600/30 w-full absolute flex justify-center items-center">
    <div
      class="flex justify-center items-center  justify-self-center z-50 col-start-1 col-end-5 w-[50%] h-[25rem]  mt-[-50px] bg-gray-900">
      <div id="card" 
        class="card-select mr-[3rem] shadow-xl duration-[1000ms] cursor-pointer bg-gray-300/20 border-[1px] h-[17rem] w-[12rem] rounded-br-lg">

        <div class="pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] flex justify-center content-center w-[100%] h-[60%]">
          <img id="bImg" src="" class="border-[3px] object-cover w-[100%] h-[100%]" />
        </div>
        <div id="bName" class="w-[100%] text-center text-[2rem]"></div>
        <div class="flex justify-between pr-[1rem] pl-[1rem]">
          <div class="grid grid-cols-1">
            <div class="row-start-1 row-end-2 bg-gray-800 self-center col-start-1 rounded w-[2.3rem] h-[0.7rem]">
            </div>
            <div
              class="row-start-1 row-end-2 self-center bg-gray-800 col-start-1 rounded justify-self-center h-[2.3rem] w-[0.7rem]">
            </div>
          </div>
          <div id="bColor" class="h-[3rem] w-[3rem] border-[1px] bg-green-500/50 rounded-full">
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
      <p class="col-start-5 self-center text-[2.5rem] text-[white]">Shop</p>

    </div>
    <div
      class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[max-content] sm:h-[70vh]">
      <div class="flex flex-col w-[75%] justify-start p-[1rem] self-end">
        <div class="text-[1.2rem] self-end flex bg-gray-900 rounded p-[1rem] h-[3rem] justify-between">
          <div class="font-bold self-center text-center text-[white]">{{ this.users.coins }}</div>
          <img class="w-[4rem] self-center" src="/star.png" />
        </div>
      </div>


      <!--  -->
      <div class="sm:grid  w-[75%]   flex flex-col justify-center lg:grid-cols-4 sm:grid-cols-2 text-[2rem] items-center">
        <p class="sm:hidden mt-[2rem]"> Epic</p>
        <div class="group xl:h-[13rem] xl:w-[9.5rem] h-[11rem] w-[8rem] [perspective:1000px]  rounded">
          <div
            class="relative h-full w-full border-[violet] border-[2px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/mario.png" alt="" />
            </div>
            <div
              class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">Mario</h1>
                <p class="text-lg">Epic</p>
                <button v-on:click="buyRandom(2, this.nfts)"
                  class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="sm:hidden mt-[2rem]"> Rare</p>
        <div class="group xl:h-[13rem] xl:w-[9.5rem] h-[11rem] w-[8rem] [perspective:1000px]  rounded">
          <div
            class="relative h-full w-full border-[blue] border-[2px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/mario.png" alt="" />
            </div>
            <div
              class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">Mario</h1>
                <p class="text-lg">Rare</p>
                <button v-on:click="buyRandom(1, this.nfts)"
                  class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="sm:hidden mt-[2rem]">Common</p>
        <div class="group sm:mt-[3rem] lg:mt-[0] xl:h-[13rem] xl:w-[9.5rem] h-[11rem] w-[8rem] [perspective:1000px] rounded">
          <div
            class="relative h-full w-full border-[green] border-[2px] rounded-xl shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/mario.png" alt="" />
            </div>
            <div
              class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">Mario</h1>
                <p class="text-lg">Common</p>
                <button v-on:click="buyRandom(0, this.nfts)"
                  class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="sm:hidden mt-[2rem]"> Random</p>
        <div class="group  sm:mt-[3rem] lg:mt-[0] xl:h-[13rem] xl:w-[9.5rem] h-[11rem] w-[8rem] [perspective:1000px] rounded">
          <div
            class="relative h-full w-full  bg-black/90 border-[rgba(100 0 0)] border-[2px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="flex items-center justify-center inset-0">
              <p class="text-[5rem] text-white/50 text-center">?</p>
            </div>
            <div
              class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">?</h1>
                <p class="text-lg">Random</p>
                <button class="mt-1 hover:bg-sky-700 px-6 rounded-md bg-neutral-800 py-2 text-sm hover:bg-neutral-900">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        <!---->

      
      </div>
    </div>
    <footerX class="row-start-4 row-end-5"></footerX>

  </div>


</template>
