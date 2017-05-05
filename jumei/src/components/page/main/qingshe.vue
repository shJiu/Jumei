<template>
	<div class="banner">
		<mainSwiper :lists="list"></mainSwiper>
		<div class="list">
			<a href="#" v-for="item in imglist">
				<img :src="item.src" alt="">
			</a>
		</div>
		<piclist title="精选活动" :list="data"></piclist>
	</div>
</template>
<script>
import piclist from "@/components/base/imglist"
import mainSwiper from "@/components/page/main/mainSwiper"
	export default{
		components:{
			piclist,
			mainSwiper
		},
		data(){
			return{
				data:[],
				list:[
					{
						src:"../../../../static/qingshe1.jpg"
					},
					{
						src:"../../../../static/qingshe2.jpg"
					}
				],
				imglist:[
					{
						src:"../../../../static/qingshe5.jpg"
					},
					{
						src:"../../../../static/qingshe6.jpg"
					},
					{
						src:"../../../../static/qingshe7.jpg"
					},
					{
						src:"../../../../static/qingshe8.jpg"
					}
				]
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mock/piclist.json")
			.then(function(data){
				this.data=data.data.item_list
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		.list{
			width: 100%;
			margin-bottom: 0.1rem;
			padding: 0.05rem 0;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			a{
				display: block;
				-webkit-box-flex:1;
				text-align: center;
				img{
					width: 100%;
					display: block;
				}
			}
		}
	}
</style>