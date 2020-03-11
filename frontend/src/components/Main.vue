<template>
     <div class="profile-card">
      <div class="top-section">
        <div class="pic">
          <img src="../assets/pic.jpg" alt="" />
        </div>
        <div class="name">임헌우</div>
        <div class="tag">flosvia</div>
      </div>

      <div class=" bottom-section">
        <div class="social-media">
          <a v-bind:href="faceBook">
            <img src="../assets/facebook.png">
          </a>
           <a onclick="alert('저의 email은 hunwoo0505@gmail.com 입니다')">
            <img src="../assets/email.png">
          </a>
           <a onclick="alert('저의 전화번호는 010-7501-1458 입니다.')">
            <img src="../assets/phone.png"> 
          </a>
        </div>

        <div class="">
          <div>{{major}}</div>
          <div class="border">|</div>
          <div>{{field}}</div>
          <div class="border">|</div>
          <div>{{persona}}</div>
        </div>
      </div>
      
      <div class="info">made by sera with reference to darkcode</div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            name: "임헌우",
            faceBook:"https://www.facebook.com/profile.php?id=100010910586326",
            email:"hunwoo0505@gmail.com",
            call:"010-7501-1458",
            major:"정보보안",
            field:"frontend",
            persona:"시바견"
        }
    },
    methods:{
      emailInfo: ()=>{
          alert("저의 email은" + this.email + "입니다.")
      },
      callInfo: ()=>{
        alert("저의 전화번호는" + this.call + "입니다");
      }
    }
}
</script>

<style src="../assets/Style.css"></style>