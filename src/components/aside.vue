<script>
import router from '../router'

export default {
  name: "datos",
  computed: {
    routeName() {
      return this.$route.name
    },
  },
  data() {
    return {
      users: []
    }
  },

  created() {
    if (document.cookie == "") {
      return this.users = []
    }

    
    fetch("http://localhost:3000/players?cookie=" + document.cookie.substring(5,document.cookie.length))
      .then(response => response.json())
      .then(data => {

      
        let x = 0
          if (data[x]) {
            document.getElementById("user").innerHTML = ` <img class="self-center w-[10rem]" src="/Gameboy.png" />
          
                                        <div  id="pUser" class="flex self-center mt-[-1rem] w-[4rem] h-[4rem] overflow-hidden">
                                         <img id="pImg" class=" rounded  cursor-pointer   self-center object-cover h-[4rem] w-[4rem]" src=${data[x].photo}>
                                         <button id="logout" class=" hidden rounded  self-center h-[4rem] border-[1px] w-[4rem]">Logout</button>
                                         </div>`
            document.getElementById("logout").addEventListener("click", function () {
              document.cookie = "auth="
              router.push("/")
            })
            document.getElementById("pUser").addEventListener("mouseover", function () {

              document.getElementById("logout").classList.remove("hidden")
              document.getElementById("pImg").classList.add("hidden")
            })
            document.getElementById("pUser").addEventListener("mouseout", function () {
              document.getElementById("logout").classList.add("hidden")
              document.getElementById("pImg").classList.remove("hidden")
            })
            document.getElementById("noneUser").classList.add("hidden")
            return this.users = data[x]
          }
        

      })

  },
  methods: {
    load(t) {
      router.push(t)
    },
    
  },
  screen: {
    'mz': '1280px',
  }

};


</script>

