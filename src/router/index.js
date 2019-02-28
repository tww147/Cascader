import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cascader from '@/components/Cascader'
import 'iview/dist/styles/iview.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Cascader',
      name: 'Cascader',
      component: Cascader
    }
  ]
})
