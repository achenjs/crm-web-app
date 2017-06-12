<!--
按钮组件
-->
<template>
   <div class="btnCxt">
			     <div class="btngroup">
				    <md-button v-for="(row,index) in btnList"  v-show="!isStoreAside"
				    class="md-raised md-primary btn-items"
				    :style="row.styles"
				    @click.native="row.action"
				    >{{row.title}}</md-button>
				</div>

				<div class="btnlabel">
					 <md-button 
						    class="md-raised md-primary btn-items"
						    :style="labelSearch.styles"
						    @click.native="labelSearch.actions"
						    >{{labelSearch.text}}</md-button>
				</div>


   </div>

</template>

<script>
	export default {
		 name:"ButtonGroup",
		 props:['btnList','btnLabel','labelIs','isStoreAside','labelSearch'],
		 data(){
		 	 return {
		 	 }
		 }
	}
</script>

<style>
.views>div{
    	width: 100%;height: 100%;
    }
.btnCxt{
	display: flex;
	justify-content: space-between;
   width:100%;height:0.55rem;
   align-items:center;
   border: 1px solid #dddddd;
}
.btngroup,.btnlabel{
   width:6rem;
   height:0.55rem;
   overflow:hidden;
   display: flex;
   align-items: center;
}
.btnlabel{
	 justify-content: flex-end;
}
.btnlabel>span{
  font-size: 0.14rem;
  color:'#333333';
  text-align: right;
  width:1.17rem;
}
.btn-items{
	font-size: 0.14rem;
	margin-right:0.3rem;
}
</style>