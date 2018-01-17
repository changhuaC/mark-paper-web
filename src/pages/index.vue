<template>
  <div class="index-container">
    <div class="login-container">
      <h1 v-text="sitName"></h1>
        <h2 v-text="slogan"></h2>
      <div class="form-container">
        <form v-on:submit.prevent>
          <div class="user-account">
            <input id="user-account" v-model="userAccount" v-on:focus="clearInfo" placeholder="请输入手机号或邮箱" type="text">
          </div>
          <div class="user-password">
              <input id="user-password" v-model="userPassword" v-on:focus="clearInfo" placeholder="请输入密码" type="password">
          </div>
          <div class="find-password">
            <div>
              <router-link to="findPassword">忘记密码</router-link>
            </div>
          </div>
          <div>
              <button type="submit" v-on:click="login"  class="button-login">登陆</button>
          </div>
        </form>
      </div>
    </div>
    <div class="regist-container">
        <div>没有帐号？</div>
        <div></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                sitName: '好评',
                slogan:'上好评，享好评',
                userAccount:'',
                userPassword:''
            }
        },
        methods:{
            login(){
                if(this.userAccount.length<1){
                    this.userAccount='请输入密码'
                }
                console.log(this.userAccount+this.userPassword)
            },
            clearInfo(event,target){
                console.log(event)
                console.log(target)
                if(this.userAccount==='请输入密码'){
                    this.userAccount=''
                }
            },
            checkLoginInfo(){
                console.log("checkLoginInfo")
                return false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index-container {
    background-color:#EDF4FA;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    input{
        height: 48px;
        line-height: 24;
        background: transparent;
        border:none;
        outline:none;
        resize: none;
        font-size: 18px;
        color: #9da09b;
        width: 100%;
      }
    .login-container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border:0px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      background-color: white;
      height: 503px;
      width: 432px;
      .form-container{
        width: 80%;
        .user-account{
          margin-top: 40px;
          border-bottom:solid 1px  #cccbcb
        }
        .user-password{
          margin-top: 20px;
          border-bottom:solid 1px  #cccbcb
        }
        .find-password{
          height: 37px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .button-login{
          background: #0f88eb;
          border: 1px solid #0f88eb;
          width: 100%;
          margin-top: 30px;
          height: 36px;
          font-size: 14px;
          color:white;
          border-radius: 3px;
          line-height: 32px;
        }
        .button-login:hover{
          background-color: #0d79d1;
        }
      }
    }
    .regist-container{
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      border:0px;
      border-top: 1px solid #ebebeb;
      height: 70px;
      width: 432px;
      background-color: #f6f6f6;
      display: flex;
    }
  }
</style>