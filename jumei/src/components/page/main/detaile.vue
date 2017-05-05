<template>
	<div class="banner" v-if="this.data!='' & this.datas!=''">
		<div class="title">
			<span>
				<router-link to="/" class="fa fa-angle-left"></router-link>
			</span>
			<span>{{data.short_name}}</span>
			<span>
				<router-link to="/" class="fa fa-home"></router-link>	
			</span>
		</div>
		<div class="img">
			<img class="picd" :src="datas.img" alt="">
			<img v-show="showPic" class="pic" ref="pic" :src="datas.img" alt="">
			<img :src="data.area_icon_v2" alt="" class="img-fix">
		</div>
		<div class="mess">
			<p>￥{{price}}</p>
			<p></p>
			<p>
				<span>{{shi}}</span>
				<span></span>
				<span>{{datas.buyer_number}}人已购买</span>
			</p>
		</div>
		<div class="ziying">
			<span>{{speal}}</span>
			{{data.name}}
		</div>
		<div class="yun">
			<p class="yungong">
				<span>运费</span>
				<span>{{text}}</span>
				<span>&gt;</span>
			</p>
			<div class="shuo">
				<div>说明</div>
				<div>
					<span v-for="(item,index) in datas.icon_tag">{{item.name}}</span>
				</div>
				<div>&gt;</div>
			</div>
		</div>
		<detaile-top :lists="description"></detaile-top>
		<div class="gouwu">
			<div></div>
			<div>
				<span @click="getId()">加入购物车</span>
			</div>
			<div>
				<router-link to="/book">
					<i class="fa fa-shopping-cart"></i>
					<span>购物车</span>
					<b v-if="len!=0">{{len}}</b>
				</router-link>
			</div>
		</div>
		
	</div>
</template>
<script>
import meiri from "@/components/page/main/meiri"
import detaileTop from "@/components/page/detaile/detaileTop"
	export default{
		components:{
			detaileTop
		},
		data(){
			return{
				id:"",
				data:[],
				endtime:"",
				startime:"",
				shi:'',
				datas:[],
				len:"",
				showPic:false,
				price:"",
				desp:"",
				speal:"",
				text:"",
				description:""
			}
		},
		methods:{
			getnUm:function(){
				if(window.localStorage['getstore']){
					this.len=JSON.parse(window.localStorage['getstore']).length;
				}
				
			},
			getId:function(){
				this.showPic=true;
				this.$refs.pic.className="on"
				var dd={
					title:this.data.short_name,
					src:this.datas.img,
					price:this.price
				};
				this.$store.commit('addcartlist',dd)
			},
			pricelister:function(price){
				var pri=price.split("+"),h,s;
				h=pri[0].substr(3)*1;
				s=pri[1].substr(3)*1;
				this.price=h+s;
			},
			getTime:function(time){
				var that=this;
				setInterval(function(){
					var timeOdd=new Date()*1/1000-time,
						con=parseInt(timeOdd/(24*60*60)),
						hour=parseInt((timeOdd-con*24*60*60)/(60*60)),
						mins=parseInt((timeOdd-hour*60*60-con*24*60*60)/60),
						miao=parseInt((timeOdd-hour*60*60-con*24*60*60)%60);
						that.shi="还剩"+con+"天"+hour+":"+mins+":"+miao;
						
				},1000)
			}
		},
		watch:{
			"len" (){
				this.getnUm()
			}
		},
		updated(){
			this.getnUm()
		},
		created(){
			
			this.id=this.$route.params.id
			var that=this;
			this.$http.jsonp("http://h5.jumei.com/product/ajaxStaticDetail?item_id="+this.id+"&type=global_deal")
			.then(function(data){
				this.data=data.data.data
				this.desp=this.data.price_detail.desp
				this.speal=this.data.special_tags.jm_owner
				this.description=this.data.description_info.description
			})
			this.$http.jsonp("http://h5.jumei.com/product/ajaxDynamicDetail?item_id="+this.id+"&type=global_deal")
			.then(function(data){
				this.datas=data.data.data.result
				this.endtime=data.data.data.result.end_time
				this.text=this.datas.freight.text
			})
		},
		beforeUpdate(){
			this.getTime(this.endtime)
			this.pricelister(this.desp)
		}
	}
