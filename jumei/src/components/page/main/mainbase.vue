<template>
	<div> 
		<main-swiper v-if="type=='Slides'" :lists="lister"></main-swiper>
		<mainnav-list v-if="type=='Col4ImageWithTitleNoDesc'" :lists="lister"></mainnav-list>
		<main-banner v-if="type=='Col1ImageOnly'" :lists="lister"></main-banner>
		<mainpic-list v-if="type=='Col2LeftTop1LeftBottom1Right1'" :lists="lister" :Channel="Channel"></mainpic-list>
		<mainpic-list v-if="type=='Col2ImageOnly'" :lists="lister" :Channel="Channel"></mainpic-list>
		<pic-scroll v-if="type=='Col3AndHalfWithTitleAndDesc'" :lists="lister"></pic-scroll>
	</div>
</template>
<script>
	import mainSwiper from "@/components/page/main/mainSwiper"
	import mainBanner from "@/components/page/main/mainBanner"
	import mainnavList from "@/components/page/main/mainnavList"
	import mainpicList from "@/components/page/main/mainpicList"
	import picScroll from "@/components/page/main/picScroll"
	export default{
		components:{
			mainSwiper,
			mainBanner,
			mainnavList,
			mainpicList,
			picScroll
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