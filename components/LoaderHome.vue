<template>
<div class="warped"> 
  <div class="loader">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
  </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
.warped{
  position: fixed;
  top: 0;
  left: 0;
  display: table;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 143, 187, 0.61);
  z-index: 20;
}
.loader {
	 position: absolute;
	 top: calc(50% - 32px);
	 left: calc(50% - 32px);
	 width: 64px;
	 height: 64px;
	 border-radius: 50%;
	 perspective: 800px;
}
 .inner {
	 position: absolute;
	 box-sizing: border-box;
	 width: 100%;
	 height: 100%;
	 border-radius: 50%;
}
 .inner.one {
	 left: 0%;
	 top: 0%;
	 animation: rotate-one 1s linear infinite;
	 border-bottom: 3px solid #efeffa;
}
 .inner.two {
	 right: 0%;
	 top: 0%;
	 animation: rotate-two 1s linear infinite;
	 border-right: 3px solid #efeffa;
}
 .inner.three {
	 right: 0%;
	 bottom: 0%;
	 animation: rotate-three 1s linear infinite;
	 border-top: 3px solid #efeffa;
}
 @keyframes rotate-one {
	 0% {
		 transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	 100% {
		 transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}
 @keyframes rotate-two {
	 0% {
		 transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	 100% {
		 transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}
 @keyframes rotate-three {
	 0% {
		 transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	 100% {
		 transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}
 
</style>
