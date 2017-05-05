<template>
	<div class="banner">
		<home-pinpai :lists="data[0]['Records']"></home-pinpai>
	</div>
</template>
<script>
import homePinpai from "@/components/page/home/homePinpai"
	export default{
		components:{
			homePinpai
		},
		data(){
			return{
				data:[]
			}
		},
		created(){
			this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list&platform=WAP",{
			     jsonp:"_callback"
			}).then(function(data){
				this.data=data.body.data
			})
		}
	}
</script>
<style lang="scss" scoped>
.banner{
	width: 100%;
	overflow: hidden;
		margin-bottom: 0.55rem;
	}
	nav{
		display: -webkit-box;
		overflow-x: scroll;
		background: #fff;
		a{
			display: block;
			font-size: 0.12rem;
			color: #242424;
			margin: 0 0.15rem;
			padding:0.1rem 0;
			&.on{
				border-bottom: 4px solid #242424;
			}
		}
	}
</style>