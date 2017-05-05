<template>
	<div class="wrap">
		<div class="user">
			<h3>我的聚美</h3>
			<div class="img">
				<img src="../../../static/user.png" alt="">
			</div>
			<div class="login">
				<a href="#">注册</a>
				<a href="#">登陆</a>
			</div>
		</div>
		<div class="tabmess">
			<p class="btn">
				<span><i class="fa fa-file-text-o"></i>我的订单</span>
				<span></span>
				<span>查看我的全部订单&gt;</span>
			</p>
			<div class="foot">
				<a href="#">
					<i class="fa fa-credit-card"></i>
					<span>代付款</span>
				</a>
				<a href="#">
					<i class="fa fa-inbox"></i>
					<span>代收货</span>
				</a>
				<a href="#">
					<i class="fa fa-comments"></i>
					<span>代评价</span>
				</a>
				<a href="#">
					<i class="fa fa-rmb (alias)"></i>
					<span>退货/退款</span>
				</a>
			</div>
		</div>
		<div class="zichan">
			<p class="btn">
				<span><i class="fa fa-rmb (alias)"></i>我的资产</span>
				<span></span>
				<span></span>
			</p>
			<div class="foot">
				<a href="#">
					
					<span>现金券</span>
				</a>
				<a href="#">
					
					<span>红包</span>
				</a>
				<a href="#">
					
					<span>聚美优品</span>
				</a>
				<a href="#">
					
					<span>礼品卡</span>
				</a>
			</div>
		</div>
		<div class="tabcont">
			<p class="btn">
				<span><i class="fa fa-rotate-right (alias)"></i>售后服务</span>
				<span></span>
				<span>&gt;</span>
			</p>
			<p class="btn">
				<span><i class="fa fa-paste (alias)"></i>意见反馈</span>
				<span></span>
				<span>&gt;</span>
			</p>
			<p class="btn">
				<span><i class="fa fa-truck"></i>收货地址</span>
				<span></span>
				<span>&gt;</span>
			</p>
			<p class="btn">
				<span><i class="icon-signout"></i>退出登录</span>
				<span></span>
				<span>&gt;</span>
			</p>
			<p class="btn">
				<span><i class="fa fa-file-text-o"></i>400-123-8888</span>
				<span></span>
				<span>&gt;</span>
			</p>
		</div>
		<div class="bot">
			<span>客服全天24小时在线 拨打前请记录您的UID O</span>
		</div>
		<viewfooter></viewfooter>
	</div>
</template>

<script>
import viewfooter from '@/components/base/footer'
import {formValue} from '../../public/js/form.js'
	export default{
		components:{
			viewfooter
		},
		data(){
			return{
				data:[]
			}
		},
		mounted(){
			/*var Myform=document.querySelector("#Myform")
			//var Myform=document.getElementById('Myform');
			//console.log(Myform)
			formValuedata(Myform,{checkType:1})
			function formValuedata(selector,options){
				new formValue(selector,options)
			}*/
		},
		methods:{
			/*commit:function(){
				var phone=document.querySelector("#phone");
				console.log(phone.value)
				this.$http.jsonp("http://www.haimi.com/api/member/send-quick-login-code?mobile="+phone.value+"&platform=WAP",{
				     jsonp:"_callback"
				}).then(function(data){
					console.log(data)
				})
			},
			login:function(){
				var code=document.querySelector("#code");
				this.$http.jsonp("http://www.haimi.com/api/member/quick-login?mobile="+phone.value+"&code="+code.value+"&platform=WAP",{
				     jsonp:"_callback"
				}).then(function(data){
					console.log(data)
				},function(err){
					console.log(err)
				})
			}	*/
		}
	}

</script>


<style lang='scss' scoped>
	/* .body,html,.wrap{
		width: 100%;
		height: 100%;
		background: #fff;
	} */
	.wrap{
		width: 100%;
		margin-bottom: 0.5rem;
		.user{
			width: 100%;
			font-size: 0.14rem;
			margin-bottom: 0.15rem;
			background-image: linear-gradient(-204deg,#FD465F 0,#FC5E9F 100%);
			h3{
				width: 100%;
				text-align: center;
				padding: 0.1rem 0;
				color: #fff;
				font-size: 0.16rem;
			}
			.img{
				width: 100%;
				text-align: center;
				margin:0.2rem 0 0 0;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				img{
					width: 19%;
					display: block;
				}
			}
			.login{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.15rem 0;
				a{
					display: block;
					font-size: 0.2rem;
					color: #fff;
					font-weight: bolder;
					padding: 0 0.42rem;
					&:nth-child(odd){
						border-right: 1px solid #eee;
					};
				}
			}
		}
		.tabmess{
			width: 100%;
			font-size: 0.14rem;
			background: #fff;
			margin-bottom: 0.15rem;
			.btn{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.1rem;
				box-sizing: border-box;
				border-bottom: 1px solid #eaeaea;
				span{
					display: block;
					&:nth-child(1){
						color: #000;
						i{
							font-size: 0.20rem;
							color: #666;
							margin-right: 0.15rem;
						}
					}
					&:nth-child(2){
						-webkit-box-flex:1;
					};
					&:nth-child(3){
						color: #999;
					}
				}
			}
			.foot{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.15rem 0;
				a{
					display: block;
					-webkit-box-flex:1;
					text-align: center;
					color: #666;
					i{
						display: block;
						font-size: 0.25rem;
						margin-bottom: 0.05rem;
					}
					span{
						display: block;
					}
				}
			}
		}
		.zichan{
			width: 100%;
			font-size: 0.14rem;
			background: #fff;
			margin-bottom: 0.15rem;
			.btn{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.1rem;
				box-sizing: border-box;
				border-bottom: 1px solid #eaeaea;
				span{
					display: block;
					&:nth-child(1){
						color: #000;
						i{
							font-size: 0.20rem;
							color: #666;
							margin-right: 0.15rem;
						}
					}
					&:nth-child(2){
						-webkit-box-flex:1;
					};
					&:nth-child(3){
						color: #999;
					}
				}
			}
			.foot{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.15rem 0;
				a{
					display: block;
					-webkit-box-flex:1;
					text-align: center;
					color: #666;
					i{
						display: block;
						font-size: 0.25rem;
						margin-bottom: 0.05rem;
					}
					span{
						display: block;
					}
				}
			}
		}
		.tabcont{
			width: 100%;
			font-size: 0.14rem;
			background: #fff;
			.btn{
				width: 100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding: 0.1rem;
				box-sizing: border-box;
				border-bottom: 1px solid #eaeaea;
				span{
					display: block;
					&:nth-child(1){
						color: #000;
						i{
							font-size: 0.20rem;
							color: #666;
							margin-right: 0.15rem;
						}
					}
					&:nth-child(2){
						-webkit-box-flex:1;
					};
					&:nth-child(3){
						color: #999;
					}
				}
			}
		}
		.bot{
			width: 100%;
			padding: 0.2rem 0.15rem;
			box-sizing: border-box;
			font-size: 0.12rem;
			color: #999;
			
		}
	}
</style>