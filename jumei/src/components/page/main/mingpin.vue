<template>
	<div class="banner">
		<piclist :list="data"></piclist>
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
				data:[]
			}
		},
		
		created(){
			this.$http.get("http://localhost:8080/mock/qingshe.json")
			.then(function(data){
				this.data=data.data.item_list
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		
	}
</style>