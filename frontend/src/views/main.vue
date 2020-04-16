<template>
  <div>
    <div>
      <info/>
    </div>
    <!-- <div>
      우리동아리원은 이렇게 있어

      <li>
        <a></a><profile v-bind="hunwoo"/>
      </li>
    </div> -->
  </div>
</template>

<script> 
// import Profile from "../components/Profile"
import info from "../components/info"
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
    // profile: Profile,
    info: info
  }
}
</script>