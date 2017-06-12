<!--
描述:登录成功左侧菜单导航
作者:dong.xie
-->
<template>
  <div class="menu" :style="styles">
    <div class="inner">
      <div class="menu-icon">
        <img src="../assets/logoIndex.png">
      </div>
      <div class="menu-fonts">
        美食云CRM系统
      </div>
      <div class="menu-person">
        <img src="../assets/person.png">
      </div>
      <div class="menu-username">
        <span>dong.xie@zgms.com  <img class="menu-img" src="../assets/down.png"/></span>
      </div>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu router default-active="1" class="el-menu-vertical-demo" theme="dark">

            <el-menu-item index="1" :route="{path:'/'}">
                <i class="iconfont icon-interest-active"></i>
                <span class="menu-lists-item">首页</span>
            </el-menu-item>

             <el-submenu index="2" >
              <template slot="title">
                <i class="el-icon-message"></i>
                <span class="menu-list">会员操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1"  :route="{path:'/usersinfo'}">
                  <i class="iconfont icon-renminbi"></i>
                  <span class="menu-list-item">会员信息</span>
                </el-menu-item>
                <el-menu-item index="2-2" :route="{path:'/userscard'}">
                  <i class="iconfont icon-lladdresshome"></i>
                  <span class="menu-list-item">卡片批量操作</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title" :route="{path:'/check'}">
                <i class="el-icon-message"></i>
                <span class="menu-list">营销中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" :route="{path:'/sellerticket'}">
                  <i class="iconfont icon-renminbi"></i>
                  <span class="menu-list-item">券管理</span>
                </el-menu-item>
                <el-menu-item index="3-2" :route="{path:'/selleractivity'}">
                  <i class="iconfont icon-lladdresshome"></i>
                  <span class="menu-list-item">活动管理</span>
                </el-menu-item>
                 <el-menu-item index="3-3" :route="{path:'/sellerplan'}">
                  <i class="iconfont icon-lladdresshome"></i>
                  <span class="menu-list-item">一体化营销方案</span>
                </el-menu-item>

              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title" :route="{path:'/check'}">
                <i class="el-icon-message"></i>
                <span class="menu-list">数据中心</span>
              </template>
              
            </el-submenu>


            <el-submenu index="5">
              <template slot="title" :route="{path:'/setting'}">
                <i class="el-icon-message"></i>
                <span class="menu-list">会员设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1" :route="{path:'/vipequityrules'}">
                  <i class="iconfont icon-lladdresshome"></i>
                  <span class="menu-list-item">权益规则管理</span>
                </el-menu-item>
                <el-menu-item index="5-2" :route="{path:'/viprank'}">
                  <i class="iconfont icon-lladdresshome"></i>
                  <span class="menu-list-item">会员等级管理</span>
                </el-menu-item>
                <el-menu-item index="5-3" :route="{path:'/vipcollect'}">
                  <i class="iconfont icon-caipinfenleizhankai"></i>
                  <span class="menu-list-item">群体管理</span>
                </el-menu-item>
                <el-menu-item index="5-4" :route="{path:'/vipwx'}">
                  <i class="iconfont icon-wodequanyi"></i>
                  <span class="menu-list-item">微信会员卡管理</span>
                </el-menu-item>
                <el-menu-item index="5-4" :route="{path:'/vipalipay'}">
                  <i class="iconfont icon-wodequanyi"></i>
                  <span class="menu-list-item">支付宝会员卡管理</span>
                </el-menu-item>
               
              
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title" :route="{path:'/setting'}">
                <i class="el-icon-message"></i>
                <span class="menu-list">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置</span>
              </template>
              
            </el-submenu>

            <el-submenu index="7">
              <template slot="title" :route="{path:'/setting'}">
                <i class="el-icon-message"></i>
                <span class="menu-list">在线商城</span>
              </template>
              
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AppMenu',
    props:['styles'],
    data(){
      return {
       
      }
    }
  }

</script>
<style>
  .menu {
    width: 200px;
    height: 100%;
     background-color: rgb(48,57,69);
  }
  .inner {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x:hidden;
  }

  .menu-icon {
    width: 180px;
    height:60px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
  }

  .menu-icon > img {
    width: 100%;
    height: 30px;
  }

  .menu-fonts {
    width: 100%;
    height: 24px;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    color: #ffffff;
    letter-spacing: 5px;
  }

  .menu-person {
    width: 100%;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .menu-person > img {

    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #ffffff;
    border: none;
    outline: none;
  }

  .menu-username {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
  }

  .menu-username > span {
    width: 100%;
    height: 44px;
    line-height:  44px;
    font-size: 14px;
    color: #ffffff;
  }

  .menu-img {
    width: 6px;
    height: 6px;
  }


  

  .el-submenu .el-menu-item{
    text-align: left;
        padding-left: 60px !important;
  }









</style>
