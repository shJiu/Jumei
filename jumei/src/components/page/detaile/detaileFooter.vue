<template>
	<div class="foot">
		<a href="/"><i class="fa fa-home"></i></a>
		<a href="/user"><i class="fa fa-star"></i></a>
		<a href="/book"><i class="fa fa-shopping-cart"></i></a>
		<a @click="gettab()">加入购物车</a>
		<a @click="gettab()">立即购买</a>
	</div>
</template>
<script>
	export default{
		props:["lists"],
		created(){
			
		},
		methods:{
			gettab:function(){
				console.log(this)
				this.$emit('tabCont')
				//this.$emit('tabContent',index,id)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.foot{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background:#fff;
		
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		a{
			text-align: center;
			display: block;
			font-size: 0.14rem;

			i{
				font-size: 0.2rem;
				color: #ccc;
			}
			&:nth-child(1){
				-webkit-box-flex:1;
				border-right: 1px solid #eee;
			};
			&:nth-child(2){
				-webkit-box-flex:1;
				border-right: 1px solid #eee;
			};
			&:nth-child(3){
				-webkit-box-flex:1;
				border-right: 1px solid #eee;
			};
			&:nth-child(4){
				-webkit-box-flex:3;
			};
			&:nth-child(5){
				-webkit-box-flex:3;
				background:#801a2a;
				color: #fff;
				height: 100%;
				padding: 0.15rem 0;
			};
		}
	}
</style>