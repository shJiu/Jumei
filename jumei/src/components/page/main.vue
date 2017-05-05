<template>
	<div class="wrap">
		<div class="mark" v-show="isshow"></div>
		<div :class="tabclass">
			<tableft></tableft>
		</div>
		<main-header v-on:tabbig="tabbig"></main-header>
		<main-nav :navlist="list" v-on:tabContent="tabContent"></main-nav>
		
		<component v-bind:is="currentView" :index="pageIndex" :NavId="NavId">
			
		</component>

	 	<viewfooter></viewfooter>
	</div>

</template>
<script>
import mainHeader from "@/components/base/mainHeafer"
import viewfooter from '@/components/base/footer'
import mainNav from "@/components/base/mainNav"
import tuijian from "@/components/page/main/tuijian"
import mainmore from "@/components/page/main/mainmore"
import muying from "@/components/page/main/muying"
import qingshe from "@/components/page/main/qingshe"
import mingpin from "@/components/page/main/mingpin"
import tableft from "@/components/page/main/tableft"
export default{
	components:{
		mainHeader,
		mainNav,
    	viewfooter,
    	tuijian,
    	mainmore,
    	muying,
    	qingshe,
    	mingpin,
    	tableft
	},
	data(){
		return {     
			currentView: 'tuijian',
			navlist:[],
			pageIndex:0,
			NavId:2,
			isshow:false,
			tabclass:"righttab",
			list:[
				{
					title:"首页"
				},
				{
					title:"极速免税店"
				},
				{
					title:"母婴"
				},
				{
					title:"轻奢"
				},
				{
					title:"名品特卖"
				}
			]
		}
	},
	created(){
		this.$on("tabbig")
	},
	 mounted () {
	    this.$nextTick(function (){
	      this.getData()  
	    })
	  },
	methods:{
		tabbig:function(){
			this.isshow=true
			this.tabclass="tranleft"
		},
		tabsmall:function(){
			this.isshow=false
			//this.tabclass="tranleft"
		},
		tabContent:function(index){
			if(index==0){
				this.currentView="tuijian"
			}else if(index==1){
				this.currentView="mainmore"
			}else if(index==2){
				this.currentView="muying"
			}else if(index==3){
				this.currentView="qingshe"
			}else if(index==4){
				this.currentView="mingpin"
			}
			
		},
		getData (){
	      let that=this
	      this.$http.jsonp('http://m.haimi.com/api/nav/list',{
	          Params:{
	            platform:"WAP"
		        },
		        jsonp:"_callback"
		      }).then(function(data){
		          //赋值给alllist数组,
		          return that.navlist=data.body.data;
		      })
		}
	}
}
	
</script>
<style lang="scss" scoped>
	.mark{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 100;
	}
	.righttab{
		width: 85%;
		position: fixed;
		left: 100%;
		top: 0;
		height: 100%;
		background: #fff;
		z-index: 101;
	}
	.tranleft{
		width: 85%;
		position: fixed;
		left: 100%;
		top: 0;
		height: 100%;
		background: #fff;
		z-index: 101;
		-webkit-animation: left 0.5s forwards;
	}
	@-webkit-keyframes left{
		0%{
			left:100%;
		}
		100%{
			left:15%;
		}
	}
</style>