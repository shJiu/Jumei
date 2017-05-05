// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: '../static/error.png',
  loading: '../static/loading.gif',
  try: 3 // default 1
})
/* eslint-disable no-new */
Vue.directive('scroll',{
	bind:function(el,binding){
		window.onscroll=function(){
			var windowH=window.innerHeight;
			var scrollH=document.body.scrollTop;
      if(scrollH>=el.offsetHeight+10){
        el.style.position="fixed";
        el.style.top=0;
        el.style.left=0;
      }else{
         el.style.position="static";
      }
		},
    document.addEventListener("touchmove",function(){
      var windowH=window.innerHeight;
      var scrollH=document.body.scrollTop;
      if(scrollH>=el.offsetHeight+10){
        el.style.position="fixed";
        el.style.top=0;
        el.style.left=0;
      }else{
         el.style.position="static";
      }
    })
	}

})

Vue.directive('tabClass',{
  bind:function(el,binding){
    console.log(el)
  }
})

var store = new Vuex.Store({
  state: {
    loadingShow:false,
    getShow:true,
    hh:[]
  },
  mutations: {
    getDatas (s,json) {
      store.state.loadingShow=json
    },
   getstore(s,json) {
    store.state.hh=json
   },
   addcartlist(s,json){
   // console.log(s,json)
    store.state.hh.push(json)
    window.localStorage['getstore']=JSON.stringify(store.state.hh)
   },
   delcartlist(s,index){
     // console.log(s)
    store.state.hh.splice(index,1)
     window.localStorage['getstore']=JSON.stringify(store.state.hh)
    console.log(store.state.hh)
   }
  },
  actions:{
      getcartlist(context){
        var data=JSON.parse(window.localStorage['getstore']);
        if(data){
          context.commit('getstore',data)
        }
      }
   }
  /*watch:{
    store.state.hh (){
       store.commit('getstore',store.state.hh)
    }
  }*/
})





Vue.http.interceptors.push((request, next)  =>{
 store.commit('getDatas',true)//一开始请求
  next((response) => {
   store.commit('getDatas',false)//请求完之后
    return response;
  })
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    this.$store.dispatch('getcartlist')
  }
})

