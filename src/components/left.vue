<template>
    <div class="allview">
        <div class="alllist">
            <viewcomp v-for="(item, index) in viewinfolist" :key="index" :value="item"></viewcomp>
        </div>
        <div class="listen">
            <listenshow></listenshow>
        </div>
    </div>
</template>


<script lang='ts'>
import {Component,Vue} from "vue-property-decorator"
import viewcomp from '../common/viewcomp.vue'
import listenshow from '../common/listenshow.vue'
// import * as fs from "fs"
var axios = require("../../http/api1")
@Component({
    components:{
        viewcomp,
        listenshow
    }
})
export default class leftview extends Vue{
    private viewinfolist:any=[];

    mounted() {
        this.getviewinfo()
        //console.log(axios);

        // axios({
        //     method:"get",
        //     url:'/getviewinfolist',
        //     data:{
        //     }
        // }).then((response:any)=>{
        //     console.log(response);
        // });
        // let data = fs.readFile("mock/data/getviewinfolist.json");
        // console.log(data);
    }

    getviewinfo(){
        // console.log("getviewinfo");
        axios.default.get('getviewinfolist').then((response:any) => {
            console.log(response);
            if (response.data.errNo == 0) {   
                console.log(response.data.data);
            }
            this.viewinfolist = response.data.data;
        });
    }

    private onviewcompcheck(){
        console.log('viewcompcheck')
    }
 
}
</script>

<style scoped>
.allview{
    height:100%;
    width: 165px;
    display:flex;
	flex-flow: column;
    background-color: #f5f5f7;
    border: 1px solid #E1E1E1;
}
.alllist{
    width :100%;
    height:90%;
    float: left;
    margin: 6px;
    padding: 0;
    overflow:auto;
    min-height:508px;
}

.alllist .listview{
    margin: 0;
    padding: 0;
    width :100%;
}
.listen{
    width :100%;
    height:10%;
}
</style>



