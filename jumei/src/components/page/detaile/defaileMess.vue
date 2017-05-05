<template>
	<div class="mess">
		<p v-if="lists.Subject!=''">{{lists.Subject}}</p>
		<p>
			<span>￥{{lists.FinalAmount}}</span>
			<span>￥{{lists.FinalPrice}}</span>
			<span></span>
			<span>月销{{lists.MonthSalesNum}}件</span>
		</p>
		<p>邮费：{{lists.Postage}}</p>
	</div>
</template>
<script>
	export default{
		props:["lists"]
	}
</script>
<style lang="scss" scoped>
	.mess{
		width: 100%;
		padding: 0.1rem 0;
		background: #fff;
		p{
			width: 100%;
			padding: 0 .15rem;
			box-sizing: border-box;
			&:nth-child(1){
				text-align: left;
			    max-height: 1.2rem;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
			    font-size: 0.18rem;
			};
			&:nth-child(2){
			    display: -webkit-box;
			    -webkit-box-align:center;
			    -webkit-box-pack:center;
			    border-bottom: 1px solid #ccc;
			    padding: 0.1rem;
			    box-sizing: border-box;
			    span{
			    	display: block;
			    	text-align: center;
			    	&:nth-child(1){
			    		color:#991f33;
			    		font-size: 0.16rem;
			    		margin-right: 0.1rem;
			    	}
			    	&:nth-child(2){
			    		color:#999;
			    		font-size: 0.14rem;
			    	}
			    	&:nth-child(3){
						-webkit-box-flex:1;
			    	}
			    	&:nth-child(4){
						color:#999;
			    		font-size: 0.10rem;
			    	}
			    }
			}
			&:nth-child(3){
				padding: 0.05rem 0.1rem 0 0.1rem;
				box-sizing: border-box;
				span{
					color: #999;
					font-size: 0.1rem;
				}
			}
		}
		font-size: 0.14rem;
	}
</style>