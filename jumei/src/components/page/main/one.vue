<template>
	<div class="banner">
		<a :href="item.url" class="list" v-for="item in data">
			<div class="img">
				<img  v-lazy="item.image_url_set.main[640]" alt="">
			</div>
			<div class="mess">
				<p>
					<span>{{item.marketing_title}}</span>
					<span></span>
					<span>{{item.start_time}}</span>
				</p>
				<p>{{item.marketing_word}}</p>
			</div>
		</a>
		<meiri></meiri>
	</div>
</template>
<script>
import meiri from "@/components/page/main/meiri"
	export default{
		components:{
			meiri
		},
		data(){
			return{
				data:[]
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mock/header.json")
			.then(function(data){
				this.data=data.body.data.item_list
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		.list{
			width: 100%;
			background: #fff;
			margin-bottom: 0.1rem;
			.img{
				width: 100%;
				position: relative;
				padding-top: 40%;
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
			.mess{
				width: 100%;
				padding: 0.08rem 0.1rem;
				box-sizing: border-box;
				p{
					width: 100%;
					font-size: 0.14rem;
					padding: 0.02rem 0;
					&:nth-child(1){
						display: -webkit-box;
						-webkit-box-align:center;
						-webkit-box-pack:center;
						span{
							display: block;
							text-align: center;
							&:nth-child(1){
								color: #333;
								font-size: 0.16rem;
							}
							&:nth-child(2){
								-webkit-box-flex:1;
							}
							&:nth-child(3){
								color: #999;
								font-size: 0.12rem;
							}
						}
					}
					&:nth-child(2){
						color: #999;
						font-size: 0.12rem;
					
					}
				}
			}
		}
	}
</style>