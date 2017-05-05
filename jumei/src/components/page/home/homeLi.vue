<template>
	<div class="list">
		<ul>
			<li v-for="item in lists">{{item.SlideName}}</li>
		</ul>
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
	.list{
		width: 100%;
		ul{
			width: 100%;
			text-align: center;
			overflow: hidden;
			margin:0.1rem 0;
			li{   
			 	border: 1px solid #e5e5e5;
   				float: left;
				padding: 0.05rem 0.1rem;
				font-size: 0.14rem;
				margin: 0.06rem 0.1rem;
			}
		}
	}
</style>