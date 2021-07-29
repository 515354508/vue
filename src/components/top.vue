<template>
	<div class="top">
		<div class="hello">
			<div style="color: orange;">你好!&nbsp;欢迎购物！</div>
			<div class="login">
				<router-link to="/Index">首页</router-link>&nbsp;
				<router-link to="/home"><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;登录</router-link>&nbsp;
				<button type="text">退出</button>
				<router-link to="/Cart"><i class="fa fa-shopping-cart"></i>&nbsp;购物车</router-link>
			</div>
		</div>
		<div class="seach">
			<img src="../assets/logo.gif"/>
			<section id="node">
				<section style="position: absolute;right: 40px;top:50px;">
					<i class="fa fa-search" aria-hidden="true" style="color: orange;"></i>
					<input @keyup.enter="add" @click="clickInput" v-model="inputValue" type="text" placeholder="输入商品名称立即搜索..">
					<button @click="add">搜索</button>
				</section>
				<ul id="myUL" style="position: absolute;right: 60px;top: 60px;">
					<!-- 显示列表内容 -->
					<li v-for="(item,index) in list" :key='item'>
						<label>{{item}}</label>
						<button class="bu" @click="remove(index)">×</button>
					</li>
				</ul>
				<section v-show="list.length!=0" class="statistics">
					<div>
						<button @click="clearAll">清空所有搜索记录</button>
					</div>
				</section>
			</section>
			
		</div>


	</div>
</template>

<script>

	export default {
		name: "Top",
		props: {
			msg: String
		},
		
		data() {
			return {
				inputValue: "",
				list: ["xie1", "chif"]
			}
		},
		methods: {
			add() {
				this.list.push(this.inputValue);
			},
			remove: function(i) {
				this.list.splice(i, 1)
			},
			clickInput: function() {
				this.inputValue = "";
			},
			clearAll: function() {
				this.list = [];
				console.log("test");
			}
		}
	};
</script>

<style scoped>
	.hello {
		background-color: #efefef;
		height: 30px;
		padding-top: 10px;
		position: relative;
		top: -10px;
	}
	p {
		padding-left: 40px;
	}
	.login {
		position: absolute;
		right: 40px;
		top: 10px;
	}
	
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0px;
	}
	
	ul li {
		cursor: pointer;
		position: relative;
		padding: 12px 8px 12px 40px;
		background: white;
		font-size: 18px;
		width: 120px;
		height: 5px;
		margin-left: 150px;
		border: 1px solid #dadada;
		top: 15px;
		right: 20px;
	}
	
	.bu {
		position: absolute;
		right: 10px;
		top: 5px;
		border: 0;
		background-color: white;
	}
	
	ul li label {
		color: black;
		position: absolute;
		top: 2px;
		left: 5px;
	}
	
	ul li:hover {
		background: white;
	}
	
	.statistics {
		padding-left: 1290px;
		margin-bottom: 5px;
	}
	
	.login a{
		color: orange;
		text-decoration: none;
	}
</style>
