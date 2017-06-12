<template>
		<div class="tables" :style="tableConfig.tableStyle">
            <div class="tables-container">
            	   <md-table >
					  <md-table-header>
					    <md-table-row>
					      <md-table-head md-numeric 
                 v-if="tableConfig.hasCheckBox"  :style="tableConfig.headerTextStyle" >
					      	  <md-checkbox   name="my-test2"  class="md-primary md-primary-cellrows"></md-checkbox>
					      </md-table-head>
					      <md-table-head md-numeric v-for="(row,index) in tableConfig.dataSourceKey" :key="index"  :style="tableConfig.headerTextStyle" >{{row}}</md-table-head>
					      <md-table-head md-numeric  :style="tableConfig.headerTextStyle" >操作</md-table-head>
					    </md-table-row>
					  </md-table-header>

					  <md-table-body v-if="tableConfig.tableType=='normal'">
					    <md-table-row v-for="(row, index) in tableConfig.dataSource" :key="index">
					      <md-table-cell v-if="tableConfig.hasCheckBox" :style="tableConfig.bodyTextStyle">
                       <md-checkbox  :title="index"   class="md-primary md-primary-cellrows"></md-checkbox></md-table-cell>
					      <md-table-cell v-for="(col, index) in tableConfig.dataSourceKey" :key="index"  md-numeric :style="tableConfig.bodyTextStyle">{{row[index]}}</md-table-cell>
               
  					      <md-table-cell class="actions" :style="tableConfig.bodyCellStyle">
  					          <div v-on:click="action.action"
  					           class="options"
  					           v-for="(action,actionIndex) in tableConfig.actions"  :title="row[tableConfig.bindKey]" :key="actionIndex" :style="action.textColor">{{action.text}}</div>
                 </md-table-cell>
					    </md-table-row>
					  </md-table-body>


             <md-table-body v-else>
					    <md-table-row v-for="(row,index) in roleList">
					      <md-table-cell  md-numeric>
					      	   {{row.id}}
					      </md-table-cell>
                          <md-table-cell  md-numeric>
                          	   {{row.roleName}}
                          </md-table-cell>
                          <md-table-cell  md-numeric>
                          	  <md-checkbox  v-for="(rows,i) in row.roleDesc" name="my-test2"  class="md-primary md-primary-cellrows">{{rows}}</md-checkbox>
                          </md-table-cell>
                          <md-table-cell  md-numeric>
                          	  {{row.roles}}
                          </md-table-cell>
					      <md-table-cell class="actions">
					          <div v-on:click="row.actions"
					           class="options"  
					           v-for="(row,index) in actions"  :key="index" :style="row.textColor">{{row.text}}</div></md-table-cell>
					    </md-table-row>
					  </md-table-body>


					</md-table>
          </div>
        

      

	</div>
</template>
<script>
	export default {
		props:['tableConfig'],
		data(){
		    console.log(this.resultSet);
  			return {
            
  			}
		},
		created(){
      
    }
	}
</script>

<style>
   .tables-container{
       width:100%;
       background-color: #ffffff;
       border-top-right-radius: 4px;border-top-left-radius: 4px;
   }
   .options{
   	   padding-left: 5px;
   	   padding-right: 5px;
   	   text-align: left;
   	   color: rgb(51, 135, 255);
   }
   .md-table .md-table-cell.md-has-action .md-table-cell-container{
     justify-content: center;
   }
   .actions>div{
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .md-table .md-table-head-text {
    height: 28px;
    padding-right: 32px;
    padding-left: 24px;
    display: inline-block;
    position: relative;
    overflow: inherit;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 50px;
  }
  .md-table .md-table-head-container {
    height: 56px;
    padding: 0px 0;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
   }
   .md-table .md-table-cell {
    min-height: 64px;
    position: relative;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    color: rgba(0,0,0,.87);
    font-size: 13px;
    /* line-height: 18px; */
}
   .md-table .md-table-head-text {
    height: 28px;
    padding-right: 32px;
    padding-left: 24px;
    display: inline-block;
    position: relative;
    /* overflow: hidden; */
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
   
</style>