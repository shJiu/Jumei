<template>
	<div class="navList">
		<a :href="item.Redirect" v-for="item in lists">
			<i><img :src="item.Picture" alt=""></i>
			<span>{{item.SlideName}}</span>
		</a>
	</div>
</template>
<script>
	export default{
		props:{
			lists:{
				type:Array,
				default:function(){}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navList{
		width: 100%;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;	
		a{
			background: #fff;
			display: block;
			-webkit-box-flex:1;
			font-size: 0.12rem;
			display: -webkit-box;
			-webkit-box-orient:vertical;
			text-align: center;
			padding: 0.07rem 0;
			i{
				display: block;
				margin-bottom: 3px;
				img{
					width: 100%;
				}
			}
			span{
				display: block;
				font-size: 0.14rem;
				color: #242424;
			}
		}
	}
</style>