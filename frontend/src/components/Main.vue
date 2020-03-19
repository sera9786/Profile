<template>
    <profile v-bind="jsondata"/>
</template>

<script> 
import Profile from "./Profile"
export default {
  data(){
    return{
      jsondata : { name: "임헌우",
            faceBook:"https://www.facebook.com/profile.php?id=100010910586326",
            email:"hunwoo0505@gmail.com",
            call:"010-7501-1458",
            major:"정보보안",
            field:"frontend",
            persona:"시바견"}
    }
  },
  components:{
    profile: Profile,
  }
}
</script>