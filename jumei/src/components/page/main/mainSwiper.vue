<template>
	<div class="swiper-container pic-content">
        <div class="swiper-wrapper">  
            <div class="swiper-slide" v-for="item in lists">
            	<router-link :to="{ name: 'detaile', params: { id: item.CastID }}">
					<img :src="item.src" alt="">
            	</router-link>
        		
            </div>
        </div>
        <div class="swiper-pagination"></div>
      
    </div>
</template>
<script>
	export default{
		props:{
			lists:{
				type:Array,
				default:function(){}
			}
		},
		mounted(){
		  var swiper = new Swiper('.swiper-container', {
		  		pagination: '.swiper-pagination',
		        slidesPerView: 1,
			    paginationClickable: true,
			    spaceBetween:10,
			    observer:true,
			    observeParents:true,
			    autoplay:2000
		    });
		}
	}
</script>
<style lang="scss" scoped>
	.pic-content{
		width: 100%;
		img{
			display: block;
			width: 100%;
		}
	}
</style>