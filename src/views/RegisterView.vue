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
      users: []
    }
  },
  created() {

    fetch("http://localhost:3000/players")
      .then(response => response.json())
      .then(data => this.users = data)

  },
  methods: {

    async register() {
      const url = "http://localhost:3000/"
      async function postPlayers(url, user) {
        const response = await fetch(url + "players"
          , {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          });


        return;
      }
      async function postStats(url, stat) {
        const response = await fetch(url + "stats"
          , {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(stat),
          });


        return;
      }
      async function getPlayers(url) {
        const response = await fetch(url + "players");
        const profile = await response.json();
        return profile;
      }


      let compare = await getPlayers(url);
      let exists = false;
      let uname = document.getElementById("id").value;
      let upass = document.getElementById("pass").value;
      let mail = document.getElementById("mail").value;
      compare.forEach((element) => {
        if (element.name == uname) {
          exists = true;
        }
      });
      if (exists == true || (uname == "") | (upass == "") || (mail == "")) {
        return false;
      }
      function genreRnadom(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      let cookie = genreRnadom(8)
      document.cookie = `auth=${cookie}; max-age=3600; path=/`;
      const user = {
        name: uname,
        password: upass,
        nfts: [],
        description: "",
        coins: 1,
        cookie: cookie,
        photo: "https://th.bing.com/th/id/OIP.-6wDXFm_OzDMZXRrEj19nAHaHa?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.-6wDXFm_OzDMZXRrEj19nAHaHa?pid=ImgDet&rs=1",
        mail: mail,
        points: 0
      };
      await postPlayers(url, user);
      const stat = {
        id: uname,
        games: 0,
        most_played: "None"

      }
      await postStats(url, stat)
      window.location.href = "http://localhost:5173/Home"


    },

  },
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
  <div class="grid grid-cols-8 grid-rows-[200px 300px]">
    <asideX class="row-start-1 row-end-3"> </asideX>

    <div
      class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
      <asideY class="col-start-2 cursor-pointer"></asideY>
      <p class="col-start-5 self-center text-[2.5rem] text-[white]">Register</p>
    </div>
    <div
      class="flex mt-[10%] sm:mt-0 flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem] row-start-2 row-end-2 items-center rounded  bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh]">
      <form class="border-[1px] flex flex-col justify-around align-between text-[white] rounded h-full w-full">
        <label class="flex w-full justify-around" for="mail">Mail
          <input class="rounded text-[black]" type="mail" id="mail" />
        </label>
        <label class="flex w-full justify-around" for="mail">Username
          <input class="rounded text-[black]" type="text" id="id" />
        </label>
        <label class="flex w-full justify-around" for="password">Password
          <input class="rounded text-[black]" type="password" id="pass" />
        </label>
        <input type="button" v-on:click="register()"
          class="cursor-pointer hover:text-black transition duration-800 ease-in-out hover:bg-white rounded w-[75%] self-center h-[2.5rem] bg-gray-900 text-[white]"
          value="Register" />
      </form>
    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>