</script>
<style lang="scss" scoped>

	.banner{
		width: 100%;
		background: #fff;
		.title{
			width: 100%;
			padding: 0.1rem;
			box-sizing: border-box;
			color: #333;
			border-bottom: 1px solid #eee;
			font-size: 0.14rem;
			text-align: center;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			span{
				display: block;
				-webkit-box-flex:1;
				text-align: center;
				&:nth-child(1){
					text-align: left;
					padding-left: 0.1rem;
					a{
						font-size: 0.25rem;
						color: #ccc;
					}
				};
				&:nth-child(3){
					text-align: right;
					padding-right: 0.06rem;
					a{
						font-size: 0.25rem;
						color: #ccc;
					}
				};
			}
		}
		.img{
			width: 100%;
			position: relative;
			.pic{
				width: 20%;
				z-index: 10;
			}
			.picd{
				width: 100%;
				display: block;
			}
			.on{
				width: 20%;
				position: fixed;
				left: 60%;
				top: 40%;
				-webkit-animation:tran 1.5s forwards;
			}
			@-webkit-keyframes tran{
				0%{
					-webkit-transform:translate(0,0);	
				}
				50%{
					-webkit-transform:translate(50%,500%);	
				}
				99.99%{
					-webkit-transform:translate(50%,500%);	
				}
				100%{
					-webkit-transform:translate(1000%,40000%);	
				}
			}
			.img-fix{
				width: 15%;
				position: absolute;
				left: 0;
				top: 0;
				
			}
		}
		.mess{
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 0 0.1rem;
			box-sizing: border-box;
			z-index: 30;
			p{
				width: 100%;
				&:nth-child(1){
					font-size: 0.3rem;
					color: #f33873;
					font-weight: bolder;
				};
				&:nth-child(3){
					font-size: 0.12rem;
					padding: 0.1rem 0;
					color: #666;
					display: -webkit-box;
					-webkit-box-align:center;
					-webkit-box-pack:center;
					span{
						display: block;
						&:nth-child(2){
							-webkit-box-flex:1;
						}
					}
				};
			}
		}
		.ziying{
			width: 100%;
			font-size: 0.14rem;
			color: #666;
			padding: 0.1rem;
			box-sizing: border-box;
			letter-spacing:1px;
			border-bottom: 1px solid #eee;
			span{
				color: #f33873;
				margin-right: 10px;
			}
		}
		.yun{
			width: 100%;
			padding: 0 0.1rem;
			box-sizing: border-box;
			margin-bottom: 0.1rem;
			.yungong{
				font-size: 0.14rem;
				width: 100%;
				display: -webkit-box;
				padding: 0.1rem 0;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				border-bottom: 1px solid #eee;
				span{
					color: #999;
					display: block;
					&:nth-child(1){
						margin-right: 10%;
					}
					&:nth-child(2){
						-webkit-box-flex:1;
						text-align:left;
						color: #333;
						font-weight: bolder;
						font-size: 0.13rem;
					};
				}
			}
			.shuo{
				width: 100%;
				display: -webkit-box;
				border-bottom: 1px solid #eee;
				padding: 0.1rem 0;
				div{
					font-size: 0.14rem;
					text-align: center;
					color: #999;
					&:nth-child(1){
						margin-right: 10%;
					}
					&:nth-child(2){
						-webkit-box-flex:1;
						overflow: hidden;
						color: #333;
						font-size: 0.12rem;
						span{
							text-align:left;
							width: 50%;
							float: left;
							margin-bottom: 0.1rem;
						}
					}
				}
			}

		}

		.pic{
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
		.gouwu{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			padding: 0.08rem 0;
			border-top: 1px solid #eee;
			position: fixed;
			bottom: 0;
			left: 0;
			background: #fff;
			div{
				font-size: 0.14rem;
				text-align: center;
				width: 20%;
				&:nth-child(2){
					-webkit-box-flex:1;
					span{
						display: block;
						padding: 0.1rem 0.1rem;
						background: #fe4070;
						color: #fff;
						border-radius: 0.2rem;
					}
				}
				&:nth-child(3){
					
						position: relative;
					a{
						color: #979797;
					}
					i{
						font-size: 0.18rem;
						display: block;
					}
					b{
						display: block;
						width: 14px;
						height: 14px;
						font-size: 8px;
						border-radius: 50%;
						background: #fe4070;
						position: absolute;
						right: 20%;
						top: -10%;
						color: #fff;
					}
				}
			}
		}
	}
</style>