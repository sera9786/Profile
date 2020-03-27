<template>
  <div>
    <profile v-bind="hunwoo"/>
    <profile v-bind="user"/>
  </div>
</template>

<script> 
import Profile from "./Profile"

import hunwoo from "../assets/Data/sera/hunwoo.json"
import user from "../assets/Data/ex/user.json"
import haerin from "../assets/Data/haerin/haerin.json"
export default {
  data(){
    return{
      hunwoo,
      user,
      haerin
    }
  },
  components:{
    profile: Profile,
  }
}
</script>