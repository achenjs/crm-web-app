<template>
  <div class="userinfo">
  	<AppLabel
  	 :name="labelText"
  	></AppLabel>
  	<AppButtonGroup
             :btnList="btnList"
             :labelIs="labelIs"
             :labelSearch="labelSearch"
  	></AppButtonGroup>
  	<AppTable
      :tableConfig="tableConfig"
  	></AppTable> 
  	<AppPage
       :pageConfig="pageConfig"
  	></AppPage>

  </div>
</template>
<script>
	import AppLabel from '../../common/AppLabel';
	import AppButtonGroup from '../../common/AppButtonGroup';
	import AppTable from '../../common/AppTable';
    import AppPage from '../../common/AppPage';
	//table配置选项
	var tableConfig={
   	   tableType:'normal',//roles  是否有权限管控 有权限管控显示具体权限管控的按钮
   	   tableStyle:{
   	   	width:'100%',overflowX:'scroll'
   	   },
   	   headerTextStyle:{textAlign:'center'}, //头部字体整体样式
   	   bodyTextStyle:{textAlign:'center'},//内容字体整体样式
   	   bodyCellStyle:{justifyContent:'center',alignItems:'center',display:'flex'},//内容中具体字体整体样式
   	   dataSourceKey:{
   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'

   	             }, //显示表格数据的头部和解析数组的key
   	   dataSource:[     //数据源
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	                 {
		   	             id:'姓名',name:'会员类型',email:'卡号',address:'手机号',sex:'性别',birth:'生日',belone:'所属门店',jointime:'入会时间',
		   	             status:'状态',resource:'来源',cardvalue:'本金卡值',gift:'赠送卡值',score:'积分',introducer:'介绍人'
   	                 },
   	               ],
   	   bindKey:'id',//绑定checkbox的id
   	   hasCheckBox:true,//是否显示checkbox
   	   actions:[//表格可操作项
		   	      {text:'详情',textColor:{color:'rgb(51, 135, 255)'},action:(e)=>{
                       console.log('edit');
                       console.log(e.target.title);
		   	         }
   	              }
   	      ]
   };
   //分页组件配置
   var pageConfig={
   	   pageStyle:{  
   	   	            float: 'right',
                    paddingRight: '0.2rem',
                    paddingTop:'0.04rem'
                },
   	   source:{},
   	   pageResultSet:''
   };

	export default {
		name :'userinfo',
		components:{AppLabel,AppButtonGroup,AppTable,AppPage},
		data(){
			 return {
			 	labelText:'会员信息',
			 	btnList:[
		           {title:'会员办理',action:function(){
		               _this.$router.push({
		               	   name:'AddRights'
		               });
		           },styles:{width:'1rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff',fontSize:'0.18rem'}},

		           {title:'导入',action:function(){
		               _this.$router.push({
		               	   name:'AddRights'
		               });
		           },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333',fontSize:'0.18rem'}},

		           {title:'导出',action:function(){
		               _this.$router.push({
		               	   name:'AddRights'
		               });
		           },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333',fontSize:'0.18rem'}}
		        ],
		        labelIs:false,
		        labelSearch:{
		        	styles:{fontSize:'0.18rem'},
		        	text:'查询',
		        	actions:function(){
		        		alert('search');
		        	}	
		        },
		        tableConfig:tableConfig,
		        pageConfig:pageConfig
			 }
		}
	}
</script>
<style>
	.userinfo{
		width: 100%;height: 100%;
	}
</style>