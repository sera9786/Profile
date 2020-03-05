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
          <a href="https://www.facebook.com/profile.php?id=100010910586326"
            ><i class="fab fa-facebook"></i
          ></a>
          <a href="" onclick="alert('인스타가 없다')"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" onclick="alert('연락처 : 010-7501-1458')"
            ><i class="fab fa-link"></i
          ></a>
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
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  body {
    background: url(../assets/bg.jpg) no-repeat center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .profile-card {
    width: 720px;
    overflow: hidden;
    text-align: center;
    position: relative;
    box-shadow: 0 0 10px #00000070;
  }
  
  .top-section {
    padding: 90px 60px;
    background: #2c2c54aa;
  }
  
  .message,
  .notif {
    position: absolute;
    top: 40px;
    font-size: 20px;
    cursor: pointer;
    color: #ffffff50;
  }
  
  .pic {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-bottom: 20px;
    border: 2px solid #2c3e50;
    border-radius: 50%;
    padding: 8px;
    position: relative;
  }
  
  .pic:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid #2c3e50;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: radius 50%;
  }
  
  .pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  
  .tag {
    font-size: 28px;
    color: #222;
  }
  
  .bottom-section {
    background: #f1f1f1;
    padding: 60px 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    text-transform: uppercase;
  }
  
  .border {
    color: #bbb;
    margin: 0 30px;
  }
  
  .social-media {
    position: absolute;
    width: 100%;
    top: -30px;
    left: 0;
    z-index: 1;
  }
  
  .social-media i {
    width: 80px;
    height: 80px;
    background: #2c3e50;
    border-radius: 50%;
    color: #f1f1f1;
    font-size: 35px;
    line-height: 80px !important;
    margin: 0 10px;
    position: relative;
  }
  
  .social-media i:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #2c3e50;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
    z-index: -1;
    transition: 0.4s linear;
  }
  
  .social-media i:hover:after {
    transform: scale(1.4);
    opacity: 0;
  }
  
  .name {
    font-size: 40px;
    color: #f1f1f1;
  }
  
  .info {
    color: #bbb;
    font-size: 12px;
  }
  
</style>
