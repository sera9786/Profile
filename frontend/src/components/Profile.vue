<template>
     <div class="profile-card">
      <div class="top-section">
        <div class="pic">
          <img src="../assets/pic.jpg" alt="" />
        </div>
        <div class="name">{{this.showName}}</div>
        <div class="tag">flosvia</div>
      </div>

      <div class=" bottom-section">
        <div class="social-media">
          <a href="https://www.facebook.com/profile.php?id=100010910586326" target="_blank">
            <img src="../assets/facebook.png">
          </a>
           <a v-on:click="emailInfo()">
            <img src="../assets/email.png">
          </a>
           <a v-on:click="callInfo()">
            <img src="../assets/phone.png"> 
          </a>
        </div>

        <div class="text">
          <div>{{this.showMajor}}</div>
          <div class="border">|</div>
          <div>{{this.showField}}</div>
          <div class="border">|</div>
          <div>{{this.showPersona}}</div>
        </div>
      </div>
      
      <div class="info">made by sera, 해린 with reference to darkcode</div>
    </div>
</template>

<script>
export default {
    props:['name', 'facebook', 'email', 'call', 'major', 'field', 'persona'],
    data() { 
        return {
            showName:this.name,
            showFacebook:this.facebook,
            showEmail:this.email,
            showCall:this.call,
            showMajor:this.major,
            showField:this.field,
            showPersona:this.persona,
        }
    },
    methods:{
      emailInfo: ()=>{
        alert("저의 email은" + this.showEmail + "입니다.")
      },
      callInfo: ()=>{
        alert("저의 전화번호는" + this.showCall + "입니다");
      }
    }
}
</script>

<style src="../assets/Style.css"></style>

페이스북 href 
email,call 함수 실행
