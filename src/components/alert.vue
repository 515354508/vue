<template>
  <section>
    <el-container class="box">
        <el-form label-width="120px" >
          <el-row>
            <el-col>
              <el-form-item label="账号" style="margin-left:-30px">
                <el-input v-model="account"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="密码" style="margin-left:-30px">
                <el-input type="password" v-model="pass"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="记住密码" >
                <el-switch ></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <span class="pwwd">
            <a href="#">忘记密码？</a>
            <a href="#">还没账号,注册一个</a>
          </span>
        </el-form>
 
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button class="pwwd" style="margin-top:6px" @click="send" >取 消</el-button>
      <el-button type="primary" class="pwwd" @click="send();login()">登 录</el-button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import config from '../../config/config'
Vue.use(ElementUI);
    export default {
        name: 'LoginName',
        data(){
            return{
                account:"",
                pass:""
            }
        },
        methods:{
            send(){
                this.$emit("listen","aa");
            },
            login(){
                this.$alert('登录成功', '', {
                confirmButtonText: '确定',
                });
            }
        }
    }
</script>
<style scoped>
.pwwd{
    margin-left: 50px;   
}
</style>