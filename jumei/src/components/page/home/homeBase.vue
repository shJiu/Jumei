<template>
	<div> 
		<main-banner v-if="type=='Col1ImageOnly'" :lists="lister"></main-banner>
		<home-li v-if="type=='ColNWithTitleAndBorder'" :lists="lister"></home-li>
		
	</div>
</template>
<script>
	import mainBanner from "@/components/page/main/mainBanner"
	import homeLi from "@/components/page/home/homeLi"
	export default{
		components:{
			homeLi,
			mainBanner
			
		},
		props:{
			list:{
				type:Object,
				default:function(){}
			}
		},
		data(){
			return {
				type:this.list.Channel['Type'],
				lister:this.list.Records,
				Channel:this.list.Channel
			}
		}
	}
</script>
<style lang="scss" scoped>

</style>