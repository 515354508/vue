<template>
    <div class="login">
            <div class="left">
                <div class="left_top">
                    <div class="left_icon"><img src="../assets/left_icon.svg" /></div>
                    <div>
                        <p class="one">剁手网</p>
                        <p class="two">Welcome to use</p>
                    </div>
                </div>
            </div>
         <div class="login_right">
            <div class="right">
                <p class="welcome">欢迎您使用<span class="title">剁手网</span></p>
                <p class="welcome_bottom">Welcome to use </p>
            <div class="bottom">
                <p class="account">账号</p>
                <div class="box_phone">
                    <i class="icon-phone phone"></i>
                    <input class="input_accout" type="text" v-model="phone" placeholder="请输入您的手机号码">
                </div>
                <p class="account">密码</p>
                <div class="box_phone">
                    <i class="icon-phone password"></i>
                    <i class="icon-phone eye"></i>
                    <input class="input_accout" type="password" v-model="password" placeholder="请输入您的密码">
                </div>
                <input type="button" class="btn_login" value="登录" @click="login()">
            </div>
            </div>
         </div>
    </div>
</template>
<script>

export default {
    name:'Login',
    data () {
        return {
            phone:'',
            password:''
        }
    },
    methods:{
        login(){
            window.localStorage.setItem('account','111');
            this.$router.push('/Index');
        }        
    }
}
</script>
<style  scoped>
.login{
    display: flex;
    flex-direction: row;
    margin-top: 6%;
    margin-left: 13.6%;
    width:75%;
    height: 74%;
    background: #FFFFFF;
    box-shadow: 0 0 20px 4px rgba(0,0,0,0.06);
}
.login_right{
    z-index: 99;
    width: 75%;
    height:100%;
    margin-left: 47%
}
.welcome{
    padding-top: 20px;
    font-family: PingFangHK-Medium;
    font-size: 28px;
    color: #4D4D4D;
}
.title{
    font-family: PingFangHK-Medium;
    font-size: 28px;
    color: blue;
    line-height: 40px;
}
.welcome_bottom{
    font-family: PingFangHK-Medium;
    font-size: 10px;
    color: #4D4D4D;
    margin-top: -14px;
}
.right{
    margin-left: 50px;
}
.icon-phone{
  width: 22px;
  height: 22px;
  margin:5px 28px; 
  background-repeat: no-repeat; 
  background-position: center;
  background-size: cover;
  display: block; 
}
.phone{
  background-image:url("../assets/phone.png") ;
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  color: #B2B2B2;
}
.password{
  background-image:url("../assets/密码.svg") ;
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  color: #B2B2B2;
}
.eye{
  background-image:url("../assets/隐藏.png") ;
  position: absolute;
  margin-top: 10px;
  margin-left: 460px;
  color: #B2B2B2;
}
.box_phone .input_accout{
  border-radius: 4px;
  border-radius: 4px;
  width: 500px;
  height: 49px;
  font-family: PingFangHK-Regular;
  font-size: 18px;
  text-indent: 28px;
  color: #999999;
  text-indent: 48px;
  border: none;
  outline: none;
}
.btn_login{
  margin-top: 6%;
  width: 500px;
  height: 56px;
  background: #188FFF;
  border-radius: 4px;
  border-radius: 4px;
  border: none;
  font-family: PingFangHK-Medium;
  font-size: 14px;
  color: #FFFFFF;
}
.account{
    font-family: PingFangHK-Regular;
    font-size: 18px;
    color: #4D4D4D;
}
.bottom{
    margin-top: 60px;
}
.left{
  position:fixed; 
  width: 35.4%;
  height: 74.1%;
  background-size: 100% 100%;
  background-image: url('../assets/b.png');
  background-repeat: no-repeat;
}
.left_top{
    width: 230px;
    height: 55px;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
}
.left_icon{
    margin-right: 14px;
}
.one{
    margin-top: -8px;
    font-family: PingFangHK-Medium;
    font-size: 28px;
    color:red;
    }
.two{
     margin-top: -28px;
    font-family: PingFangHK-Medium;
    font-size: 0.1px;
    color: red;
}
</style>