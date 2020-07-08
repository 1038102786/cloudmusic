<template>
    <div class="tuijian">
        <!-- <img src="../../image/IMG_20180425_091501.jpg"> -->
        <el-carousel :interval="4000" type="card" height="200px" class="test">
            <el-carousel-item v-for="item in imgpath" :key="item.id">
                <img :src="item.src">
            </el-carousel-item>
        </el-carousel>
        <div class="title">
            <h3>推荐</h3>
            <p>更多</p>
        </div>

        <hr>
        <div class="imagelist">
            <imageshow></imageshow>
            <imageshow></imageshow>
            <imageshow></imageshow>
            <imageshow></imageshow>
            <imageshow></imageshow>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import imageshow from '../../common/imageshow.vue'
@Component({
    components:{
    imageshow
    }
})
export default class gexing extends Vue{
    data(){
        return{
            imgpath:[
                {id:0,src:require("../../image/IMG_20180425_091501.jpg")},
                {id:1,src:require("../../image/IMG_20180425_091501.jpg")},
                {id:2,src:require("../../image/IMG_20180425_091501.jpg")},
                {id:3,src:require("../../image/IMG_20180425_091501.jpg")},
                {id:4,src:require("../../image/IMG_20200126_173323.jpg")},
                {id:5,src:require("../../image/IMG_20200128_173526.jpg")}
            ]
        }
    }
}
</script>


<style scope>
 .tuijian{
     height: 100%;
     width: 100%;
     float: left;
     overflow: auto;
     margin: 10px;
 }  
  .el-carousel__item img {
    height: 100%;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } 

 .tuijian imageshow{
      height:30%;
  }

  .imagelist{
      margin: 0;
      display: flex;
      float: left;
  }

  /* .title{
      display: flex;
      float: left;
  } */
</style>