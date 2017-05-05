<template>
	<div class="pic">
		<p>宝贝评分{{lists.ProductScore}}</p>
		<div class="prodect" v-for="item in lists.TopReviews">
			<div class="mess">
				<span><img :src="item.Buyer.Avatar" alt=""></span>
				<span>{{item.Buyer.NickName}}</span>
				<span></span>
				<span>{{item.CreateTime}}</span>
			</div>
			<div class="promess">
				<p>{{item.BuyerNote}}</p>
				<p>
					<img :src="item.BuyerPictures" alt="">
					<img :src="item.BuyerPicturesWebp" alt="">
				</p>
			</div>
		</div>
		<div class="more">
			全部评价(13)
		</div>
	</div>
</template>
<script>
	export default{
		props:["lists"]
		/*data(){
			return{
				count:lists.ProductScore
			}
		}*/
		/*created:{
			get:function(){
				console.log(this.count)
			}
		}*/
	}
</script>
<style lang="scss" scoped>
	.pic{
		width: 100%;
		background: #fff;
		margin-top: 0.1rem;
		font-size: 0.14rem;
		padding: 0 0.1rem;
		box-sizing: border-box;
		&>p{
			width: 100%;
			font-size: 0.14rem;
			padding: 0.15rem 0;
		}
		.prodect{
			width: 100%;
			padding: 0.2rem 0;
			border-top: 1px solid #ccc;
			.mess{
				width: 100%;
				display: -webkit-box;
				span{
					display: block;
					&:nth-child(1){
						width: 10%;
						margin-right: 0.1rem;
						img{
							width: 100%;
							display: block;
						}
					};
					&:nth-child(2){
						color:#999;
					}
					&:nth-child(3){
						-webkit-box-flex:1;
					}
				}
			}
			.promess{
				width: 100%;
				margin-top:0.2rem;
				p{
					&:nth-child(1){
						margin-bottom: 0.1rem;
					};
					width: 100%;
					img{
						width: 15%;
					}
				}
			}
		}
		.more{
			width: 100%;
			text-align: center;
			border-top: 1px solid #ccc;
			padding: 0.1rem 0;
		}
	}
</style>