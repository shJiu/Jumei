<template>
	<div class="banner">
		<h3>{{title}}</h3>
		<router-link :key="index" :to="{name:'detal',params:{id:item.item_id}}" class="list" v-for="(item,index) in data">
			<div class="img">
				<img v-lazy="item.image_url_set.dx_image.url[800]" alt="">
			</div>
			<div class="mess">
				<p>{{item.name}}</p>
				<p>￥{{item.jumei_price}}</p>
				<p>{{item.product_desc}}</p>
			</div>
			<div class="biao">
				<!-- {{item.area_icon[320]}} -->
				<!-- <img :src="item.area_icon[480]" alt=""> -->
				
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:[],
				title:""
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mock/onelist.json")
			.then(function(data){
				this.data=data.data.card.material
				this.title=data.data.card.title
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		h3{
			width: 100%;
			background: #fff;
			font-size: 0.14rem;
			text-align: center;
			padding: 0.05rem 0;
		}
		.list{
			display: block;
			width: 100%;
			position: relative;
			overflow: hidden;
			.biao{
				width: 20%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 100;
				img{
					width: 100%;
					display: block;
				}
			}
			.img{
				width: 120%;
				position: relative;
				padding-top: 40%;
				img{
					width: 100%;
					display: block;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			img[lazy=loading] {
			    width: 50px;
			    height: 50px;
			    position: absolute;
				left: 0;
				top: 20%;
				right: 0;
				bottom: 0;
				margin:0 auto;
			  }
			  img[lazy=error] {
			    width: 50px;
			    height: 50px;
			    position: absolute;
				left: 0;
				top: 20%;
				right: 0;
				bottom: 0;
				margin:0 auto;
			  }
			.mess{
				width: 47%;
				font-size: 0.14rem;
				position: absolute;
				right: 6%;
				top: 0;
				
				padding: 0.2rem 0;
				p{
					&:nth-child(1){
						font-size: 0.13rem;
						color: #333;
						letter-spacing:1px;
					}
					&:nth-child(2){
						margin: 0.2rem 0 0 0;
						color: #fe4070;
						font-size: 0.16rem;
					}
					&:nth-child(3){
						font-size: 0.12rem;
						color: #999;
					}
				}
			}
		}
	}
</style>