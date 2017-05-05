<template>
	<div class="wrap">
		<main-nav :navlist="list" v-on:tabContent="tabContent"></main-nav>
		<!-- <header>
			<a href="javascript:;" v-for="(item,index) in title" :key="index" @click="tabContent(index)">{{item.name}}</a>
		</header> -->
		<component v-bind:is="currentView" v-bind:data="data">
			
		</component>
		<viewfooter></viewfooter>
	</div>
	
</template>
<script>
import mainNav from "@/components/base/mainNav"
import viewfooter from '@/components/base/footer'
import fenlei from '@/components/page/home/fenlei'
import pinpai from '@/components/page/home/pinpai'

	export default{
		components:{
			mainNav,
	    	viewfooter,
	    	fenlei
		},
		data(){
			return{
				currentView:'fenlei',
				data:[],
				title:[
					{
						name:"分类"
					},
					{
						name:"品牌"
					}
				],
				list:[
					{
						title:"推荐"
					},
					{
						title:"食品保健"
					},
					{
						title:"母婴健康"
					},
					{
						title:"家居"
					},
					{
						title:"女装"
					},
					{
						title:"内衣"
					},
					{
						title:"美妆"
					},
					{
						title:"鞋类"
					},
					{
						title:"礼品箱包"
					},
					{
						title:"饰品配饰"
					},
					{
						title:"运动户外"
					},
					{
						title:"下期预告"
					}
				]
			}
		},
		methods:{
			tabContent:function(index){
				var ind=index+1;
				this.getData(ind)

			},
			getData:function(ind){
				if(!ind)ind==1
				this.$http.get("http://localhost:8080/mock/coutuan"+ind+".json")
				.then(function(data){
					this.data=data.data.data
				})
			}
		},
		created(){
			this.getData(1)
		}
	}
	
</script>


<style lang='scss' scoped>
	.wrap{
		background: #f5f5f5;
	}
	header{
		width: 100%;
		display: -webkit-box;
		-webkit-box-pack:center;
		padding: 0.1rem 0;
		a{
			text-align: center;
			display: block;
			font-size: 0.14rem;
			margin:0 0.2rem;
			 color:#242424;
		}
	}
</style>