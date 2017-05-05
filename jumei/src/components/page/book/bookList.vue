<template>
	<div class="booklist"> 
		<div class="title">
			大家都在买的宝贝
		</div>
		<div class="list">
			<dl v-for="item in list">
				<dt>
					<img :src="item.Pictures" alt="">
				</dt>

				<dd>
					<p>{{item.Subject}}</p>
					<p>￥{{item.FinalPrice}}</p>
				</dd>
			</dl>
		</div>
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
				type:Array,
				default:function(){}
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.booklist{
		width: 100%;
		overflow: hidden;
		margin-bottom: 0.55rem;
		.title{
			width: 100%;
			text-align: center;
			font-size: 0.14rem;
			background: #fff;
			padding: 0.1rem 0;
			border-bottom: 1px solid #eee;
		}
		dl{
			float: left;
			width: 49%;
			background: #fff;
			padding: 0 0.1rem;
			box-sizing: border-box;
			text-align: center;
			margin-bottom: 0.07rem;
			 &:nth-child(odd){
				margin-right: 0.07rem;
			};
			dt{
				width: 100%;
				img{
					display: block;
					width: 100%;
					min-height: 180px;
				}
			}
			dd{
				width: 100%;
				font-size: 0.14rem;
				p{
					text-align: center;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				}
			}
		}
	}
</style>