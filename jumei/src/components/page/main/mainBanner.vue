<template>
	<div class="bannerList">
		<router-link :to="{ name: 'detaile', params: { id: lists[0].CastID }}">
			<img :src="lists[0].Picture" alt="">
		</router-link>
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
	.bannerList{
		width: 100%;
		img{
			display: block;
			width: 100%;
		}
	}
</style>