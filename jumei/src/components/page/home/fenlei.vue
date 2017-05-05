<template>
	<div class="banner">
		<router-link  :key="index" :to="{name:'detl',params:{id:item.item_id}}" class="list" v-for="(item,index) in data">
			<div class="img">
				<img v-lazy="item.image" alt="">
				<span>{{item.buyer_number_text}}</span>
			</div>
			<div class="mess">
				<span>{{item.group_name_tag}}</span>
				<span>{{item.short_name}}</span>
			</div>
			<div class="price">
				<div>
					<p>{{item.jumei_price}}</p>
					<p>{{item.single_price}}</p>
				</div>
				<div></div>
				<div><span>去开团</span></div>
			</div>
		</router-link>
	</div>
</template>
<script>

	export default{
		components:{
			// /homeBase
		},
		props:{
			data:{
				type:Array,
				default:function(){}
			}
		},
		/*methods:{
			getID:function(id,index){
				this.$emit('tabContent',index,id)
			}
		},*/
		/*data(){
			return{
				data:[]
			}
		},*/
		created(){
			/*this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list&platform=WAP",{
			     jsonp:"_callback"
			}).then(function(data){
				this.data=data.body.data
			})*/
		}
	}

</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		.list{
			display: block;
			width: 100%;
			margin-bottom: 0.1rem;
			background: #fff;
			.img{
				width: 100%;
				display: -webkit-box;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				margin-bottom: 0.1rem;
				position: relative;
				img{
					width: 40%;
					display: block;
				}
				img[lazy=loading] {
				    width: 50px;
				    height: 50px;
				    position: absolute;
					left: 0;
					top: 30%;
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
					bottom: 8%;
					display: block;
					font-size: 0.12rem;
					color:#666; 
					background: rgba(251,251,251,.8);
					border:1px solid #eee;
					padding: 0.02rem 0.1rem;
					border-radius: 0 0.2rem 0.2rem 0;
				}
			}
			.mess{
				width: 100%;
				font-size: 0.14rem;
				padding: 0 0.1rem;
				box-sizing: border-box;
				span{
					
					&:nth-child(1){
						color: #fe4070;
					}
					&:nth-child(2){
						color: #424242;
					}
				}
			}
			.price{
				width: 100%;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				
				padding: 0.1rem;
				box-sizing: border-box;
				div{
					&:nth-child(1){
						p{
							&:nth-child(1){
								color: #fe4070;
								font-size: 0.18rem;
							}
							&:nth-child(2){
								color: #999;
								font-size: 0.12rem;
							}
						}
					}
					&:nth-child(2){
						-webkit-box-flex:1;
					};
					&:nth-child(3){
						span{
							display: block;
							background: #fe4070;
							padding: 0.05rem 0.23rem;
							font-size: 0.14rem;
							color: #fff;
							border-radius: 0.3rem;
						}
					}
				}
				
			}
		}
	}
</style>