<template>
	<div class="wrap">
	 	<div class="swiper-container pic-content">
	        <div class="swiper-wrapper">  
	            <div class="swiper-slide" v-for="item in pic">
	            	<div :style='{backgroundImage:"url("+item.picture+")"}' class="sild" ></div>
	            </div>
	        </div>
	        <div class="swiper-pagination"></div>
	    </div>
	
	<defaile-mess :lists="data"></defaile-mess>
	<div class="tejia">
		<p>
			<span v-for="item in data.Promises"><i></i>{{item}}</span>
		</p>
		<p v-if="data.Promotions!=''"><span v-for="item in data.Promotions">{{item.Subject}}</span><span></span><i>&gt;</i></p>
	</div>
	<div class="color">
		<p @click="tabCont()"><span>请选择：<b v-for="item in data.AttrInfoArray">{{item.AttrName}}</b></span><span></span><i>&gt;</i></p>
	</div>
	<detaile-banner :lists="data"></detaile-banner>
	<div v-if="ss!=''" class="yanxuan">
		<dl>
			<dt>
				<img :src="ss.LogoSrc" alt="">
			</dt>
			<dd>
				<p>{{ss.MallName}}</p>
				<p>{{ss.Introduction}}</p>
			</dd>
		</dl>
	</div>
	<div class="color">
		<p><span></span><span></span><i>&gt;</i></p>
	</div>
	<!-- <detaile-top :lists="data"></detaile-top> -->
	 <div class="mark" @click="gethide()"></div>
	<div class="shopp">
		<dl>
			<dt>
				<img :src="src" alt="">
			</dt>
			<dd>
				<p>￥{{Price}}</p>
				<article>(库存{{Stock}}件)</article>
				<article class="classType" v-if="data.AttrInfoArray!=''">
					<span>请选择：</span><span>{{namer}}</span><span>{{namerr}}</span>
				</article>
			</dd>
		</dl>
		<div class="shopp-color" v-for="(item,index) in data.AttrInfoArray">
			<p>{{item.AttrName}}</p>
			<p v-if="index==0">			
				<span ref='ss' @click="tabColor(index,$event)" v-for="(i,index) in item.AttrValues.split(',')">{{i}}</span>
			</p>
			<p v-if="index!=0">			
				<span ref='sh' @click="tabCount(index,$event)" v-for="(i,index) in item.AttrValues.split(',')">{{i}}</span>
			</p>	
		</div>
		
		<div class="shopp-count">
			<div class="coun">购买数量</div>
			<div class="coun"></div>
			<div class="coun">
				<span class="odd" @click="odd">-</span>
				<span class="counter">{{name}}</span>
				<span class="add" @click="add">+</span>
			</div>
		</div>
		<div class="query" @click="shezhi()">
			<router-link to="/book">确定</router-link>
			
		</div>
		</div>
		<detaile-footer v-on:tabCont="tabCont"></detaile-footer>
	</div>
