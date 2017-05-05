<template>
	<div class="ba">
		<nav ref="cc" class="list">
			<a v-on:click.capture="tabContent($event)" data="one">
				<i><img :src="datas" alt=""></i>
				<span>{{data.tab_online_name}}</span>
			</a>
			<a v-on:click.capture="tabContent($event)" data="two">
				<i><img :src="datsa" alt=""></i>
				<span>{{data.tab_preshow_name}}</span>
			</a>
		</nav>
		<component v-bind:is="currentView">
			
		</component>
	</div>
</template>
<script>
import one from "@/components/page/main/one"
import two from "@/components/page/main/two"

	export default{
		components:{
			one,
			two
		},
		data(){
			return{
				data:[],
				datas:[],
				datsa:[],
				currentView: 'one'
			}
		},
		mounted(){
			this.getClass()
		},
		methods:{
			getClass:function(){
				this.$refs.cc.children[0].className="on"
			},
			tabContent:function(e){
				//console.log(e.target)
				for(var i=0; i<this.$refs.cc.children.length; i++){
					//console.log(this.$refs.cc.children[i])
					if(e.target==this.$refs.cc.children[i]){
						this.currentView=this.$refs.cc.children[i].getAttribute("data")
						this.$refs.cc.children[i].className="on"
						return false;
						
					}
					this.$refs.cc.children[i].className=""
				}
			}
		},
		
		props:{
			index:{
				type:Number,
				default:0
			},
			NavId:{
				type:Number,
				default:""
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mock/header.json")
			.then(function(data){
				//console.log(data.body.data)
				this.data=data.body.data
				this.datas=this.data.tab_online_image.off_image[320]
				this.datsa=this.data.tab_preshow_image.off_image[320]
				//console.log(this.data.tab_online_image.off_image[320])
			})
		}
	}
</script>
<style lang="scss" scoped>
	.ba{
		width: 100%;
		margin-bottom: 0.55rem;
		nav{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			background: #fff;
			padding: 0.05rem 0;
			a{
				display: block;
				-webkit-box-flex:1;
				font-size: 0.14rem;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				position: relative;
				&.on{
					color: #fe4070;
				}
				i{
					display: block;
					width: 18%;
					img{
						display: block;
						width: 100%;
					}
				}
				span{
					display: block;
				}
			}
		}
	}

</style>