<template>
	<div class="banner">
		<header>
			<input type="text" placeholder="搜索商品 分类 功效">
			<span @click="tabb()">返回</span>
		</header>
		<div class="list">
			<div class="tablist" v-for="item in data">
				<p ref="on" @click="tabTop($event)"><span>{{item.name}}</span><span></span><span><i></i></span></p>
				<ul class="ulno">
					<li v-for="ied in item.sub_categories"><span>{{ied.name}}</span></li>
				</ul>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		data(){
			return{
				data:[]
			}
		},
		methods:{
			tabb:function(){
				this.$emit("tabsmall")
			},
			tabTop:function(e){
				var thisClass=e.target;
				if(thisClass.className){
					thisClass.className=""
					thisClass.nextElementSibling.className="ulno"
				}else{
					thisClass.className="on"
					this.$refs.on.forEach(function(value,index){
						if(thisClass==value)return false
							value.className=""
					})
					thisClass.nextElementSibling.className="ulbl"
				}
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mock/tableft.json")
			.then(function(data){
				this.data=data.data.data
			})
		}
	}
</script>
<style lang="scss" scoped>
.banner{
	width: 100%;
	header{
		width: 100%;
		background:#fff;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		padding: 0.1rem 0.1rem;
		box-sizing: border-box;
		input{
			display: block;
			height: 0.3rem;
			-webkit-box-flex:1;
			background:  #eee;
			border:0;
			color: #fff;
			border-radius: 0.2rem;	
		}
		input::-webkit-input-placeholder{
			text-align: center;
		}
		span{
			width: 15%;
			display: block;
			text-align: center;
			font-size: 0.14rem;
			color: #999;
		}
	}
	.list{
		width: 100%;
		
		.tablist{
			width: 100%;
			font-size: 0.14rem;
			p{
				width: 100%;
				background: #fff;
				border-bottom: 1px solid #eee;
				padding: 0.1rem 0.1rem;
				box-sizing: border-box;
				color: #666;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				
				span{
					display: block;

					&:nth-child(2){
						-webkit-box-flex:1;
					};
					&:nth-child(3){
						position: relative;
						i{
						  position: absolute;
				          width:0.1rem;
				          height:0.1rem;
				          border-right:2px solid #eee;
				          border-bottom:2px solid #eee;
				          right:0.1rem;
				          top:50%;
				          margin-top:-0.07rem;
				          -webkit-transform:rotate(42deg);
						}
					}
				}
				&.on{
					color: #fe4070;
					span i{
						border-right:2px solid #fe4070;
				        border-bottom:2px solid #fe4070;
				          -webkit-transform:rotate(-132deg);
				         margin-top:-0.04rem;
					}
				}
			}
			.ulno{
				display: none;
			}
			.ulbl{
				display: block;
			}
			ul{
				width: 100%;
				background: #f5f5f5;
				li{
					width: 100%;
					color: #666;
					border-bottom: 1px solid #fff;
					padding: 0.1rem 0.3rem;
					box-sizing: border-box;
				}
			}
		}
	}
}
	
</style>