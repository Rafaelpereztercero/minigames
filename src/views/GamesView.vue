<script setup>
import asideX from "../components/aside.vue";
import asideY from "../components/asideY.vue";

import router from "../router";
import footerX from "../components/footer.vue";
import { loadRouteLocation } from "vue-router";
</script>
<!-- GAMES DEFS -->
<script>
function  load(t) {
      router.push(t)
    }
export default {
       data() {
              return {
                     users: [],
              };
       },
       methods: {
             
              

       },
       mounted() {
              
             
              
              document.getElementById("acceptCookie").addEventListener("click",function() {
                     
                     document.getElementById("cookieAlert").classList.add("hidden")
              })
    
              function setCeld(num) {
                     for (var z = 0; z < num; z++) {
                            let celda = Math.floor(Math.random() * 9) + 1;
                            if (
                                   document.getElementById(`${celda}ra`).classList.contains("bg-gray-600")
                            ) {
                                   z--;
                            } else {
                                   document.getElementById(`${celda}ra`).classList.add("bg-gray-600");
                                   document.getElementById(`${celda}ra`).classList.add("cursor-pointer");
                            }
                     }
              }
              function setImg() {
                     for (var z = 1; z < 4; z++) {
                            let celda = Math.floor(Math.random() * 9) + 1;
                            if (document.getElementById(`${celda}ra`).innerHTML != "") {
                                   z--;
                            } else {
                                   if (document.getElementById(`${celda}ra`).classList.contains(`${z}f`)) {
                                   } else {
                                          document.getElementById(`${celda}ra`).classList.add(`${z}f`);
                                   }

                                   document.getElementById(
                                          `${celda}ra`
                                   ).innerHTML = `<img class="" src="/p${z}.png">`;
                            }
                     }
              }
              function paintall(bg) {
                     for (var z = 1; z < 10; z++) {
                            document.getElementById(`${z}ra`).classList.add(bg);
                     }
              }
              function removeall(bg) {
                     for (var z = 1; z < 10; z++) {
                            document.getElementById(`${z}ra`).classList.remove(bg);
                     }
              }
              function sleep(ms) {
                     return new Promise(resolve => setTimeout(resolve, ms));
              }

              function setWin(classSet) {
                     if (
                            document.getElementById("1ra").classList.contains(classSet) &&
                            document.getElementById("5ra").classList.contains(classSet) &&
                            document.getElementById("9ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("7ra").classList.contains(classSet) &&
                            document.getElementById("5ra").classList.contains(classSet) &&
                            document.getElementById("3ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("4ra").classList.contains(classSet) &&
                            document.getElementById("5ra").classList.contains(classSet) &&
                            document.getElementById("6ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("7ra").classList.contains(classSet) &&
                            document.getElementById("8ra").classList.contains(classSet) &&
                            document.getElementById("9ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("1ra").classList.contains(classSet) &&
                            document.getElementById("4ra").classList.contains(classSet) &&
                            document.getElementById("7ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("3ra").classList.contains(classSet) &&
                            document.getElementById("6ra").classList.contains(classSet) &&
                            document.getElementById("9ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("1ra").classList.contains(classSet) &&
                            document.getElementById("2ra").classList.contains(classSet) &&
                            document.getElementById("3ra").classList.contains(classSet)
                     ) {
                            return true;
                     }
                     if (
                            document.getElementById("2ra").classList.contains(classSet) &&
                            document.getElementById("5ra").classList.contains(classSet) &&
                            document.getElementById("8ra").classList.contains(classSet)
                     ) {
                            return true;
                     }

                     for (let celda = 1; celda < 9; celda++) {
                            if (
                                   !(
                                          document
                                                 .getElementById(`${celda}ra`)
                                                 .classList.contains("bg-gray-600") ||
                                          document.getElementById(`${celda}ra`).classList.contains("bg-white")
                                   )
                            ) {
                                   return false;
                            }
                     }

                     return "tie";
              }
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
                                   (this.users = data[x]);



                                   document.getElementById("1").addEventListener("mouseover", function () {
                                          document.getElementById("1a").innerHTML = `<button id="p1" class="w-[6rem] rounded  h-[4rem] text-white bg-green-400">Play</button>`


                                          document.getElementById("1a").style.height = "12rem"

                                   })

                                   document.getElementById("1").addEventListener("click", function () {
                                          document.getElementById("gameContainer").innerHTML = `
<div class="w-[35rem] h-[24rem] border-[1px] self-center">
<div class=" pt-[4rem] pb-[4rem] pl-[2rem] pr-[2rem] w-full h-full bg-gray-900 rounded flex flex-col">
<div id="frScreen"class="self-center h-[50%] w-[50%] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
<div class=" h-[100%] w-[100%] flex flex-col justify-center items-center ">
<p  id="finalScore" class="text-[white] text-[2rem]">You lost</p>
<div v-on:click="load('Games')" class="w-[4rem] h-[2rem] cursor-pointer rounded bg-red-500 text-[white]">EXIT</div>

</div>
</div>

<div class="self-center justify-center align-center flex flex-warp flex-col">
<div class="flex">
<div  id="1ra" class=" h-[4rem] w-[4rem] border-[1px]"></div>
<div id ="2ra" class=" h-[4rem] w-[4rem] border-[1px]"></div>
<div id ="3ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
</div>
<div class="flex">
<div id="4ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="5ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="6ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
</div>
<div class="flex">
<div id="7ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="8ra" class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="9ra" class="h-[4rem] w-[4rem] border-[1px]"></div>
</div>
<div id="winner" class = "text-center text-[2rem] text-[white]"></div>
<div id="fShow" class="flex w-[100%] justify-between mt-[2rem] text-[white] hidden">
<div  class="flex justify-around w-[40%]">
Player
<p id="player" class="display-none">0</p>
</div>
<div class="flex justify-around w-[30%]">
IA
<p id="IA" class="display-none">0</p>
</div>
</div>
</div>
<div id="start" class="cursor-pointer mt-[2rem] h-[3rem] w-[8rem] text-white bg-green-600 rounded flex justify-center align-center items-center self-center ">Start</div>
</div>
</div>`;
                                          document.getElementById("start").addEventListener("click", function () {
                                                 document.getElementById("start").classList.add("hidden")
                                                 document.getElementById("fShow").classList.remove("hidden")
                                                 for (var i = 1; i <= 9; i++) {
                                                        document.getElementById(`${i}ra`).addEventListener("click", function (event) {
                                                               if (setWin("bg-white") && setWin("gray-600") == true || setWin("gray-600") == "tie" || setWin("bg-white") == "tie") { return }
                                                               if (event.target.classList.contains('bg-gray-600') || event.target.classList.contains('bg-white') || document.getElementById("winner").innerHTML != "") {
                                                                      return
                                                               }

                                                               event.target.classList.add('bg-gray-600')
                                                               document.getElementById("player").innerHTML = parseInt(document.getElementById("player").innerHTML) + 1
                                                               if (setWin('bg-gray-600') == true) {
                                                                      document.getElementById("frScreen").classList.remove("hidden")
                                                                      document.getElementById("frScreen").classList.remove("bg-gray-600")
                                                                      document.getElementById("frScreen").classList.add("bg-green-400")
                                                                      document.getElementById("finalScore").innerHTML = "You Won!"
                                                                      return
                                                               }
                                                               if (setWin('bg-gray-600') == "tie") {
                                                                      document.getElementById("frScreen").classList.remove("hidden")
                                                                      document.getElementById("finalScore").innerHTML = "Tie!"
                                                                      return
                                                               }
                                                               let asker = true
                                                               while (asker == true) {
                                                                      let celda = Math.floor(Math.random() * 9) + 1;
                                                                      if (document.getElementById(`${celda}ra`).classList.contains('bg-gray-600') || document.getElementById(`${celda}ra`).classList.contains('bg-white')) {
                                                                      }
                                                                      else {
                                                                             document.getElementById(`${celda}ra`).classList.add('bg-white')
                                                                             document.getElementById("IA").innerHTML = parseInt(document.getElementById("IA").innerHTML) + 1
                                                                             if (setWin('bg-white') == true) {
                                                                                    document.getElementById("frScreen").classList.remove("hidden")
                                                                                    return
                                                                             }
                                                                             if (setWin('bg-white') == "tie") {
                                                                                    document.getElementById("frScreen").classList.remove("hidden")
                                                                                    document.getElementById("finalScore").innerHTML = "Tie!"
                                                                                    return
                                                                             }
                                                                             return
                                                                      }
                                                               }

                                                        })
                                                 }


                                          });


                                   })

                                   document.getElementById("1").addEventListener("mouseout", async function () {


                                          document.getElementById("1a").innerHTML = ` Triqui`

                                          document.getElementById("1a").style.height = "3rem"




                                   })

                                   document.getElementById("2").addEventListener("mouseover", function () {
                                          document.getElementById("2a").innerHTML = `<button id="p2" class="w-[6rem] rounded  h-[4rem] text-white bg-green-400">Play</button>`


                                          document.getElementById("2a").style.height = "12rem"

                                   })
                                   document.getElementById("2").addEventListener("mouseout", async function () {


                                          document.getElementById("2a").innerHTML = `Speedly`

                                          document.getElementById("2a").style.height = "3rem"




                                   })

                                   document.getElementById("2").addEventListener("click", function () {
                                          document.getElementById("gameContainer").innerHTML = `
<div class="w-[35rem] h-[24rem] border-[1px] self-center">
<div class=" pt-[2rem] pb-[2rem] pl-[2rem] pr-[2rem] w-full h-full bg-gray-900 rounded flex flex-col">
<div id="frScreen" class="flex justify-center items-center self-center h-[50%] w-[50%] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
<div class=" h-[14rem] w-[14rem] flex flex-col justify-center items-center ">
<p class="text-[white] text-[2rem]">You lost</p>
<div  v-on:click="load('Games')" class="w-[4rem] h-[2rem] cursor-pointer rounded bg-red-500 text-[white]">EXIT</div>
<p class="text-[white] text-[1.5rem] mt-[1rem]">Total Score</p>
<p id="finalScore" class="text-[white] border-[1px] w-[25%] rounded">15</p>
</div>
</div>
<div id="timeCont" class="flex justify-end mb-[1rem] hidden">
<div class="text-[white] mr-[1rem]">Timer</div>
<div id="timerCount" class="p-[0.1rem] w-[2rem] text-[0.7rem] flex justify-center align-center rounded border-[0.1px] text-[white] text-center">5</div>
</div>
<div class="self-center justify-center align-center flex flex-warp flex-col">
<div class="flex">
<div  id="1ra" class=" h-[4rem] w-[4rem] border-[1px]"></div>
<div id ="2ra" class=" h-[4rem] w-[4rem] border-[1px]"></div>
<div id ="3ra"class="  h-[4rem] w-[4rem] border-[1px]"></div>
</div>
<div class="flex">
<div id="4ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="5ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="6ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
</div>
<div class="flex">
<div id="7ra"class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="8ra" class="h-[4rem] w-[4rem] border-[1px]"></div>
<div id="9ra" class="h-[4rem] w-[4rem] border-[1px]"></div>
</div>

<div id="winner" class = " text-center text-[2rem] text-[white] hidden">0</div>
<div id="greenTimer" class=" md:transition-all self-center rounded mt-[1rem] hidden w-[9rem] h-[1rem] bg-green-200"></div>
<div id="start" class="cursor-pointer mt-[2rem] h-[3rem] w-[8rem] text-white bg-green-600 rounded flex justify-center align-center items-center self-center ">Start</div>

</div>
</div>
</div>`
                                          document.getElementById("start").addEventListener("click", function () {
                                                 document.getElementById("winner").classList.remove("hidden")
                                                 document.getElementById("greenTimer").classList.remove("hidden")
                                                 document.getElementById("start").classList.add("hidden")
                                                 document.getElementById("timeCont").classList.remove("hidden")

                                                 setCeld(2)

                                                 let number = parseFloat(document.getElementById("timerCount").innerHTML).toFixed(2)

                                                 for (var i = 1; i <= 9; i++) {
                                                        document.getElementById(`${i}ra`).addEventListener("click", function (event) {
                                                               let number = parseFloat(document.getElementById("timerCount").innerHTML).toFixed(2)
                                                               if (number != 0) {
                                                                      if (event.target.classList.contains('bg-gray-600')) {
                                                                             document.getElementById("winner").innerHTML = parseInt(document.getElementById("winner").innerHTML) + 1
                                                                             event.target.classList.remove('bg-gray-600')
                                                                             event.target.classList.remove('cursor-pointer')
                                                                             setCeld(1)
                                                                             number++
                                                                             document.getElementById("timerCount").innerHTML = number
                                                                      }
                                                               }
                                                        })
                                                 }

                                                 const timer = setInterval(() => {
                                                        let number = parseFloat(document.getElementById("timerCount").innerHTML).toFixed(2)
                                                        number = number - parseFloat(0.1)
                                                        if (number < 10) {

                                                               document.getElementById("greenTimer").style.width = parseInt(number) + "rem"
                                                        }

                                                        number = parseFloat(number).toFixed(2)
                                                        document.getElementById("timerCount").innerHTML = `${number}`
                                                        if (number <= 0) {
                                                               document.getElementById("greenTimer").style.width = "9rem"
                                                               document.getElementById("greenTimer").classList.remove("bg-green-200")
                                                               document.getElementById("greenTimer").classList.add("bg-red-600")
                                                               document.getElementById("timerCount").innerHTML = 0
                                                               document.getElementById("frScreen").classList.remove("hidden")
                                                               document.getElementById("finalScore").innerHTML = document.getElementById("winner").innerHTML
                                                               clearInterval(timer)
                                                        }
                                                 }, 30);

                                          })

                                   })
                                   document.getElementById("3").addEventListener("mouseover", function () {
                                          document.getElementById("3a").innerHTML = `<button id="p3" class="w-[6rem] rounded  h-[4rem] text-white bg-green-400">Play</button>`


                                          document.getElementById("3a").style.height = "12rem"

                                   })
                                   document.getElementById("3").addEventListener("mouseout", async function () {

                                          document.getElementById("3a").innerHTML = `Memory`

                                          document.getElementById("3a").style.height = "3rem"

                                   })
                                   document.getElementById("3").addEventListener("click", function () {
                                          document.getElementById("gameContainer").innerHTML = `
<div class="w-[35rem] h-[24rem] border-[1px] self-center">
</div>`

                                   })
                                   document.getElementById("4").addEventListener("mouseover", function () {
                                          document.getElementById("4a").innerHTML = `<button id="p4" class="w-[6rem] rounded  h-[4rem] text-white bg-green-400">Play</button>`


                                          document.getElementById("4a").style.height = "12rem"

                                   })
                                   document.getElementById("4").addEventListener("mouseout", async function () {

                                          document.getElementById("4a").innerHTML = `Bombs.io`

                                          document.getElementById("4a").style.height = "3rem"

                                   })
                                   document.getElementById("4").addEventListener("click", function () {
                                          document.getElementById("gameContainer").innerHTML = `
<div class="w-[35rem] h-[24rem] border-[1px] self-center">
</div>`

                                   })


                            }
                     });
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
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY id="asidey" class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Games</p>
              </div>
              <div  id="cookieAlert" class="flex ">
                     <div class="fixed z-[100]">
                                   <div 
                                          class="flex flex-col text-black items-center  w-[75%] bg-white p-[2rem] mt-[3rem] rounded">
                                          <div class="grid grid-cols-3 justify-center ">
                                                 <img class="col-start-1 col-end-4" src="/header_alert.png">
                                                 <div id="cookieAccept"
                                                        class="hidden grid col-start-4 grid-cols-5 h-[5rem] w-[5rem] border-[1px] border-[black] cursor-pointer self-center bg-gray-300 rounded">
                                                        <div
                                                               class="col-start-3 col-end-3 row-start-1 w-[1rem] h-full bg-black rotate-[-45deg] rounded">
                                                        </div>
                                                        <div
                                                               class="col-start-3 col-end-3 row-start-1 w-[1rem] h-full bg-black rotate-[45deg] rounded ">
                                                        </div>
                                                 </div>
                                          </div>
                                          <h2 class="mt-[1rem]">Su privacidad es importante para nosotros</h2>
                                          <p class="mt-[2rem]">Nosotros y nuestros equipos almacenamos o accedemos a información
                                                 en un dispositivo, tales como cookies, y procesamos datos personales,
                                                 tales como identificadores únicos e información estándar enviada por un
                                                 dispositivo, para anuncios y contenido personalizados, medición de
                                                 anuncios y del contenido e información sobre el público, así como para
                                                 desarrollar y mejorar productos. Con su permiso, nosotros y nuestros
                                                 socios podemos utilizar datos de localización geográfica precisa e
                                                 identificación mediante las características de dispositivos. Puede
                                                 hacer clic para otorgarnos su consentimiento a nosotros y a nuestros
                                                 socios para que llevemos a cabo el procesamiento previamente descrito.
                                                 De forma alternativa, puede acceder a información más detallada y
                                                 cambiar sus preferencias antes de otorgar o negar su consentimiento.
                                                 Tenga en cuenta que algún procesamiento de sus datos personales puede
                                                 no requerir de su consentimiento, pero usted tiene el derecho de
                                                 rechazar tal procesamiento. Sus preferencias se aplicarán solo a este
                                                 sitio web. Puede cambiar sus preferencias en cualquier momento entrando
                                                 de nuevo en este sitio web o visitando nuestra política de privacidad.
                                          </p>

                                          <div id="acceptCookie" class="border-[1px]">
                                                 <input type="button" class="bg-green-700  w-[50rem] text-white p-[1rem] rounded"
                                                        value="ACEPTO">
                                          </div>
                                   </div>
                            </div>
                     </div>
              <div id="gameContainer"
                     class="flex mt-[10%] sm:mt-0 justify-center flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem] row-start-2 row-end-2 rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh] items-center">
                     <input type="text" class="cursor-pointer w-[80%] h-[2rem] text-center g-white/60 rounded"
                            placeholder="Type a game" />
                     <div class="grid grid-cols-4 w-full h-full content-around p-[4rem] bg-gray-300/20 rounded">
                            <div id="1"
                                   class="grid-cols-1 grid cursor-pointer overflow-hidden h-[12rem]  duration-[1000ms] w-[12rem]  rounded">
                                   <img src="/mario.png" class="object-cover w-full h-full" />
                                   <div id="1a"
                                          class="self-end justify-self-center flex justify-center items-center transition-height duration-[500ms] ease w-[12rem] h-[3rem] rounded z-50 bg-violet-600/80 text-[2rem] text-center text-white absolute">
                                          Triqui
                                   </div>
                            </div>
                            <div id="2"
                                   class="grid-cols-1 grid cursor-pointer overflow-hidden  h-[12rem]  duration-[1000ms] w-[12rem] rounded">
                                   <img src="/mario.png" class="object-cover w-full h-full" />
                                   <div id="2a"
                                          class="self-end justify-self-center flex justify-center items-center transition-height duration-[500ms] ease w-[12rem] h-[3rem] rounded z-50 bg-violet-600/80 text-[2rem] text-center text-white absolute">
                                          Speedly
                                   </div>
                            </div>
                            <div id="3"
                                   class="grid-cols-1 grid cursor-pointer overflow-hidden  h-[12rem]  duration-[1000ms] w-[12rem] rounded">
                                   <img src="/mario.png" class="object-cover w-full h-full" />
                                   <div id="3a"
                                          class="self-end justify-self-center flex justify-center items-center transition-height duration-[500ms] ease w-[12rem] h-[3rem] rounded z-50 bg-violet-600/80 text-[2rem] text-center text-white absolute">
                                          Memory
                                   </div>
                            </div>
                            <div id="4"
                                   class="grid-cols-1 grid cursor-pointer overflow-hidden  h-[12rem]  duration-[1000ms] w-[12rem] rounded">
                                   <img src="/mario.png" class="object-cover w-full h-full" />
                                   <div id="4a"
                                          class="self-end justify-self-center flex justify-center items-center transition-height duration-[500ms] ease w-[12rem] h-[3rem] rounded z-50 bg-violet-600/80 text-[2rem] text-center text-white absolute">
                                          Bombs.io
                                   </div>
                            </div>
                     </div>
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>
</template>
