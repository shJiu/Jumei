import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/page/main'
import home from '@/components/page/home'
import book from '@/components/page/book'
import user from '@/components/page/user'
import detaile from '@/components/page/detaile'
import detal from '@/components/page/main/detaile'
import detl from '@/components/page/home/detailehome'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
  	{
      path: '/',
      name: 'main',
      component: main,
      meta: {keepAlive: true} 
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {keepAlive: true} 
    },
    {
      path: '/book',
      name: 'book',
      component: book,
      meta: {keepAlive: true} 
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {keepAlive: true} 
    },
    {
      path: '/detaile',
      name: 'detaile',
      component: detaile,
      meta: {keepAlive: false} 
    },
    {
      path: '/detal',
      name: 'detal',
      component: detal,
      meta: {keepAlive: false} 
    },
    {
      path: '/detl',
      name: 'detl',
      component: detl,
      meta: {keepAlive: false} 
    }
  ]
})
