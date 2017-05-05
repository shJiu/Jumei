<template>
	<div class="picscroll">
		<div class="picbot">
			<router-link v-for="item in lists" :to="{ name: 'detaile', params: { id: item.CastID }}" :key="item">
				<dl> 
					<dt>
						<img :src="item.Picture" alt="">
					</dt>
					<dd>
						<p>{{item.SlideName}}</p>
						<p>{{item.Description}}</p>
					</dd>
				</dl>
			</router-link>
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			lists:{
				type:Array,
				default:function(){}
			}
		}
	}
	
</script>
<style lang="scss" scoped>
	.picscroll{
		background: #fff;
		width: 100%;
		margin-top: 0.1rem;
		padding: 0.1rem 0;
		.pictop{
			width: 100%;
			img{
				width: 100%;
				display: block;
			}
		}
		.picbot{
			overflow-x: scroll;
			display: -webkit-box;
			a{
				display: block;
				width: 27%;
				dl{
					text-align: center;
					dt{
						width: 100%;
						img{
							width: 100%;
							display: block;
						}
					}
					dd{
						width: 100%;
						p{
							text-align: center;
							font-size: 0.14rem;
							&:nth-child(1){
							    overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap; 
							    color: #242424; 
							};
							&:nth-child(2){
							    overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap;
							 	color:#999;
							 	font-size: 0.1rem;
							};
						}
					}
				}
			}
			
		}
	}
</style>