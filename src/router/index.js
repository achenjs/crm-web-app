import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
//首页
import Index from '@/components/index/Index'
//用户
import UsersInfo from '@/components/users/UsersInfo'
import UsersCard from '@/components/users/UsersCard'
//营销组件
import SellersTicket from '@/components/sellers/SellersTicket'
import SellersActivity from '@/components/sellers/SellersActivity'
import SellersPlan from '@/components/sellers/SellersPlan'

//数据中心组件
import DBCenter from '@/components/dbcenter/DBCenter'
//会员设置
import VipEquityRules from '@/components/vipsetting/VipEquityRules'
import VipCollect from '@/components/vipsetting/VipCollect'
import VipRank from '@/components/vipsetting/VipRank'
import VipWX from '@/components/vipsetting/VipWX'
import VipAliPay from '@/components/vipsetting/VipAliPay'
//设置
import Setting from '@/components/setting/Setting'
//商城
import Stores  from '@/components/stores/Stores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[

           {path:'/',name:'index',component:Index},
           //1-1.引入会员组件默认---会员信息
           {
		    	path:'/usersinfo',
		    	name:'usersinfo',
		    	component:UsersInfo
		   },
		   //1-2.引入会员组件默认---会与批量卡片操作
		   {
		    	path:'/userscard',
		    	name:'userscard',
		    	component:UsersCard
		   },

		   //2-1.引入营销组件 ----券管理
		   {
                path:'/sellerticket',
                name:'sellerticket',
                component:SellersTicket
		   },
		   //2-2.引入营销组件 ----活动管理
		   {
                path:'/selleractivity',
                name:'selleractivity',
                component:SellersActivity
		   },
		    //2-3.引入营销组件 ----一体化营销方案
		   {
                path:'/sellerplan',
                name:'sellerplan',
                component:SellersPlan
		   },

		   //3.引入数据中心组件
		    {
                path:'/db',
                name:'dbcenter',
                component:DBCenter
		   },
		   //4-1.会员设置 ----权益规则
		    {
                path:'/vipequityrules',
                name:'vipequityrules',
                component:VipEquityRules
		   },
		   //4-2.会员设置 ----群体管理
		    {
                path:'/vipcollect',
                name:'vipcollect',
                component:VipCollect
		   },
		   //4-3.会员设置 ----等级管理
		    {
                path:'/viprank',
                name:'viprank',
                component:VipRank
		   },
		   //4-4.会员设置 ----权益规则
		    {
                path:'/vipwx',
                name:'vipwx',
                component:VipWX
		   },
		   //4-5.会员设置 ----权益规则
		    {
                path:'/vipalipay',
                name:'vipalipay',
                component:VipAliPay
		   },
		   //5.设置
		    {
                path:'/setting',
                name:'setting',
                component:Setting
		   },
		   //6.商城
		    {
                path:'/stores',
                name:'stores',
                component:Stores
		   }

      ]
    }
  ]
})
