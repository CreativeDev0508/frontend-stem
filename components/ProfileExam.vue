<template>
    <div>
        <div v-if="$strapi.user">
            Hello loged in!
        </div>
        <div v-if="logedin">
            lOGEDED IN FUNCTION
        </div> 
    </div>

</template>

<script>
export default {
    computed:{
        username({$strapi}){
            console.log("from profile",$strapi.user)
            return $strapi.user.Fullname
        },
        logedin({$strapi}){
            if($strapi.user){
                console.log(true)
                return true
            }
            return false
        }
    },
}
</script>
<style scoped>
 .parent{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

 }
 .child{
    text-align: center;
    padding: 5%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .main-btn{
     max-width: 90vw;
     border: none;
     border-radius: 10px;
     margin-top: 30px;
     color: white;
     background-image: linear-gradient(to right ,  rgba(139, 52, 209, 0.753) ,rgba(52, 49, 204, 0.753));
     font-size: clamp(0.5rem, 2.5vw, 1rem);
 }
</style>