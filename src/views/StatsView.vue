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
                    
                    
                     fetch("http://localhost:3000/players?cookie=" + document.cookie.substring(5,document.cookie.length))
                     .then(response => response.json())
                     .then(data => {
                            let x= 0
                           if(data[x]) {
                            this.users = data[x]
                            fetch(`http://localhost:3000/stats?=user=${data[x].username}`)
                            .then(response=>response.json())
                            .then (data2 => {
                                   let x = 0
                                   if(data2[x]) {
                                          console.log(data2[x])
                                   return this.stats= data2[x]
                                   }
                            })
                           }

                     })
                    
              },

       methods: {

       }
}
window.onload = function() {
document.getElementById("test").addEventListener("click",function() {
       document.getElementById("test").classList.add("w-[20%]")
})
document.getElementById("test").classList.add("w-[20%]")

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
                   
                     
   
                            <div class="h-[20rem] w-[20rem] rounded-[100%] overflow-hidden grid ">
                            <div id="test" class="flex col-start-1 row-start-1 justify-self-start align-self-center  items-center justify-center h-full w-full  bg-white transition-width duration-[1000ms] ease"> 
                            </div>
                            <div class="h-[90%] rounded-full col-start-1 row-start-1 justify-self-center align-self-center w-[90%] bg-black text-white  items-center flex jsutify-center"><p class="text-[3rem] font-bold self-center text-center w-[100%]">20%</p></div>

                     </div>
                     
                   
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>

       </div>

</template>