<template>
	<div class="picList">
		<div class="title">{{name}}</div>
		<div class="picer">
			<router-link  v-for="item in piclist1" :to="{ name: 'detaile', params: { id: item.ProductID }}" key="item">
				<dl>
					<dt>
						<img v-lazy="item.Pictures" alt="">
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
<script type="text/javascript">
	export default{
		props:{
			name:{
				type:String,
				default:""
			},
			piclist1:{
				type:Array,
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
		    text-align: center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-size: 0.14rem;
		    padding: 0.05rem 0;
		    background: #fff;
		}
		.picer{
			width: 100%;
			overflow: hidden;
			text-align: center;
			a{
				width: 100%;
				text-align: center;
				background: #fff;
				margin-bottom:0.07rem;

				dl{
					width: 100%;
					background: #fff;
					padding: 0.05rem 0.1rem;
					box-sizing: border-box;
					display: -webkit-box;
					-webkit-box-align:center;
					-webkit-box-pack:center;
					border-bottom: 1px solid #eee;
					dt{
						width: 30%;
						position: relative;
						padding-top: 40%;
						margin-right: 0.1rem;
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
					dd{
						-webkit-box-flex:1;
						
						font-size: 0.14rem;
						p{
							text-align: left;
							
							&:nth-child(1){
								color: #333;
								margin-bottom: 0.2rem;
							}
						    &:nth-child(2){
								font-size: 0.16rem;
								color: #fe4070;
						    }
						}
					}
				}
			}
			
			
		}
	}
</style>