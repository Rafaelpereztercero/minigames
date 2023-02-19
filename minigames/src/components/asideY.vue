
<script>


window.onload = function() {
    
    document.getElementById("asidey").addEventListener("click",function() {
              
             
              

            })
            document.getElementById("asidey").addEventListener("click",function() {
                   document.getElementById("asideact").classList.remove("translate-x-[1000px]")
            })
            document.getElementById("close").addEventListener("click",function() {
                   document.getElementById("asideact").classList.add("translate-x-[1000px]")
     
            })}</script>
<template>
  
    <div class="sm:hidden h-[3rem] border-[1px] w-[4rem] hover:bg-gray-600  rounded flex justify-center p-[0.8rem]">
    <div id="eng" class="flex flex-col justify-around h-[100%] self-center items-center ">
    <div class="w-[1rem] border-[0.1px] "></div>
    <div class="w-[1rem] border-[0.1px] rounded"></div>
    <div class="w-[1rem] border-[0.1px] rounded"></div>
</div>
  </div>
</template>