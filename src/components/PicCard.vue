<template>
    <div style=" background-color: #efefef">
        <el-row class="box">
            <el-col  v-for="(o) in goods" :key="o.id" style="padding-left:10px"  >
                <el-card :body-style="{ padding: '0px'}">
                <img :src="o.cover" class="image" >
                <div style="padding: 14px;">
                    <span>{{o.text}}</span>
                    <span>{{o.price}}元</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ o.address }}&nbsp;{{o.type}}</time>
                    <el-button type="text " class="button" @click="push(o.id)">查看商品</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
} from 'vuex'
Vue.use(ElementUI);
export default {
    computed:{
			...mapState('counter', ['goods']),
		},
    data() {
        return {
        currentDate: new Date()
        };
    },
    methods:{
        push(e){
            this.$router.push('/Goods?'+e);           
        }
    }
}
</script>
<style scoped>

.box{ 
    margin-top: 20px;
    margin-left: 20px;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: row;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 350px;
    display: block;
    height: 350px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
