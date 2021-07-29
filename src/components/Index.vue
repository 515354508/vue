<template>
	<div>
		<div class="top">
			<Top></Top>
		</div>
		<div style="background-color: #EEEEEE;">
			<collapse class="look">
			  <collapse-item class="lis" v-for="(lis,index) in nav" :key="index" :title="lis.text">
			  <div style="padding-top: 10px;padding-left: 10px;">{{lis.name}}</div>
			  </collapse-item>
			</collapse>
			<div class="swiper">
				<Swiper :slides="slidesImage" v-model="index"></Swiper>
			</div>
		</div>
		<PicCard></PicCard>
	</div>
</template>

<script>
	import Swiper from './Swiper.vue'
	import config from '../../config/config.js'
	import Top from './top.vue'
	import Collapse from './Collapse.vue'
	import CollapseItem from './CollapseItem.vue'
	import PicCard from './PicCard.vue'
	export default {
		name: 'Index',
		components: {
			Swiper,
			Top,
			Collapse,
			CollapseItem,
			PicCard
		},
		data() {
			return {
				index: 0
			}
		},
		computed: {
			goods() {
				return config.goods
			},
			nav() {
				return config.nav
			},
			slidesImage() {
				return config.goods.map(item => item.poster)
			}
		}
	}
</script>

<style scoped>
	
	.swiper {
		margin-left: 300px;
		height: 500px;
		background-color: #e8e8e8;
		width: 1100px;
	}
	.look {
		display: inline-block;
		position: absolute;
		height: 500px;
		width: 300px;
		background-color: orange;
		left: 100px;
	}
	
	.lis {
		padding-top: 5px;
		height: 80px;
		position: relative;
		right: 0px;
		width: 100%;
	}
	.lis:hover{
		background-color: bisque;
	}
</style>
