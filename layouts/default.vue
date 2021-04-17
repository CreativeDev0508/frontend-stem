<template >
  <!-- <div oncontextmenu="return false">  -->
    <div>
    <Nuxt />
    <ClientOnly>
        <notifications position="top center" group="all" class="notify"/>
    </ClientOnly>
  </div>

</template>


<style>
 @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
html {
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: auto;
}
::-webkit-scrollbar {
  width: 4px;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #000000;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.notify{
  padding: 10px 10px ;
  justify-content: center;
  justify-self: center;
  display: flex;
}

</style>
