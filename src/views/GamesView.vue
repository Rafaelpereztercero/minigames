<script setup>
import asideX from "../components/aside.vue"
import asideY from "../components/asideY.vue"

import router from '../router'
import footerX from '../components/footer.vue'

</script> 
<!-- GAMES DEFS -->
<script>
function setWin(classSet) {
       if (document.getElementById('1ra').classList.contains(classSet) && document.getElementById('5ra').classList.contains(classSet) && document.getElementById('9ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('7ra').classList.contains(classSet) && document.getElementById('5ra').classList.contains(classSet) && document.getElementById('3ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('4ra').classList.contains(classSet) && document.getElementById('5ra').classList.contains(classSet) && document.getElementById('6ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('7ra').classList.contains(classSet) && document.getElementById('8ra').classList.contains(classSet) && document.getElementById('9ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('1ra').classList.contains(classSet) && document.getElementById('4ra').classList.contains(classSet) && document.getElementById('7ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('3ra').classList.contains(classSet) && document.getElementById('6ra').classList.contains(classSet) && document.getElementById('9ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('1ra').classList.contains(classSet) && document.getElementById('2ra').classList.contains(classSet) && document.getElementById('3ra').classList.contains(classSet)) {
              return true
       }
       if (document.getElementById('2ra').classList.contains(classSet) && document.getElementById('5ra').classList.contains(classSet) && document.getElementById('8ra').classList.contains(classSet)) {
              return true
       }

       for (let celda = 1; celda < 9; celda++) {

              if (!(document.getElementById(`${celda}ra`).classList.contains('bg-gray-600') || document.getElementById(`${celda}ra`).classList.contains('bg-white'))) {
                     return false
              }
       }

       return "tie"

}

window.onload = function () {

       function setCeld(num) {
              for (var z = 0; z < num; z++) {
                     let celda = Math.floor(Math.random() * 9) + 1;
                     if (document.getElementById(`${celda}ra`).classList.contains('bg-gray-600')) {
                            z--
                     }
                     else {
                            document.getElementById(`${celda}ra`).classList.add('bg-gray-600')
                            document.getElementById(`${celda}ra`).classList.add('cursor-pointer')
                     }

              }
       }
       document.getElementById("cookieAccept").addEventListener("click", function () {
              document.getElementById("cookieAlert").classList.add("hidden")
       })
       document.getElementById("acceptCookie").addEventListener("click", function () {
              document.getElementById("cookieAlert").classList.add("hidden")
       })
       
       document.getElementById("first").addEventListener("click", function () {


              document.getElementById("carouselExampleControls").innerHTML =
                     `
             <div class="p-[2rem] bg-gray-900 rounded flex flex-col">
              <div id="frScreen"class="self-center h-[14rem] w-[14rem] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
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


       }

       )
       document.getElementById("second").addEventListener("click", function () {
              document.getElementById("carouselExampleControls").innerHTML = `
             <div class="p-[2rem] bg-gray-900 rounded flex flex-col">
              <div id="frScreen"class="self-center h-[10rem] w-[10rem] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
              <div class=" h-[10rem] w-[10rem] flex flex-col justify-center items-center ">
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
              </div>`
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


              })

       })
       function setImg() {
              for (var z = 1; z < 4; z++) {
                     let celda = Math.floor(Math.random() * 9) + 1;
                     if (document.getElementById(`${celda}ra`).innerHTML != "") {
                            z--
                     }
                     else {
                            if (document.getElementById(`${celda}ra`).classList.contains(`${z}f`)) {

                            }
                            else {
                                   document.getElementById(`${celda}ra`).classList.add(`${z}f`)
                            }

                            document.getElementById(`${celda}ra`).innerHTML = `<img class="" src="/p${z}.png">`

                     }

              }
       }
       function paintall(bg) {
              for (var z = 1; z < 10; z++) {
                     document.getElementById(`${z}ra`).classList.add(bg)
              }
       }
       function removeall(bg) {
              for (var z = 1; z < 10; z++) {
                     document.getElementById(`${z}ra`).classList.remove(bg)
              }
       }
       document.getElementById("third").addEventListener("click", function () {
              document.getElementById("carouselExampleControls").innerHTML = `
             <div class="p-[2rem] bg-gray-900 rounded flex flex-col">
              <div id="frScreen"class="self-center h-[14rem] w-[14rem] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
              <div class=" h-[14rem] w-[14rem] flex flex-col justify-center items-center ">
              <p  id="finalScore" class="text-[white] text-[2rem]">You lost</p>
              <div v-on:click="load('Games')" class="w-[4rem] h-[2rem] cursor-pointer rounded bg-red-500 text-[white]">EXIT</div>
             
              </div>
              </div>
              <div id="timeCont" class="flex justify-end mb-[1rem] hidden">
                     <div id="answer" class="hidden h-[2rem] mr-[4rem] text-center w-[4rem] border-[1px] bg-green-500 cursor-pointer text-white rounded self-start">GO!</div>

              <div class="text-[white] mr-[1rem]">Timer</div>
              <div id="timerCount" class="p-[0.1rem] w-[2rem] flex items-center justify-center text-[0.7rem] flex justify-center align-center rounded border-[0.1px] text-[white] text-center">5</div>
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
              <p id="muc" class="hidden"></p>
              <p id="who" class="hidden"></p>
              <div id="imgSetter" class="flex justify-between mt-[2rem]"> </div>
              <div id="start" class="cursor-pointer mt-[2rem] h-[3rem] w-[8rem] text-white bg-green-600 rounded flex justify-center align-center items-center self-center ">Start</div>
              <div id="greenTimer" class=" md:transition-all self-center rounded mt-[1rem] hidden w-[9rem] h-[1rem] bg-green-200"></div>
              </div>`

              document.getElementById("start").addEventListener("click", function () {
                     document.getElementById("start").classList.add("hidden")
                     document.getElementById("timeCont").classList.remove("hidden")
                     document.getElementById("greenTimer").classList.remove("hidden")


                     setImg()
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
                                   document.getElementById("timerCount").innerHTML = 10
                                   document.getElementById("finalScore").innerHTML = document.getElementById("winner").innerHTML

                                   let x = document.getElementsByClassName("1f")
                                   let y = document.getElementsByClassName("2f")
                                   let z = document.getElementsByClassName("3f")

                                   x[0].innerHTML = ""
                                   y[0].innerHTML = ""
                                   z[0].innerHTML = ""

                                   document.getElementById("imgSetter").innerHTML = `
                                   <div class=" psl rounded cursor-pointer h-[2rem] w-[2rem] border-[1px]"><img class="rounded psl2" src="/p1.png"></div>
                                   <div class="psl rounded cursor-pointer h-[2rem] w-[2rem] border-[1px]"><img class="rounded psl2" src="/p2.png"></div>
                                   <div class="psl rounded cursor-pointer h-[2rem] w-[2rem] border-[1px]"><img class="rounded psl2" src="/p3.png"></div>
                                   <div class="hidden">
                                          <p id="1"></p>
                                          <p id="2"></p>
                                          <p id="3"></p>
                                          </div>

                                   `
                                   document.getElementById("answer").addEventListener("click", function () {
                                          clearInterval(timer2)
                                          clearInterval(timer)
                                          if (!(document.getElementById("greenTimer").classList.contains("hidden"))) {
                                                 document.getElementById("greenTimer").classList.add("hidden")
                                          }
                                          removeall("bg-red-500")
                                          for (var z = 1; z < 4; z++) {

                                                 if (document.getElementById(`${z}ra`).id.substring(1, 1) == document.getElementById(`${z}ra`).firstChild?.src.substring(1, 1)) {

                                                 }
                                                 else {
                                                        if (document.getElementById(`${celda}ra`).classList.contains(`${z}f`)) {

                                                        }
                                                        else {
                                                               document.getElementById(`${celda}ra`).classList.add(`${z}f`)
                                                        }

                                                        document.getElementById(`${celda}ra`).innerHTML = `<img class="" src="/p${z}.png">`

                                                 }

                                          }

                                   })
                                   let psl = document.getElementsByClassName("psl")
                                   for (let g = 0; g < psl.length; g++) {
                                          psl[g].addEventListener("click", function () {
                                                 let psl = document.getElementsByClassName("psl2")
                                                 for (let x = 0; x < psl.length; x++) {

                                                        if (psl[x].classList.contains("bg-green-500")) {
                                                               psl[x].classList.remove("bg-green-500")
                                                        }
                                                 }
                                                 let link = event.target.src
                                                 link = link.substring((link.length - 6), link.length)


                                                 document.getElementById("who").innerHTML = link
                                                 event.target.classList.add("bg-green-500")

                                          })
                                   }
                                   for (let v = 1; v < 10; v++) {

                                          document.getElementById(`${v}ra`).addEventListener("click", function () {
                                                 let who = document.getElementById("who").innerHTML
                                                 document.getElementById(who.substring(who.length - 5, who.length - 4)).innerHTML = 1
                                                 if (document.getElementById("1").innerHTML == 1 && document.getElementById("2").innerHTML == 1 && document.getElementById("3").innerHTML == 1) {


                                                        if (document.getElementById("answer").classList.contains("hidden")) {
                                                               document.getElementById("answer").classList.remove("hidden")
                                                        }

                                                 }
                                                 if (event.target.innerHTML == "") {
                                                        for (let v = 1; v < 10; v++) {
                                                               let comp = ""
                                                               try {
                                                                      comp = document.getElementById(`${v}ra`).firstChild.src
                                                               } catch {
                                                                      comp = ""
                                                               }
                                                               if (comp.substring((comp.length - 6), comp.length) == who) {
                                                                      document.getElementById(`${v}ra`).innerHTML = ""
                                                               }
                                                        }
                                                        event.target.innerHTML = `<img src="${who}">`
                                                 }
                                                 let muc = document.getElementById("muc").innerHTML
                                          })
                                   }
                                   document.getElementById("timerCount").innerHTML = "30"
                                   paintall("bg-red-500")

                                   clearInterval(timer)
                                   const timer2 = setInterval(() => {
                                          let number = parseFloat(document.getElementById("timerCount").innerHTML).toFixed(2)
                                          number = number - parseFloat(0.1)
                                          if (number < 10) {

                                                 document.getElementById("greenTimer").style.width = parseInt(number) + "rem"
                                          }

                                          number = parseFloat(number).toFixed(2)
                                          document.getElementById("timerCount").innerHTML = `${number}`
                                          if (number <= 0) {
                                                 clearInterval(timer2)

                                          }
                                   }, 100);

                                   // x[0].classList.remove("1f")
                                   // y[0].classList.remove("2f")
                                   // z[0].classList.remove("3f")


                            }
                     }, 30);

              })
       })

}

</script>
<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-4 self-center text-[2.5rem] text-[white]">Games</p>

              </div>
              <div  id="cookieAlert" class="flex ">
                     <div class="fixed z-50">
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
                                          <p class="mt-[2rem]">Nosotros y nuestros almacenamos o accedemos a información
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
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 sm:w-[85vw] h-[70vh] justify-center">
                    
                     <div class="w-[100%] h-[100%] self-center flex flex-col justify-center items-center z-2 ">
                            
                            <p>HOLA</p>
                            <div id="carouselExampleControls" class="carousel slide w-[40%] h-full  "
                                   data-bs-ride="carousel">
                                   <div class="carousel-inner relative w-full overflow-hidden ">
                                          <div id="first" class="carousel-item active relative float-left w-full">
                                                 <img src="/mario.png" class="block w-full" alt="Wild Landscape" />
                                          </div>
                                          <div id="second" class="carousel-item relative float-left w-full">
                                                 <img src="/mario.png" class="block w-full" alt="Camera" />
                                          </div>
                                          <div id="third" class="carousel-item relative float-left w-full">
                                                 <img src="/mario.png" class="k w-full" alt="Exotic Fruits" />
                                          </div>
                                   </div>
                                   <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                          type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                          <span class="carousel-control-prev-icon inline-block bg-no-repeat"
                                                 aria-hidden="true"></span>
                                          <span class="visually-hidden">Previous</span>
                                   </button>
                                   <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                          type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                          <span class="carousel-control-next-icon inline-block bg-no-repeat"
                                                 aria-hidden="true"></span>
                                          <span class="visually-hidden">Next</span>
                                   </button>
                            </div>





                     </div>

              </div>
              <footerX class="row-start-4 row-end-5"></footerX>
       </div>


</template>