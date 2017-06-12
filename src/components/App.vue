<template>
    <div>
    	<AppMenu :styles="menuStyles"></AppMenu>
    	<div :style="styles">
    		 <router-view></router-view>
    	</div>
     </div>
</template>
<script>
    import AppMenu from '../common/AppMenu';
    var screenWidth=document.documentElement.clientWidth;
    var menuWidth=200;
    var cxtWidth=screenWidth-menuWidth;
    console.log(cxtWidth);
	export default {
		name:'app',
		components:{AppMenu},
		data(){
			return {
				styles:{width:cxtWidth+'px',height:'100%'},
				menuStyles:{width:menuWidth+'px'}
			}
		}
	}

</script>

