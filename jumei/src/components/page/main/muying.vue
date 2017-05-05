<template>
	<div class="banner">
		<div class="ban">
			<img src="../../../../static/item_3027_2048_512-ipad2048_1492410172.jpg" alt="">
		</div>
		<div class="imglist">
			<img v-for="item in imglist" v-lazy="item.src" alt="">
		</div>
		<piclist title="疯狂转场早10点上新" :list="data"></piclist>
	</div>
</template>
<script>
import piclist from "@/components/base/imglist"
	export default{
		components:{
			piclist
		},
		data(){
			return{
				data:[],
				imglist:[
					{
						src:"../../../../static/muying1.jpg"
					},
					{
						src:"../../../../static/muying2.jpg"
					},
					{
						src:"../../../../static/muying3.jpg"
					},
					{
						src:"../../../../static/muying4.jpg"
					},
					{
						src:"../../../../static/muying5.jpg"
					},
					{
						src:"../../../../static/muying6.jpg"
					},
					{
						src:"../../../../static/muying7.jpg"
					},
					{
						src:"../../../../static/muying8.jpg"
					},
					{
						src:"../../../../static/muying9.jpg"
					},
					{
						src:"../../../../static/muying10.jpg"
					}
				]
			}
		},
		
		created(){
			this.$http.get("http://localhost:8080/mock/muying.json")
			.then(function(data){
				this.data=data.data.item_list
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		.ban{
			width: 100%;
			margin-bottom: 0.1rem;
			img{
				display: block;
				width: 100%;
			}
		}
		.imglist{
			width: 100%;
			margin-bottom: 0.1rem;
			overflow: hidden;
			img{
				width: 50%;
				float: left;
			}
		}
		
	}
</style>