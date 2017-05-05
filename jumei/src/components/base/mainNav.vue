<template>
	<nav v-scroll>
		<a ref="bb" href="#" v-for="(item,index) in navlist" @click="getID(index,$event)">{{item.title}}</a>
	</nav>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			navlist:{
				type:Array,
				default:function(){}
			}
		},
		mounted(){
			this.getClass()
		},
		methods:{
			getClass:function(){
				this.$refs.bb[0].className="on"
			},
			getID:function(index,e){
				var thisclass=e.target;
				thisclass.className="on"
				this.$refs.bb.forEach(function(value,index){
					if(thisclass==value) return false
						value.className=""
				})
				
				this.$emit('tabContent',index)
			}
		}
	}

</script>
<style lang="scss" scoped>
	nav{
		z-index:50;
		display: -webkit-box;
		overflow-x: scroll;
		background: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		a{
			display: block;
			font-size: 0.14rem;
			color: #666;
			margin: 0 0.2rem;
			padding:0.1rem 0;
			&.on{
				border-bottom: 3.5px solid #fe4070;
				color: #fe4070;
			}
		}
	}
</style>