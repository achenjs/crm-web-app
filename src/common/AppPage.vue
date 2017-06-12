<template>
	 <div :style="pageConfig.pageStyle">
	 	<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[5, 10, 15, 20]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="totalPageSize">
	    </el-pagination>
	 </div>
</template>
<script>

  export default {
  	props:['pageConfig'],
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage:1,
        totalPageSize:30
      };
    }
  }
</script>

<style>
	
	ul:not(.md-list)>li+li {
	    margin-top: 0px;
	   }

</style>