<template>

  <!-- PHONE BURGER  -->



  <!-- DESKTOP BURGER  -->
  <div class="hidden sm:inline">

    <div class="hidden sm:inline w-full h-full flex flex-col ">
      <div class="flex flex-no-wrap">

        <div style="min-height: 95vh"
          class="flex rounded-br-lg w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col  ">
          <div class="flex flex-col text-[1.2rem] text-blue-400 self-center font-bold">
            <div id="user" class="flex flex-col">
              <img class="self-center w-[10rem]" src="/Gameboy.png" />
            </div>

            <div id="noneUser"
              class="flex flex-col mx:flex-row flex-wrap justify-center items-center mx:justify-between mx:items-between p-[0.4rem] text-[0.8rem] ">
              <div v-on:click="load('Login')"
                class="text-[white] cursor-pointer hover:bg-gray-900 rounded w-[4rem] text-center border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">
                Login</div>
              <div v-on:click="load('Register')"
                class="text-[white] cursor-pointer mt-[1rem] mx:mt-[0] hover:bg-gray-900 rounded text-center w-[4rem] border-solid border-white border-[1px] p-[0.2rem] bg-gradient-to-br from-current via-purple-900 to-rose-600">
                Register
              </div>
            </div>

          </div>

          <div class="flex flex-no-wrap flex-col justify-between h-[20rem] mt-[1rem]">
            <div v-on:click="load('/')"
              class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center  ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" fill="#ffffff"
                version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 495.398 495.398" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <g>
                        <path
                          d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z">
                        </path>
                        <path
                          d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z">
                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <div class="self-center items-center  col-start-4  mx:inline hidden">Home</div>
            </div>
            <div v-on:click="load('Games')"
              class=" hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center  ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" fill="#ffffff"
                viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M798.071 357.531c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm93.628 92.093c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm-189.305 0c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zm95.677 95.164c-16.527 24.259-51.62 24.259-68.147 0-9.185-13.476-9.185-32.01 0-45.486 16.527-24.259 51.62-24.259 68.147 0 9.185 13.476 9.185 32.01 0 45.486zM360.192 428.417c0-53.017-42.983-96-96-96s-96 42.983-96 96 42.983 96 96 96 96-42.983 96-96zm40.96 0c0 75.638-61.322 136.96-136.96 136.96s-136.96-61.322-136.96-136.96 61.322-136.96 136.96-136.96 136.96 61.322 136.96 136.96z">
                  </path>
                  <path
                    d="M983.038 727.533c-.352 61.995-50.737 112.151-112.843 112.151-39.998 0-76.347-20.949-96.661-54.546-5.852-9.679-18.443-12.782-28.122-6.929s-12.782 18.443-6.929 28.122c27.659 45.746 77.229 74.314 131.712 74.314 84.943 0 153.805-68.844 153.805-153.764l-1.254-19.506-40.634-281.277c-23.484-162.304-162.639-282.733-326.691-282.733H467.343c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h188.078c143.699 0 265.584 105.483 286.153 247.638l40.355 278.923 1.109 16.649z">
                  </path>
                  <path
                    d="M511.904 687.705c90.526 0 173.645 43.889 225.067 116.315 6.548 9.223 19.333 11.391 28.555 4.843s11.391-19.333 4.843-28.555c-59.025-83.133-154.528-133.562-258.465-133.562-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM42.071 710.884l40.355-278.923c20.569-142.154 142.454-247.638 286.153-247.638h188.078c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H368.579c-164.052 0-303.207 120.429-326.691 282.733L1.419 705.802.045 725.519C0 811.8 68.862 880.644 153.805 880.644c54.483 0 104.053-28.568 131.712-74.314 5.852-9.679 2.75-22.27-6.929-28.122s-22.27-2.75-28.122 6.929c-20.314 33.598-56.663 54.546-96.661 54.546-62.105 0-112.491-50.155-112.843-112.151l1.109-16.649z">
                  </path>
                  <path
                    d="M512.096 646.745c-103.937 0-199.44 50.429-258.465 133.562-6.548 9.223-4.38 22.007 4.843 28.555s22.007 4.38 28.555-4.843c51.423-72.425 134.541-116.315 225.067-116.315 11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z">
                  </path>
                </g>
              </svg>
              <div class="self-center items-center col-start-4 mx:inline hidden">Games</div>
            </div>
            <div v-on:click="load('Shop')"
              class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center  ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" fill="#ffffff"
                version="1.1" id="XMLID_269_" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="shop-cart">
                    <g>
                      <circle cx="9" cy="21" r="2"></circle>
                    </g>
                    <g>
                      <circle cx="19" cy="21" r="2"></circle>
                    </g>
                    <g>
                      <path d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="self-center items-center col-start-4  mx:inline hidden">Shop</div>

            </div>
            <div v-on:click="load('Inventory')"
              class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" version="1.1"
                id="VAULT" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" xml:space="preserve" fill="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path fill="#ffffff"
                      d="M1762.581,1.514H37.419c-17.352,0-31.407,14.06-31.407,31.407v1557.842 c0,17.342,14.056,31.406,31.407,31.406h217.792v144.909c0,17.342,14.065,31.407,31.407,31.407h245.651 c17.352,0,31.407-14.065,31.407-31.407v-144.909h672.647v144.909c0,17.342,14.057,31.407,31.408,31.407h245.649 c17.343,0,31.408-14.065,31.408-31.407v-144.909h217.792c17.342,0,31.407-14.064,31.407-31.406V32.92 C1793.988,15.574,1779.923,1.514,1762.581,1.514z M500.862,1735.671H318.026v-109.927h182.835V1735.671z M1481.974,1735.671 h-182.835v-109.927h182.835V1735.671z M215.154,199.597h1369.691v1230.754H215.154V199.597z M152.339,1027.651H68.826V596.919 h83.513V1027.651z M1731.173,1559.354H68.826v-468.894h83.513v371.298c0,17.342,14.057,31.408,31.408,31.408h1432.506 c17.343,0,31.406-14.066,31.406-31.408V168.19c0-17.347-14.063-31.407-31.406-31.407H183.747c-17.351,0-31.408,14.06-31.408,31.407 v365.915H68.826V64.328h1662.347V1559.354z">
                    </path>
                    <path fill="#ffffff"
                      d="M1202.266,514.826c-0.763-0.964-1.569-1.906-2.458-2.796c-0.89-0.89-1.832-1.696-2.796-2.456 C1120.456,434.335,1015.561,387.842,900,387.842c-115.556,0-220.443,46.484-296.999,121.712c-0.973,0.767-1.924,1.578-2.818,2.473 c-0.898,0.898-1.708,1.847-2.475,2.82C522.48,591.403,476,696.286,476,811.839c0,115.539,46.471,220.417,121.686,296.968 c0.771,0.982,1.586,1.941,2.493,2.845c0.907,0.902,1.862,1.718,2.844,2.488c76.551,75.219,181.429,121.695,296.977,121.695 c115.557,0,220.447-46.489,297.003-121.721c0.964-0.763,1.911-1.57,2.805-2.463c0.893-0.896,1.704-1.841,2.467-2.81 C1277.511,1032.287,1324,927.396,1324,811.839C1324,696.274,1277.502,591.381,1202.266,514.826z M1196.258,843.247h63.473 c-6.582,76.025-36.775,145.377-83.251,200.659l-44.789-44.788c-12.265-12.265-32.152-12.265-44.416,0 c-12.265,12.265-12.265,32.152,0,44.415l44.784,44.79c-55.278,46.471-124.63,76.66-200.651,83.251v-63.481 c0-17.342-14.065-31.402-31.407-31.402c-17.352,0-31.408,14.061-31.408,31.402v63.481c-76.029-6.591-145.381-36.78-200.66-83.256 l44.784-44.785c12.264-12.263,12.264-32.146,0-44.415c-12.26-12.256-32.148-12.265-44.417,0l-44.784,44.784 c-46.476-55.278-76.666-124.63-83.255-200.655h63.48c17.342,0,31.408-14.062,31.408-31.408s-14.065-31.407-31.408-31.407h-63.48 c6.589-76.025,36.779-145.375,83.255-200.655l44.784,44.789c6.134,6.132,14.17,9.199,22.206,9.199 c8.036,0,16.081-3.067,22.21-9.199c12.264-12.264,12.264-32.15,0-44.417l-44.784-44.789c55.278-46.476,124.63-76.667,200.66-83.253 v63.476c0,17.347,14.056,31.408,31.408,31.408c17.342,0,31.407-14.061,31.407-31.408v-63.476 c76.025,6.585,145.373,36.777,200.656,83.253l-44.789,44.789c-12.265,12.266-12.265,32.152,0,44.417 c6.129,6.132,14.17,9.199,22.211,9.199c8.035,0,16.071-3.067,22.205-9.199l44.789-44.789 c46.476,55.28,76.669,124.628,83.251,200.655h-63.473c-17.351,0-31.407,14.061-31.407,31.407S1178.907,843.247,1196.258,843.247z">
                    </path>
                    <path fill="#333333"
                      d="M900,654.805c-86.589,0-157.037,70.445-157.037,157.034c0,86.59,70.448,157.037,157.037,157.037 c86.59,0,157.036-70.447,157.036-157.037C1057.036,725.25,986.59,654.805,900,654.805z M900,906.062 c-51.958,0-94.222-42.267-94.222-94.223c0-51.953,42.265-94.22,94.222-94.22c51.952,0,94.223,42.267,94.223,94.22 C994.223,863.794,951.952,906.062,900,906.062z">
                    </path>
                  </g>
                </g>
              </svg>
              <div class="self-center items-center text-center col-start-4  mx:inline hidden">Inventory</div>
            </div>
            <div v-on:click="load('Stats')"
              class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center  ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" viewBox="0 0 32 32"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g clip-path="url(#clip0_901_1558)">
                    <path
                      d="M29 7H30C30.553 7 31 7.447 31 8V30C31 30.553 30.553 31 30 31H2C1.447 31 1 30.553 1 30V8C1 7.447 1.447 7 2 7H19M6 28V19H10V28M14 28V13H18V28M22 28V1H26V28"
                      stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_901_1558">
                      <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <div class="self-center items-center col-start-4  mx:inline hidden">Stats</div>
            </div>

            <div v-on:click="load('Profile')" id="Profile"
              class="hover:bg-gray-900 rounded p-[1rem] cursor-pointer self-center jsutify-center mx:justfy-between w-[75%] text-white grid grid-cols-6 items-center ">
              <svg class="w-[20px] col-start-3 mx:col-start-2 fill-current inline-block self-center" fill="#000000"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z">
                  </path>
                </g>
              </svg>
              <div class="self-center items-center  col-start-4 mx:inline hidden">Profile</div>
            </div>

          </div>
          <div
            class="mt-[2.5rem] h-[12rem] mx:h-[6rem] w-[60%] bg-gray-700 self-center rounded mx:grid mx:grid-cols-3 flex flex-col p-[1rem]">
            <div class="self-center">
              <svg fill="#ffffff" class="self-center w-[1.5rem] rounded" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="self-center col-start-3  mt-[1rem] mx:mt-0">
              <svg fill="#ffffff" class="self-center w-[1.5rem] rounded" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z">
                    </path>
                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>
                    <path
                      d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z">
                    </path>
                    <path
                      d="M-143,145v512h512V145H-143z M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3 c0-27.3,22.2-49.5,49.5-49.5h157c27.3,0,49.5,22.2,49.5,49.5V374.7z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="self-center col-start-1 row-start-2 ">

              <svg fill="#ffffff" class="self-center w-[1.5rem] mt-[1rem] rounded" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M-143,145v512h512V145H-143z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7 c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="self-center col-start-3 row-start-2">

              <svg fill="#ffffff" class="self-center w-[1.5rem] mt-[1rem]  rounded" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
                xml:space="preserve" stroke="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon>
                    <path
                      d="M-143,145v512h512V145H-143z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5 c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>


      </div>



    </div>
  </div>
</template>
