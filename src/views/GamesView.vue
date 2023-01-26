<script setup>
import asideX from "../components/aside.vue"
import router from '../router'

</script> 
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
       return false

}
window.onload = function () {
       function setCeld(num) {
              for (var z = 0; z < num;z++) {
                            let celda = Math.floor(Math.random() * 9) + 1;
                            if (document.getElementById(`${celda}ra`).classList.contains('bg-gray-600')){
                                   z--
                            }
                            else {
                                   document.getElementById(`${celda}ra`).classList.add('bg-gray-600')
                                   document.getElementById(`${celda}ra`).classList.add('cursor-pointer')
                            }

                     }
       }

       document.getElementById("first").addEventListener("click", function () {


              document.getElementById("carouselExampleControls").innerHTML =
                     `
             <div class="p-[2rem] bg-gray-900 rounded flex flex-col">
              <div id="frScreen"class="self-center h-[14rem] w-[14rem] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
              <div class=" h-[14rem] w-[14rem] flex flex-col justify-center items-center ">
              <p class="text-[white] text-[2rem]">You lost</p>
              <div class="w-[4rem] h-[2rem] cursor-pointer rounded bg-red-500 text-[white]">EXIT</div>
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
                                   if (number != 0)  {
                                   if (event.target.classList.contains('bg-gray-600')) {
                                          document.getElementById("winner").innerHTML = parseInt(document.getElementById("winner").innerHTML) + 1
                                          event.target.classList.remove('bg-gray-600')
                                          event.target.classList.remove('cursor-pointer')
                                          setCeld(1)
                                          number++
                                          document.getElementById("timerCount").innerHTML = number
                                   }}
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
                                   document.getElementById("finalScore").innerHTML =   document.getElementById("winner").innerHTML
                                   clearInterval(timer)
                            }
                     }, 30);

              })


       }

       )
       document.getElementById("second").addEventListener("click", function () {
              document.getElementById("carouselExampleControls").innerHTML = `
             <div class="p-[2rem] bg-gray-900 rounded flex flex-col">
              <div id="frScreen"class="self-center h-[14rem] w-[14rem] bg-gray-600 rounded z-0 border-[1px] fixed hidden text-center">
              <div class=" h-[14rem] w-[14rem] flex flex-col justify-center items-center ">
              <p  id="finalScore" class="text-[white] text-[2rem]">You lost</p>
              <div class="w-[4rem] h-[2rem] cursor-pointer rounded bg-red-500 text-[white]">EXIT</div>
             
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
              <div class="flex w-[100%] justify-between mt-[2rem] text-[white]">
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
              </div>`
              for (var i = 1; i <= 9; i++) {
                     document.getElementById(`${i}ra`).addEventListener("click", function (event) {
                            if (setWin("bg-white") && setWin("gray-600") == true){ return }
                            if (event.target.classList.contains('bg-gray-600') || event.target.classList.contains('bg-white') || document.getElementById("winner").innerHTML != "") {
                                   return
                            }
                            if (document.getElementById("player").innerHTML == 4) {
                                   event.target.classList.add('bg-gray-600')
                                   document.getElementById("player").innerHTML = parseInt(document.getElementById("player").innerHTML) + 1
                                   if (setWin('bg-gray-600') == true) {
                                          document.getElementById("winner").innerHTML = "Player"
                                   }
                                   return
                            }

                            event.target.classList.add('bg-gray-600')
                            document.getElementById("player").innerHTML = parseInt(document.getElementById("player").innerHTML) + 1
                            if (setWin('bg-gray-600') == true) {
                                   document.getElementById("frScreen").classList.remove("hidden")
                                   document.getElementById("frScreen").classList.remove("bg-gray-600")
                                   document.getElementById("frScreen").classList.add("bg-green-400")
                                   document.getElementById("finalScore").innerHTML= "You Won!"
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
                                          }
                                          return
                                   }
                            }
                            
                     })
              }


       })

}

</script>
<template>
       <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] flex col-start-2  row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 w-[85vw] h-[15vh]">
                     <p class="self-center text-[2rem] text-[white]">Games</p>

              </div>
              <div
                     class="flex  flex-col col-start-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gray-700 w-[85vw] h-[70vh]">
                     <div class="text-[white]">THIS IS A TEST</div>
                     <div class="grid grid-cols-9">
                            <div class="underline col-start-2 text-[white]">
                                   List
                            </div>
                            <div class="flex justify-center h-[100%] w-[100%] mt-[4rem] col-start-4 col-end-7">
                                   <div id="carouselExampleControls" class="carousel slide relative  "
                                          data-bs-ride="carousel">
                                          <div class="carousel-inner relative w-full overflow-hidden">
                                                 <div id="first"
                                                        class="carousel-item active relative float-left w-full">
                                                        <img src="/mario.png" class="block w-full"
                                                               alt="Wild Landscape" />
                                                 </div>
                                                 <div id="second" class="carousel-item relative float-left w-full">
                                                        <img src="/mario.png" class="block w-full" alt="Camera" />
                                                 </div>
                                                 <div class="carousel-item relative float-left w-full">
                                                        <img src="/mario.png" class="block w-full"
                                                               alt="Exotic Fruits" />
                                                 </div>
                                          </div>
                                          <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                                 type="button" data-bs-target="#carouselExampleControls"
                                                 data-bs-slide="prev">
                                                 <span class="carousel-control-prev-icon inline-block bg-no-repeat"
                                                        aria-hidden="true"></span>
                                                 <span class="visually-hidden">Previous</span>
                                          </button>
                                          <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                                 type="button" data-bs-target="#carouselExampleControls"
                                                 data-bs-slide="next">
                                                 <span class="carousel-control-next-icon inline-block bg-no-repeat"
                                                        aria-hidden="true"></span>
                                                 <span class="visually-hidden">Next</span>
                                          </button>
                                   </div>
                            </div>
                            <div class="col-start-9 underline text-[white]">
                                   Top Played
                            </div>

                     </div>
              </div>
       </div>


</template>