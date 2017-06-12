<!--
描述:页面的公共头部 label
作者:dong.xie
-->
<template>
	<div class="label">
		<div class="labelTop">
			<i class="iconfont icon-caidansandaogang"></i>
			<div class="rightwarn">
				<i class="iconfont icon-lingdang"></i>
				<span>0</span>
			</div>
		</div>

		<div class="labelCxt">
            
			<div class="babelName">
				{{name}}
			</div>
			
		</div>
	</div>

</template>

<script>
	export default {
		name:'label',
		props:['name','title','hasSearch'],
		data(){
			return {
				text:''
			}
		},
		methods:{
			
		}
	}
</script>


<style>
    input[placeholder], [placeholder], *[placeholder] { 
	     color:#333333 ;
         font-size:0.10rem;
	} 
    .label{
    	width:100%;
    	height: 1.13rem;
    	margin:0 auto;
    }
    .labelTop{
    	width:100%;
    	height: 0.62rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	flex-wrap: nowrap;
        border-bottom: 1px solid #dddddd;
    }
    .labelTop>i{
    	width:0.3rem;
    	height:0.3rem;
    	font-size: 0.28rem;
    	line-height:0.3rem;
    	padding-left: 0.22rem;
    }
    .rightwarn{
    	width:0.4rem;
    	height: 0.4rem;
    	display: flex;align-items: center;
    	justify-content: center;
    	margin-right:0.3rem;
    }
    .rightwarn>i{
      font-size: 0.14rem;
      line-height:0.14rem;
    }
    .rightwarn>span{
     
      width:0.2rem;
      height:0.16rem;
      border-radius:0.06rem;
      background-color: #dddddd;
      line-height:0.16rem;
      text-align:center;
      font-size:0.14rem;
      color: #ffffff;
    }
    .labelCxt{
    	width:100%;
    	height: 0.51rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
        border-bottom: 1px solid #dddddd;
    }
    .babelName{
    	width:1.44rem;
    	height: 100%;
    	text-align: center;
    	line-height:0.51rem;
    	font-size: 0.18rem;
    }
    .babelSearch{
    	width:2.77rem;
    	height: 100%;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }
    .labelInput{
    	width:1.5rem;
    	height: 0.28rem;
    	border: 1px solid #dddddd;
    	color: #dddddd;
    	border-radius: 4px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .labelInput>input{
    	width: 1.24rem;
    	height:0.24rem;
    	color: #333333;
    	font-size:0.10rem;
    	border: 0px;
    	outline: none;
    	display: inline-block;
    }
     .labelInput>i{
    	width: 0.26rem;
    	height:0.28rem;
    	line-height: 0.3rem;
    	font-size: 0.14rem;
    }
    .labelInputTxt{
    	font-size: 0.14rem;
    	color: rgb(51, 135, 255);
    	line-height:0.28rem;
    }
</style>