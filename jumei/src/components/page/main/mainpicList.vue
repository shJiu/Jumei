<template>
	<div> 

		<div class="picList" v-if="ChannelID=='555'">
			<div class="title">{{Channel.Name}}</div>
			<div class="pic">
				<div>
					<router-link :to="{ name: 'detaile', params: { id: lists[0].CastID }}">
						<img :src="lists[0].Picture" alt="">
					</router-link>
					<router-link :to="{ name: 'detaile', params: { id: lists[1].CastID }}">
						<img :src="lists[1].Picture" alt="">
					</router-link>
				</div>
				<div>
					<router-link :to="{ name: 'detaile', params: { id: lists[2].CastID }}">
						<img :src="lists[2].Picture" alt="">
					</router-link>
				</div>
			</div>
		</div>
		<div class="picList" v-else>
			<div class="title">{{Channel.Name}}</div>
			<div class="picer">
				<router-link v-for="item in lists" :to="{ name: 'detaile', params: { id: item.CastID }}" :key="item">
					<img  :src="item.Picture" alt="">
				</router-link>
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			lists:{
				type:Array,
				default:function(){}
			},
			Channel:{
				type:Object,
				default:function(){}
			}
		},
		data(){
			return{
				ChannelID:this.Channel['ChannelID']
			}
		}
	}
</script>
<style lang="scss" scoped>
	.picList{
		width: 100%;
		background: #fff;
		margin-top: 0.1rem;
		.title{
			width: 100%;
			border-bottom: 1px solid #eee;
		    text-align: center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-size: 0.14rem;
		    padding: 0.15rem 0;
		}
		.pic{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			div{
				-webkit-box-flex:1;
				img{
					width: 100%;
					display: block;
				}
			}
		}
		.picer{
			width: 100%;
			overflow: hidden;
			img{
				float: left;
				width: 50%;
			}
		}
	}
</style>