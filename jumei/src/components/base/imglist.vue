<template>
	<div class="ba">
		<div class="list">
			<h3>{{title}}</h3>
			<a :href="item.url" class="lists" v-for="item in list">
				<div class="img">
					<img v-lazy="item.image_url_set.main[640]" alt="">
					<span>{{item.discount_string}}</span>
				</div>
				<div class="mess">
					<div>
						<p>{{item.title}}</p>
						<p>{{item.start_time}}</p>
					</div>
					<div></div>
					<div>
						<img v-lazy="item.image_url_set.brand[320]" alt="">
					</div>
				</div>
			</a>
		</div>
	</div>
	
</template>
<script>
import meiri from "@/components/page/main/meiri"
	export default{
		props:{
			list:{
				type:Array,
				default:function(){}
			},
			title:{
				type:String,
				default:""
			}
		}
	}
</script>
<style lang="scss" scoped>
.ba{
	width: 100%;
	.list{
		width: 100%;
		h3{
			width: 100%;
			background: #fff;
			text-align: center;
			font-size: 0.14rem;
			padding: 0.15rem 0;
			color: #333;
		}
		.lists{
			width: 100%;
			.img{
				width: 100%;
				position: relative;

				img{
					display: block;
					width: 100%;
				}
				img[lazy=loading] {
			    width: 50px;
			    height: 50px;
			    position: absolute;
			    padding-top: 40%;
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
				span{
					position: absolute;
					left: 0;
					display: block;
					background: #000;
					padding: 0.01rem 0.02rem;
					color: #fff;
					font-size: 0.12rem;
					bottom:10%;
				}
			}
			.mess{
				width: 100%;
				padding:0.15rem 0.1rem;
				box-sizing: border-box;
				background: #fff;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				div{
					font-size: 0.14rem;
					&:nth-child(1){
						p{
							&:nth-child(1){
								color: #333;
								font-size: 0.14rem;
								margin-bottom: 0.05rem;
							}
							&:nth-child(2){
								color: #999;
								font-size: 0.12rem;
							}
						}
					}
					&:nth-child(2){
						-webkit-box-flex:1;
					}
					&:nth-child(3){
						width: 20%;
						img{
							display: block;
							width: 100%;
						}
					}
				}
			}
		}
	}
}
</style>
