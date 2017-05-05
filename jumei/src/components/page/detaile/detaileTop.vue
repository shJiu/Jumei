<template>
	<div class="pa" v-html="lists"></div>
</template>
<script>
	export default{
		props:["lists"]
	}
</script>
<style lang="scss">
	.pa{
		width: 100%;
		img{
			display: block;
			width: 100%;
		}	
	}
		
</style>