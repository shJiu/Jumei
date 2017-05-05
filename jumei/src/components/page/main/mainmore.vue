<template>
	<div class="banner">
		<div class="title">
			<a href="#" v-for="item in navlist">
				<i><img :src="item.src" alt=""></i>
				<span>{{item.title}}</span>
			</a>
		</div>
		<mainimg-list :name="list.Title" :piclist1="list.Products"></mainimg-list>
	</div>
</template>
<script>
import mainimgList from "@/components/page/main/mainimgList"
	export default{
		components:{
			mainimgList
		},
		data(){
			return{
				bannerone:"",
				list:[],
				navlist:[
					{
						title:"海外直购",
						src:"../../../../static/interantion_shipping.png"
					},
					{
						title:"原装正品",
						src:"../../../../static/interantion_shipping.png"
					},
					{
						title:"极速到货",
						src:"../../../../static/interantion_shipping.png"
					},
					{
						title:"轻松退货",
						src:"../../../../static/interantion_shipping.png"
					}
				]
			}
		},
		props:{
			index:{
				type:Number,
				default:0
			}
		},
		created(){
			this.getdd()
		},
		methods:{
			getdd () {
				this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_2",{
					 Params:{
			            platform:"WAP"
				     },
				     jsonp:"_callback"
				}).then(function(data){
					this.bannerone=data.body.data[0].Records[0].Picture
					
				})*//*,
				this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID=2",{
					 	Params:{page:1,
						pageSize:100,
			            platform:"WAP"
				     },
				     jsonp:"_callback"
				}).then(function(data){
					this.list=data.body.data[0]
				})
			}
		},
		watch:{
			NavId (){
				this.getdd()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		margin-bottom: 0.55rem;
		.title{
			width: 100%;
			background: #fff;
			padding: 0.15rem 0;
			margin-bottom: 0.1rem;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			a{
				display: block;
				-webkit-box-flex:1;
				text-align: center;
				display: -webkit-box;
				-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
				i{
					display: block;
					width: 50%;
					text-align: center;
					margin-bottom: 0.05rem;
					img{
						width: 100%;
						display: block;
					}

				}
				span{
					display: block;
					font-size: 0.12rem;
					color: #666;
				}
			}
		}
		.banner-one{
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
	}
</style>