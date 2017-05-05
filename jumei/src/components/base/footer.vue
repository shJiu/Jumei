<template>
	<footer>
		<router-link class="toggle" active-class="on" exact to="/">
			<i class="fa fa-home"></i>
			<span>首页</span>
		</router-link>
		<router-link class="toggle" active-class="on" exact to="/home">
			<i class="fa fa-reorder"></i>
			<span>凑团</span>
		</router-link>
		<router-link class="toggle" active-class="on" exact to="/book">
			<i class="fa fa-shopping-cart"></i>
			<span>购物车</span>
			<b v-if="len!=0">{{len}}</b>
		</router-link>
		<router-link class="toggle" active-class="on" exact to="/user">
			<i class="fa fa-user"></i>
			<span>我的</span>
		</router-link>
	</footer>
</template>
<script>
	export default{
		
		created(){
			this.getnUm()
		},
		watch:{
			"len" (){
				this.getnUm()
			}
		},
		updated(){
			this.getnUm()
		},
		methods:{
			tabFoot:function(index){
				var as=document.getElementsByClassName('toggle')
				for(var i=0; i<as.length; i++){
					as[i].className="toggle"
				}
				as[index].className="toggle on"
			},
			getnUm:function(){
				if(window.localStorage['getstore']){
					this.len=(JSON.parse(window.localStorage['getstore'])).length;
				}
			}
		},
		data(){
			return{
				len:"",
				footList:
				[
					{
						name:"首页",
						router:"/",
						cls:"fa fa-home"
					},
					{
						name:"凑团",
						router:"/home",
						cls:"fa fa-reorder"
					},
					{
						name:"购物车",
						router:"/book",
						cls:"fa fa-shopping-cart"
					},
					{
						name:"我的",
						router:"/user",
						cls:"fa fa-user"
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	footer{
		width: 100%;
		
		background: #fff;
		position: fixed;
		bottom: 0;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		padding: 0.07rem 0;
		a{
			text-align: center;
			-webkit-box-flex:1;
			display: block;
			display: -webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			color: #999;
			font-size: 0.12rem;
			&:nth-child(3){
				position: relative;
				b{
					display: block;
					width: 14px;
					height: 14px;
					font-size: 8px;
					border-radius: 50%;
					background: #fe4070;
					position: absolute;
					right: 30%;
					top: -10%;
					color: #fff;
				}
			}
			&.on{
				color:#fe4070;
			}
			i{
				display: block;
				font-size: 0.18rem;
				margin-bottom: 3px;
			}
			span{
				display: block;
			}
		}
	}
</style>