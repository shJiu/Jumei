<template>
	<div class="bannerList">
		<dl v-for="item in lists">
			<dt>
				<img :src="item.Picture" alt="">
			</dt>
			<dd>
				<p>{{item.SlideName}}</p>
				<p>{{item.Description}}</p>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default{
		props:{
			lists:{
				type:Array,
				default:function(){}
			}
		},
		data(){
			return{
				mess:this.lists[0]['Records']
			}
		}
	}
</script>
<style lang="scss" scoped>
	.bannerList{
		width: 100%;
		dl{
			float: left;
			width: 33.33%;
			background: #fff;
			dt{
				width: 100%;
				img{
					display: block;
					width: 100%;
				}
			}
			dd{
				text-align: center;
				padding: 0.1rem 0;
				width: 100%;
				font-size: 0.14rem;
				p{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    &:nth-child(2){
				    	color: #999;
				    	font-size: 0.1rem;
				    };
				}
			}
		}
	}
</style>