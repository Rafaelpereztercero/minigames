<script setup>
import asideX from "../components/aside.vue";
import asideY from "../components/asideY.vue";
import footerX from "../components/footer.vue";
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
      stats: [],
    };
  },
  created() {
    if (document.cookie == "") {
      return (this.users = []);
    }

    fetch(
      "http://localhost:3000/players?cookie=" +
        document.cookie.substring(5, document.cookie.length)
    )
      .then((response) => response.json())
      .then((data) => {
        let x = 0;
        if (data[x]) {
          this.users = data[x];
          fetch(`http://localhost:3000/stats?user=${data[x].name}`)
            .then((response2) => response2.json())
            .then((data2) => {
              let x = 0;
              if (data2[x]) {
                console.log(data2[x]);
                
                (this.stats = data2[x]);
                return this.load(this.users)
              }
            });
        }
      });
  },

  
  

  methods: {
    load(user) {
    document.getElementById("nft").addEventListener(
      "click",
      function () {
        let bg = "bg-blue-500";
        let bg2 = "bg-white/60"

        if (document.getElementById("nft").classList.contains(bg2)){
          document.getElementById("nft").classList.remove(bg2);
        }
        document.getElementById("nft").classList.add(bg);

        if (document.getElementById("coin").classList.contains(bg)) {
          document.getElementById("coin").classList.remove(bg);
        }
        if (document.getElementById("game").classList.contains(bg)) {
          document.getElementById("game").classList.remove(bg);
        }

        document.getElementById("content").innerHTML = `
<div
                            class=" justify-self-center bg-white/60  w-[30rem] h-[12rem] rounded grid grid-cols-3 p-[1rem] content-center items-center border-[1px]">
                            <div class="h-[8.5rem] w-[8.5rem] rounded-full border-[1px]">
                                   <img class="object-cover h-full w-full border-[2px] flex justify-center items-center rounded-full  overflow-hidden"
                                          src="${user.photo}">

                            </div>
                            <p class="text-center col-start-2 col-end-4 text-[3rem] font-bold">TOP 20%</p>
                     </div>
                     <div class="self-center   align-self-center">
                            <p class="text-center text-[2rem]">NFTS</p>
                            <div
                                   class="self-center  align-self-center  h-[12rem] w-[12rem] rounded-[100%] overflow-hidden grid ">
                                   <div id="test"
                                          class="flex col-start-1 row-start-1 justify-self-start align-self-center  items-center justify-center h-full w-full  bg-white transition-width duration-[5000ms] ease">
                                   </div>
                                   <div
                                          class="h-[90%] rounded-full col-start-1 row-start-1 justify-self-center align-self-center w-[90%] bg-black text-white  items-center flex jsutify-center">
                                          <p
                                                 class="text-[3rem] font-bold self-center text-center w-[100%]">
                                                 2/10</p>
                                   </div>
                            </div>
                     </div>
`


;
        setTimeout(function () {
          document.getElementById("test").classList.add("w-[20%]");
        });
      },
      3000
    );

    document.getElementById("coin").addEventListener(
      "click",
      function () {
        let bg = "bg-blue-500";
        let bg2 = "bg-white/60"

        if (document.getElementById("coin").classList.contains(bg2)){
          document.getElementById("coin").classList.remove(bg2);
        }
        document.getElementById("coin").classList.add(bg);

        if (document.getElementById("nft").classList.contains(bg)) {
          document.getElementById("nft").classList.remove(bg);
        }
        if (document.getElementById("game").classList.contains(bg)) {
          document.getElementById("game").classList.remove(bg);
        }

        document.getElementById("content").innerHTML = `
<div
                            class=" justify-self-center bg-white/60  w-[30rem] h-[12rem] rounded grid grid-cols-3 p-[1rem] content-center items-center border-[1px]">
                            <div class="h-[8.5rem] w-[8.5rem] rounded-full border-[1px]">
                                   <img class="object-cover h-full w-full border-[2px] flex justify-center items-center rounded-full  overflow-hidden"
                                          src="${user.photo}">

                            </div>
                            <p class="text-center col-start-2 col-end-4 text-[3rem] font-bold">TOP 20%</p>
                     </div>
                     <div class="self-center   align-self-center">
                            <p class="text-center text-[2rem]">COIN X GAME</p>
                            <div
                                   class="self-center  align-self-center  h-[12rem] w-[12rem] rounded-[100%] overflow-hidden grid ">
                                   <div id="test"
                                          class="flex col-start-1 row-start-1 justify-self-start align-self-center  items-center justify-center h-full w-full  bg-white transition-width duration-[5000ms] ease">
                                   </div>
                                   <div
                                          class="h-[90%] rounded-full col-start-1 row-start-1 justify-self-center align-self-center w-[90%] bg-black text-white  items-center flex jsutify-center">
                                          <p
                                                 class="text-[3rem] font-bold self-center text-center w-[100%]">
                                                 2/10</p>
                                   </div>
                            </div>
                     </div>
`


;
        setTimeout(function () {
          if (document.getElementById("test") != null){
          document.getElementById("test").classList.add("w-[20%]");
          }
        });
      },
      3000
    );
    document.getElementById("game").addEventListener(
      "click",
      function () {
        let bg = "bg-blue-500";

        document.getElementById("game").classList.add(bg);

        if (document.getElementById("nft").classList.contains(bg)) {
          document.getElementById("nft").classList.remove(bg);
        }
        if (document.getElementById("coin").classList.contains(bg)) {
          document.getElementById("coin").classList.remove(bg);
        }

        document.getElementById("content").innerHTML = `
        <div class="grid grid-cols-3"><p class="col-start-2 text-black text-[2.3rem] text-center ">TOP PLAYED</p>
<div
                            class="col-start-2 row-start-2  bg-white/60 justify-self-center w-[30rem] h-[12rem] rounded grid grid-cols-3 p-[1rem] content-center items-center border-[1px]">
                            <div class="h-[8.5rem] w-[8.5rem] rounded-full border-[1px]">
                                   <img class="object-cover h-full w-full border-[2px] flex justify-center items-center rounded-full  overflow-hidden"
                                          src="${user.photo}">

                            </div>
                            <div class="flex-col col-start-2 col-end-5 text-[1rem] w-[100%] h-[100%] items-center">
                            
                             <div class="flex p-[0.2rem] justify-between w-[80%] border-[1px]"><div>#1</div><div>Palomo</div></div>
                             <div class="flex p-[0.2rem] justify-between w-[80%] border-[1px]"><div>#2</div><div>Palomo2</div></div>
                             <div class="flex p-[0.2rem] justify-between w-[80%] border-[1px]"><div>#3</div><div>Palomo3</div></div>

                             <div class="flex justify-around p-[0.2rem] w-[55%] rounded text-[1.4rem] mt-[10%]  border-[1px]"><div>#14</div><div>You</div></div>

                              </div>
                     </div>
                     
                     </div>
                     </div>´
                    </div>
`


;
        setTimeout(function () {
          if (document.getElementById("test") != null){
          document.getElementById("test").classList.add("w-[20%]");
          }
        });
      },
      3000
    );
  },
  },
};
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
  <div class="grid grid-cols-8 grid-rows-[200px 300px]">
    <asideX class="row-start-1 row-end-3"> </asideX>

    <div
      class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]"
    >
      <asideY id="asidey" class="col-start-2 cursor-pointer"></asideY>
      <p class="col-start-5 self-center text-[2.5rem] text-[white]">Stats</p>
    </div>
    <div
      class="flex mt-[10%] sm:mt-0 w-full col-start-2 col-end-[-2] sm:col-end-2 p-[0] sm:p-[4rem] row-start-2 row-end-2 rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] min-h-fit mg:h-[70vh] justify-center"
    >
      <div
        class="grid mg:grid-cols-3 grid-cols-1 row-start-1 row-end-3 mg:grid-rows-3 w-[100%] mx:h-[30rem] mg:w-[80%] rounded bg-gray-300/10 p-[0rem]"
      >
        <div class="p-[2rem] col-start-1 col-end-4 grid">
          <div
            id="nft"
            class="justify-self-center bg-gray-300/40 row-start-1 grid cursor-pointer grid-cols-3 w-[16rem] h-[7rem] rounded-[20px] border-[1px]"
          >
            <div
              class="h-[4rem] self-center ml-[30%] justify-self-center row-start-1 w-[5rem] flex items-center rounded overflow-hidden"
            >
              <img
                class=" bg-gray-600/40 object-cover h-[200%] w-[200%] flex justify-center items-center overflow-hidden"
                src="/star.png"
              />
            </div>
            <div
              class="flex col-start-2 col-end-4 flex-col items-center justify-center"
            >
              <p class="text-[2rem] font-bold">NFTS</p>
              <p class="font-bold text-[2rem] mt-[-1rem]">3</p>
            </div>
          </div>

          <div
            id="coin"
            class="justify-self-center bg-gray-300/40 cursor-pointer row-start-1 grid grid-cols-3 w-[16rem] h-[7rem] rounded-[20px] border-[1px]"
          >
            <div
              class="h-[4rem] self-center ml-[30%] justify-self-center row-start-1 w-[5rem]  flex items-center rounded overflow-hidden"
            >
              <img
                class=" bg-gray-600/40 object-cover h-[200%] w-[200%] flex justify-center items-center overflow-hidden"
                src="/star.png"
              />
            </div>
            <div
              class="flex col-start-2 col-end-4 flex-col items-center justify-center"
            >
              <p class="text-[2rem] font-bold">COINS</p>
              <p class="font-bold text-[2rem] mt-[-1rem]">1</p>
            </div>
          </div>
          <div
            id="game"
            class="justify-self-center bg-gray-300/40 cursor-pointer row-start-1 grid grid-cols-3 w-[16rem] h-[7rem] rounded-[20px] border-[1px]"
          >
            <div
              class="h-[4rem] self-center ml-[30%] justify-self-center row-start-1 w-[5rem]  flex items-center rounded overflow-hidden"
            >
              <img
                class="object-cover  bg-gray-600/40 h-[100%] w-[100%] flex justify-center items-center overflow-hidden"
                src="/Gameboy.png"
              />
            </div>
            <div
              class="flex col-start-2 col-end-4 flex-col items-center justify-center"
            >
              <p class="text-[2rem] font-bold">PLAYED</p>
              <p class="font-bold text-[2rem] mt-[-1rem]">3</p>
            </div>
          </div>
        </div>

        <div
          id="content"
          class="row-start-2  row-end-4 col-start-1 col-end-4 flex items-center p-[2rem] justify-around"
        ></div>
      </div>
    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>
