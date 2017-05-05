<template>
	<header>
		<input type="text" placeholder="搜索商品 分类 功效">
		<span @click="tab()">搜索</span>
	</header>
</template>
<script>
	export default{
		methods:{
			tab:function(){
				this.$emit("tabbig")
			}
		}
	}
</script>
<style lang="scss" scoped>
	header{
		width: 100%;
		background:#fff;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		padding: 0.1rem 0.1rem;
		box-sizing: border-box;
		input{
			display: block;
			height: 0.3rem;
			-webkit-box-flex:1;
			background:  #eee;
			border:0;
			color: #fff;
			border-radius: 0.2rem;
			
		}
		input::-webkit-input-placeholder{
			text-align: center;
		}
		span{
			width: 15%;
			display: block;
			text-align: center;
			font-size: 0.14rem;
			color: #000;
		}
	}
</style>