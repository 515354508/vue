<template>
<div>
	<div>
		<Top></Top>
	</div>
	<div class="box center" >		
		<div>
			<div class="block wid" >
				<img :src="img">
			</div>
			<div class="box" >
				<div v-for="value in goods[id].images" :key="value" style="margin: 13px;" v-on:click="show($event)">
					<img  :src="value" />
				</div>
			</div>
		</div>		
		<div style="margin-left: 100PX;height: 500px;">
			<h4>{{goods[id].text}}</h4>
			<div class="color">
				<p >价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:40px">{{goods[id].price}}</span></p>
			</div>
			<p>发货地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{goods[id].address}}</p>
			<p>付款方式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{goods[id].type}}</p>
<!-- 			<el-input v-model="input" placeholder="请输入数量"></el-input> -->
			<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			<div style="margin-top:30px">
				<el-button type="warning" style="width:200px" round @click="submitForm()" >立即购买</el-button>
				<el-button type="danger" style="width:200px" @click="submitForm();addToCart(goods[id]);push()">加入购物车</el-button>				
			</div>
			<p style="margin-top:30px;color:blue">服务承诺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正品承诺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;急速退款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赠运费险&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七天无理由退换&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
		</div>
		<el-dialog title="登陆" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="30%">
      		<login-name v-on:listen="listen"></login-name>
    	</el-dialog>

	</div>
</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Top from './top';
import LoginName  from './alert';
import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
} from 'vuex'
	Vue.use(ElementUI);
	export default{
		name:'Goods',
		components: {
			LoginName,
			Top
		},
		computed:{
			...mapState('counter', ['goods']),
			id(){
				return window.location.href.substring(window.location.href.length-1);
			},

		},
		data(){
			return{
				img:'./static/images/a01_big.jpg',
				num: 1,			
        		dialogTableVisible: false
			}
		},
		methods:{
			...mapActions('counter', ['addToCart']),
			//显示大图
			show(e){
				var str=e.target.src;
				var e =str.replace(".jpg","_big.png");
				this.img=e	
			},
			//验证是否登录
			submitForm(){
				var a=window.localStorage.getItem('account');
				// if(a==''||a==undefined){
					this.dialogTableVisible=true;
				// }          	
			},
			//接收子组件的传值，使弹窗隐藏
			listen(){
				this.dialogTableVisible=false;
			},
			push(){
				this.$router.push('/Cart');
			}
		}
	}
</script>
<style scoped>
	.color{
		background-color:#E6A23C;
		border-radius: 6%;
		font-size: 30px;
	}
	.box{
		display: flex;
		flex-direction: row;	
	}
	.center{
		height: 500PX;
		justify-content:center;
	}
	.none{
		display: none;
	}
	.wid{
		width: 400px;
	}
</style>
