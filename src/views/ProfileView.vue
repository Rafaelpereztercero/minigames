<script setup>
import { routeLocationKey } from 'vue-router';
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
                            users:[]
                     }
              },
              created() {
                     if (document.cookie == "") {
                            return this.users = []
                     }
                   
                    
                     fetch("http://localhost:3000/players?cookie=" + document.cookie.substring(5,document.cookie.length))
                     .then(response => response.json())
                     .then(data => {
                            let x= 0
                           if(data[x]) {
                            this.setImg(data[x]) 
                            return this.users = data[x]
                            
                           }

                     })
                    
              },
              methods: {  
                     async  patchUser(user) {
          console.log(user)
   }
    ,

async setImg(userx) {
console.log(userx)
    
const inputFile = document.getElementById("input-file");

inputFile.onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement, files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = async function () {
            document.getElementById('uImg').src = fr.result
            document.getElementById('pImg').src = fr.result
             userx.photo=fr.result
             const response = await fetch( `http://localhost:3000/players/${userx.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userx),
    });
    return;

           console.log(fr.result)

        };
        fr.readAsDataURL(files[0]);
    }
};
                     }
         
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
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY id="asidey" class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Profile</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh]">
                  <div class="w-[50%] flex h-[20%] bg-gradient-to-r from-fuchsia-500 via-violet-400 to-sky-500 rounded border-[1px] justify-center">
                    <div class="flex justify-between w-[85%] items-center text-[2rem] font-bold">#{{this.users.id}}
                      <div class="bg-gray-900 rounded-full cursor-pointer h-[4rem] w-[4rem] p-[1rem] flex items-center justify-center">
                      <svg class="w-[20px]  col-start-3 mx:col-start-2 fill-current inline-block self-center" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_1558)"> <path d="M29 7H30C30.553 7 31 7.447 31 8V30C31 30.553 30.553 31 30 31H2C1.447 31 1 30.553 1 30V8C1 7.447 1.447 7 2 7H19M6 28V19H10V28M14 28V13H18V28M22 28V1H26V28" stroke="#ffffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_1558"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>
                    </div>
                    </div>
                   
                      <div class="h-[8rem] w-[8rem] justify-self-start overflow-hidden absolute rounded-full grid grid-cols-1 border-[5px]">
                            
                       <img id="uImg" class="object-cover justify-self-center col-start-1 row-start-1  h-[7.5rem] absolute overflow-hidden" :src="users.photo"></div>
                       <div class="bg-blue-400 rounded-full col-start-1 row-start-2 z-50 absolute justify-self-center grid grid-cols-1 mt-[5rem] ml-[4rem] w-[3rem] p-[0.3rem] border-[4px] border-[black] cursor-pointer  h-[3rem] overflow-hidden ">
                                   <img class="col-start-1 row-start-1 w-[3rem] cursor-pointer justify-self-center" src="https://raw.githubusercontent.com/Rafaelpereztercero/BitLevel/b1b38d18411d6d15e2c32925eaf12634266e04c0/Project-BitLevel/Frontend/Assets/Icons/edit-3.svg">
                            <input type="file" id="input-file" class="cursor-pointer col-start-1 row-start-1 opacity-0">
                            </div>
                     
              </div>
                  
                  <div class=" bg-gray-200/10 w-[50%] h-[35%] rounded flex mt-[2rem] border-[1px] flex-col items-center justify-center">
                    <p class="text-[2rem] font-bold">{{this.users.name}}</p>
                    <p class="text-[1.4rem]">{{this.users.description}}</p>
                  </div>
                  <div class=" bg-gray-200/10 w-[50%] h-[35%] rounded grid mt-[2rem] border-[1px] grid-cols-2 p-[1rem]">
                    <div class="flex justify-center"><p class="text-[1.5rem] font-bold">Mail</p></div>
                    <div  class="flex justify-center"> <p class="text-[1.5rem] font-bold">Password</p></div>
                    <div class="flex justify-center"><p>{{this.users.mail}}</p></div>
                    <div  class="flex justify-center"><p>****</p></div>
                  
                  </div>
                    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>