<template>
	<div class="picList" v-else>
		<div class="title">{{list.Title}}</div>
		<div class="picer">
			<router-link v-for="item in list.Products" :to="{ name: 'detaile', params: { id: item.ProductID }}" key="item">
				<dl>
					<dt :style='{backgroundImage:"url("+item.Pictures+")"}'>
					</dt>
					<dd>
						<p>{{item.Subject}}</p>
						<p>￥{{item.FinalPrice}}</p>
					</dd>
				</dl>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			list:{
				type:Object,
				default:function(){}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.picList{
		width: 100%;
		
		margin-top: 0.1rem;
		.title{
			width: 100%;
			border-bottom: 1px solid #eee;
		    text-align: center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-size: 0.14rem;
		    padding: 0.15rem 0;
		}

		.picer{
			width: 100%;
			overflow: hidden;
			a{
				display: block;
				float: left;
				width: 49%;
				background: #fff;
				padding:0.05rem 0.1rem;
				box-sizing: border-box;
				text-align: center;
				margin-bottom:0.07rem;
				&:nth-child(odd){
					margin-right:0.07rem;
				};
			}
			dl{
				width: 100%;
				
				
				dt{
					width: 100%;
					padding-top: 100%;
					background-size: cover;
					background-position: center center;
				}
				dd{
					overflow: hidden;
					text-overflow: ellipsis;
		   			white-space: nowrap;
					width: 100%;
					font-size: 0.14rem;
				}
			}
		}
	}
</style>