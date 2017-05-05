<template>
  <div id="app" class="wrap">
  
    <transition name="fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

    <div class="loading-box" v-show="getPic">
        <div class="loading-css3">
          <div class="loader">Loading...</div>
          <div>正在加载</div>
        </div>
    </div>
  </div>
  </div>
 
</template>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
<script>
import Swiper from '../static/swiper/js/swiper.min.js'

export default {
  name: 'app',
  data(){
    return{
      hh:this.$store.state.hh
    }
  },
  computed:{
    getPic:function(){
      return this.$store.state.loadingShow
    }
  }
}
</script>
	
<style lang='scss'>
	@import '../static/swiper/css/swiper.min.css';
	@import './public/css/reset2.css';
  @import '../static/font-awesome-4.7.0/css/font-awesome.min.css';
 body,html{
  font-size: 100px;
	background: #f7f7f7;

 }
 .loading-box{
     font-size: 10px;
     position:fixed;
     z-index:1000;
     bottom:0;
     left:0;
     width:100%;
     height:100%;
     background:transparent;
  }
  .loading-css3{
    position:fixed;
    top:50%;
    left:50%;
    margin-top:-1rem;
    margin-left:-1.1rem;
    padding:.3rem;
    text-align:center;
    background:rgba(0,0,0,.65);
    border-radius:.15rem;
    z-index:1001;
    min-width:2.1rem;
    max-width:5rem;
    div{
      color:#fff;
    }
  }
  .loading-box .loader{
    animation:loading 1.1s infinite linear;
    text-indent:-9999em;
    border-top:.3em solid hsla(0,0%,100%,.2);
    border-right:.3em solid hsla(0,0%,100%,.2);
    border-bottom:.3em solid hsla(0,0%,100%,.2);
    border-left:.3em solid #fff
  }
  .loading-box .loader,.loading-box .loader:after{
    width:2.5em;
    height:2.5em;
    margin:0 auto .125rem;
    border-radius:50%
  }
  @-webkit-keyframes loading{
      0%{-webkit-transform:rotate(0deg);
      transform:rotate(0deg)
      }to{
        -webkit-transform:rotate(1turn);
        transform:rotate(1turn)
      }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
