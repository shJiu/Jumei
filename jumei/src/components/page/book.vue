<template>
	<div class="wrap">
		<div v-if="mess.length!=0" class="listzong">
			<div class="title">
				<span>购物车</span>
			</div>
			<div class="list" v-for="(item,index) in mess">
				<div class="ck">
					<span ref="ck" @click="check(index,$event)"></span>
				</div>
				<div class="img">
					<img :src="item.src" alt="">
				</div>
				<div class="mess">
					<p>
						{{item.title}}
					</p>
					<p>
						<span></span>
						<span></span>
						<span>x1</span>
					</p>
					<p>
						<span>{{item.price}}</span>
						<span></span>
						<span @click="del(index)">删除</span>
					</p>
				</div>
			</div>
			<div class="bookfooter">
				<section>
					<div>
						<span @click="checkAll($event)"></span>
					</div>
					<i>全选</i>
				</section>
				<section></section>
				<section>
					<p>合计：<span>￥<i ref="price">{{price}}</i></span></p>
					<p>已选<span ref="count">{{count}}</span>个</p>
				</section>
				<section>
					<span>去结算</span>
				</section>
			</div>
		</div>
		<div v-if="mess.length==0" class="gouwulist">
			<div class="book-car">
				<p><img src="data:image/png;base64,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" _v-987867b8=""></p>
				<p><router-link to="/">去逛逛</router-link></p>
			</div>
			<viewfooter></viewfooter>
		</div>
		<book-footer></book-footer>
	</div>
</template>
<script>
import viewfooter from '@/components/base/footer'
import bookList from '@/components/page/book/bookList'
import bookFooter from '@/components/base/footer'
	export default{
		components:{
			viewfooter,
			bookList,
			bookFooter
		},
		data(){
			return{
				data:[],
				mess:[],
				local:localStorage['getstore'],
				price:"",
				count:""
			}
		},
		created(){
			this.getnUm()
			//this.$store.state
			//console.log(typeof this.mess)
			this.$http.jsonp("http://m.haimi.com/api/cart/info?clearInvalidProducts=Y&platform=WAP",{
			     jsonp:"_callback"
			}).then(function(data){
				this.data=data.body.extra.Suggest
			})
		},
		methods:{
			
			getnUm:function(){
				if(window.localStorage['getstore']){
					this.mess=JSON.parse(window.localStorage['getstore'])
				}
				
			},
			check:function(index,e){
				var thisClass=e.target;
				if(thisClass.className==""){
					thisClass.className="on"
					this.messOn(thisClass)
				}else{
					thisClass.className=""
					this.messOn(thisClass)
				}
			},
			checkAll:function(e){
				//console.log(this.$refs.ck.children)
				if(e.target.className=="on"){
					e.target.className=""
					this.count=0;
					this.price=0;
					var that=this;
					this.$refs.ck.forEach(function(value,index){
						value.className=""	
					})
				}else{
					e.target.className="on";
					var that=this,
						pricer=0,cunter=0;
					for(var i=0; i<this.$refs.ck.length; i++){
						this.$refs.ck[i].className="on";
					(function(ind){
						cunter+=Number(that.$refs.ck[ind].parentNode.parentNode.children[2].children[1].innerText.substr(1));
						pricer+=Number(that.$refs.ck[ind].parentNode.parentNode.children[2].children[2].children[0].innerText);
					})(i)
					}
					this.count+=cunter
					this.price+=pricer
				}
			},
			messOn:function(event){
				var pri=Number(this.$refs.price.innerHTML),
					con=Number(this.$refs.count.innerHTML);
				if(event.className=="on"){
					this.count=Number(event.parentNode.parentNode.children[2].children[1].innerText.substr(1))+con
					this.price=Number(event.parentNode.parentNode.children[2].children[2].children[0].innerText)+pri
				}else{
					this.count=con-Number(event.parentNode.parentNode.children[2].children[1].innerText.substr(1))
					this.price=pri-Number(event.parentNode.parentNode.children[2].children[2].children[0].innerText)
				}
			},
			del:function(index){
				this.$store.commit('delcartlist',index)
				this.getnUm()
			}
		}
	}
</script>
<style lang='scss' scoped>
	body{
		background: #fff;
	}
	.wrap{
		width: 100%;
		height: 100%;
	}
	.listzong{
		width: 100%;
		background: #fff;
		.title{
			width: 100%;
			text-align:center;
			font-size: 0.16rem;
			padding: 0.1rem 0;
			border-bottom: 1px solid #eee;
		}
		.list{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			font-size: 0.14rem;
			padding: 0 0.1rem;
			box-sizing: border-box;
			border-bottom:1px solid #eee;
			.ck{
				width: 8%;
				text-align: center;
				&>span{
					text-align: center;
					display: block;
					width: 18px;
					height: 18px;
					border-radius: 50%;
					border:1px solid #ccc;
					margin:0 auto;
					&.on{
						background: #fe4070;
					}
				}
			}
			.img{
				width: 30%;
				img{
					width: 100%;
					display: block;
				}
			}
			.mess{
				-webkit-box-flex:1;
				p{
					width: 100%;
					display: -webkit-box;
					-webkit-box-align:center;
					-webkit-box-pack:center;
					&:nth-child(1){
						width: 100%;
	    				white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    
					}
					&:nth-child(2){
						margin: 0.1rem 0;
						span{
							&:nth-child(3){
								font-size: 0.14rem;
							}
						}
					}
					span{
						display: block;
						&:nth-child(1){
		    				color: #fe4070;
		    				font-size: 0.16rem;
		    			}
						&:nth-child(2){
							-webkit-box-flex:1;
						}
						&:nth-child(3){
							font-size: 0.12rem;
						}
					}
				}
			}
		}
		.bookfooter{
			width: 100%;
			background: #fff;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			position: fixed;
			bottom: 8%;
			left: 0;
			section{
				display: block;
				font-size: 0.14rem;
				-webkit-box-flex:1;
				&:nth-child(1){
					display: -webkit-box;
					div{
						width: 45%;
						text-align: center;
						span{
							display: block;
							width: 15px;
							height: 15px;
							border-radius: 50%;
							border:1px solid #000;
							margin:0 auto;
							&.on{
								background: #fe4070;
							}
						}
					}
					
					i{
						display: block;
						font-style:normal;
					}
				}
				&:nth-child(2){
					-webkit-box-flex:5;
				}
				&:nth-child(3){
					color: #999;
					span{
						color: #fe4070;
					}
				}
				&:nth-child(4){
					-webkit-box-flex:3;
					
					span{
						padding: 0.15rem 0;
						display: block;
						width: 100%;
						text-align: center;
						background: #fe4070;
						color: #fff;
					}
				}
			}
		}
	}
	.gouwulist{
		width: 100%;
		height: 100%;
		background: #fff;
		
		.book-car{
		width: 100%;
		height: 100%;
		
		padding: 1.8rem 0;
		p{
			font-size: 0.14rem;
			text-align: center;
			
			&:nth-child(1){
				margin-bottom: 0.3rem;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				text-align: center;
				img{
					text-align: center;
					width: 40%;
					display: block;
				}
			}
			
			&:nth-child(2){
				a{
					color:#000;
					padding: 0.1rem 0.3rem;
					background: #fe4070;
					color: #fff;
					border-radius: 0.2rem;
				}
			};
		}
	}
	}
	
</style>