</template>
<script>
import defaileMess from '@/components/page/detaile/defaileMess'
import detaileBanner from '@/components/page/detaile/detaileBanner'
import detaileTop from '@/components/page/detaile/detaileTop'
import detaileFooter from '@/components/page/detaile/detaileFooter'
export default{
	components:{
		defaileMess,
		detaileBanner,
		detaileTop,
		detaileFooter
	},
	data(){
		return{
			data:[],
			pic:[],
			id:"",
			name:1,
			src:"",
			pics:[],
			ss:[],
			picme:[],
			Stock:"",
			Price:"",
			ty:false,
			placle:"",
			namer:"",
			namerr:""
		}
	},
	created(){
		this.id=this.$route.params.id;
		this.getdd()
	},
	updated (){
		var swiper = new Swiper('.pic-content', {
	  		pagination: '.swiper-pagination',
	        slidesPerView: 1,
		    paginationClickable: true,
		    spaceBetween:10,
		    observer:true,
		    observeParents:true
	    });
	},
	watch:{
		'$route.params.id'(){
			this.id=this.$route.params.id;
			this.getdd()
		}
	},
	conputed:{
		
	},
	methods:{
		shezhi:function(){
			var dd={
				src:this.src,
				price:this.Price,
				color:this.namer,
				count:this.name,
				title:this.data.Subject
			};
			this.$store.commit('addcartlist',dd)
		},
		getdd:function(){
			if(!this.id) return false;
			this.$http.jsonp('http://www.haimi.com/api/product/detail-cdn?ProductID='+this.id+'&platform=WAP',{
				Params:{
		            platform:"WAP"
			     },
			     jsonp:"_callback"
			}).then(function(data){
				console.log(data.body.data)
				this.data=data.body.data
				this.pic=JSON.parse(data.body.data.ProductPictures)
				this.src=this.data.Pictures
				this.pics=this.data.SkuPictures
				this.ss=this.data.Mall
				this.Stock=this.data.Stock
				this.Price=this.data.FinalAmount
				this.picme=this.data.SkuInfo
				this.namer=this.data.AttrInfoArray[0].AttrName
				this.namerr=this.data.AttrInfoArray[1].AttrName
			})
		},
		tabCont:function(){
	 		var mark=document.querySelector(".mark"),
	 			shopp=document.querySelector(".shopp");
	 		mark.style.display="block"
	 		shopp.style.display="block"
	 	},
	 	gethide:function(){
	 		var mark=document.querySelector(".mark"),
	 			shopp=document.querySelector(".shopp");
	 		mark.style.display="none"
	 		shopp.style.display="none"
	 	},
	 	add(){
	 		this.name++
	 	},
	 	odd(){
	 		if(this.name>=2){
	 			this.name--
	 		}
	 	},
	 	/*dsfdf*/
	 	cls (imd) {
	 		return 'h'+imd
	 	},
	 	tabColor(index,e){
	 		var thisClass=e.target;
	 		var classType=document.querySelector(".classType"),
	 			spans=classType.querySelectorAll("span");
	 		if(thisClass.className){
	 			thisClass.className=""
	 			
	 				this.src=this.data.Pictures

	 			
	 			this.Stock=this.data.Stock
				this.Price=this.data.FinalAmount
				this.namer=this.data.AttrInfoArray[0].AttrName
	 			
	 			if(this.namerr==""){
	 				spans[0].innerHTML="请选择："
	 				this.namer=this.data.AttrInfoArray[0].AttrName
					this.namerr=this.data.AttrInfoArray[1].AttrName
	 			}else{
	 				this.namer=""
	 			}
	 		}else{
	 			thisClass.className="on"
	 			this.$refs.ss.forEach(function(item,index){
		 			if(item==thisClass)return false
		 				item.className=""				
		 		})
		 		if(this.pics[index]){
		 			this.src=this.pics[index].Picture
		 		}
		 		
 				this.Stock=this.picme[index].Stock
 				this.Price=this.picme[index].Price
		 		this.namer=thisClass.innerHTML;
				if(this.namerr==this.data.AttrInfoArray[1].AttrName){
					spans[0].innerHTML=spans[0].innerHTML=="请选择："?"已选择：":spans[0].innerHTML
					this.namerr=this.namer==thisClass.innerHTML?"":this.data.AttrInfoArray[1].AttrName
				}else{
					spans[0].innerHTML="已选择："
				}
		 		
	 		}	
	 	},
	 	tabCount(index,e){
	 		var thisClass=e.target;
	 		var classType=document.querySelector(".classType"),
	 			spans=classType.querySelectorAll("span");
	 		if(thisClass.className){
	 			thisClass.className=""
	 			//this.namerr
	 			if(this.namer==""){
	 				spans[0].innerHTML="请选择："
	 				this.namer=this.data.AttrInfoArray[0].AttrName+","
					this.namerr=this.data.AttrInfoArray[1].AttrName
	 			}else{
	 				this.namerr=""
	 			}
	 			
	 			
	 		}else{
	 			thisClass.className="on"
	 			this.$refs.sh.forEach(function(item,index){
		 			if(item==thisClass)return false
		 				item.className=""
		 		})
	 			this.namerr=thisClass.innerHTML
	 			if(this.namer==this.data.AttrInfoArray[0].AttrName){
	 				spans[0].innerHTML=spans[0].innerHTML=="请选择："?"已选择：":spans[0].innerHTML
					this.namer=this.namerr==thisClass.innerHTML+","?"":this.data.AttrInfoArray[0].AttrName+","
	 			}else{
	 				spans[0].innerHTML="已选择："

	 			}
				

		 		
	 		}	
	 	}
	}
}
</script>
<style lang="scss" scoped>
body,html{
	width: 100%;
	height: 100%;
	background: #f7f7f7;
}
.wrap{
	width: 100%;
	height: 100%;
	.pic-content{
		.sild{
			width: 80%;
			margin:0 auto;
			background-size: cover;
			background-position: center center;
			padding-top: 100%;
		}
	}
	.tejia{
		width: 100%;
		background: #fff;
		margin-top: 0.1rem;
		p{
			width: 100%;
			display: -webkit-box;
			
			
			padding:0.15rem 0.1rem;
			font-size: 0.1rem;
			box-sizing: border-box;
			&:nth-child(1){
				border-bottom: 1px solid #ccc;
				i{
					width: 10px;
					height: 10px;
					display:inline-block;
					background-image: url('../../../static/下载.png');
			    	background-size: cover;
			    	background-position: left center;
			    	margin-right: 0.03rem;
				}
			};
			span{
				display: block;
				
				margin-right: 0.15rem;
			}
			&:nth-child(2){
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    color: #242424;
			    font-size: 0.14rem;
			    span{
			    	text-align: center;
			    	&:nth-child(2){
			    		-webkit-box-flex:1;
			    	}
			    }
			    i{
			    	color: #ccc;
			    	
			    }
			};
		}
		
	}
	.color{
		width: 100%;
		background: #fff;
		margin-top: 0.1rem;
		p{
			width: 100%;
			display: -webkit-box;
			padding:0.15rem 0.1rem;
			box-sizing: border-box;
			font-size: 0.14rem;
			 span{
			 	display: block;
		    	text-align: center;
		    	&:nth-child(2){
		    		-webkit-box-flex:1;
		    	}
		    }
		    i{
		    	color: #ccc;
		    }
			b{
				font-weight: normal;
			}
		}
	}
	.yanxuan{
		width: 100%;
		background: #fff;
		margin-top: 0.1rem;
		padding: 0.1rem;
		box-sizing: border-box;
		dl{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			dd{

				-webkit-box-flex:1;
				font-size: 0.1rem;
				color: #666;
				p{
					&:nth-child(1){
						font-size: 0.15rem;
						color: #000;
					};
				}
			}
			dt{

				width: 20%;
				margin-right: 0.1rem;
				img{
					width: 100%;
					display: block;
				}
			}
		}
	}
	.mark{
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:rgba( 0,0,0,0.5);
		z-index: 100;
	}
	.shopp{
		width: 100%;
		background: #fff;
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 101;
		dl{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			padding:0.15rem 0.1rem;
			border-bottom: 1px solid #e0e0e0;
			box-sizing: border-box;
			dd{
				-webkit-box-flex:1;
				font-size: 0.14rem;
				p{
					color: #991f33;
					font-size: 0.18rem;
				}
				article{
					&:nth-child(2){
						font-size: 0.1rem;
						color: #999;
					};
					&:nth-child(3){
						font-size: 0.14rem;
						color: #666;
						i{
							font-style: normal;
						}
					};
				}
			}
			dt{
				width: 18%;
				margin-right: 0.1rem;
				img{
					width: 100%;
					display: block;
				}
			}
		}
		.shopp-color{
			width: 100%;
			font-size: 0.1rem;
			padding:0.1rem 0.1rem;
			border-bottom: 1px solid #e0e0e0;
			box-sizing: border-box;
			p{
				
				&:nth-child(2){
					
					width: 100%;
					margin-top:0.1rem;
					overflow: hidden;
					span{
						float: left;
						padding: 0.05rem 0.1rem;
						box-sizing: border-box;
						border:1px solid #000;
						margin-right: 0.1rem;
						margin-bottom: 0.1rem;
						&.on{
							color:#801a2a;
							border:1px solid #801a2a;
						};
					}
				}
			}
		}
		.shopp-count{
			width: 100%;
			font-size: 0.14rem;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			padding:0.15rem 0.1rem;
			box-sizing: border-box;
			.coun{
				&:nth-child(2){
					-webkit-box-flex:1;
					

				};
				&:nth-child(3){
					span{
						display:inline-block;
						padding: 0.05rem 0.08rem;
						
						border:1px solid #e6e6e6;
						&:nth-child(2){
							padding: 0.05rem 0.15rem;
						}
					}
				};
			}
		}
		.query{
			width: 100%;
			background: #801a2a;
			font-size: 0.16rem;
			color: #fff;
			text-align: center;
			padding: 0.1rem 0;
		}
	}
}
	
</style>