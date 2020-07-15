<template>
    <ul class="listview">

        <li class="viewtitle">{{value.title}}</li>
        <!-- <viewcomp v-for="(subiteitemm, index) in value.content" :key="index" :title='subitem.disc' :routerpath="subitem.routerpath"></viewcomp> -->
    
        <li class="viewshow" v-for="(subitem, index) in value.content" :key="index">
            <!-- <img :src="subitem.imgurl"> -->
            <router-link :to="subitem.routerpath">{{subitem.disc}}</router-link>
            <!-- <img :src="subitem.righticon"> -->
        </li>
    </ul>
</template>

<script lang='ts'>
import { Vue, Component, Prop} from "vue-property-decorator";
@Component({})
export default class viewcomp extends Vue{

    // interface paramsfarmot{
    //     title:string;
    //     content:[
    //         title !:string;
    //         imgurl ?:string;
    //         righticon ?:string;
    //         routerpath !:string;
    //     ]
    // }
    @Prop() value:any;

    created() {
        console.log("listview",this.value);
    }
}
</script>


<style scoped>
    .alllist{
        height:90%;
        width:100%;
        margin-bottom: 40px;
    }
    .viewshow{
        /* font-family:"Times New Roman",Georgia,Serif; */
        /* background-color:green; */
        height:30px;
        margin:0;
        padding:0;
        flex-direction: row;
        justify-content: center;
        margin-left: 20px;
        list-style:none;
        list-style-image:url("/image/result_icon_gaoshou@2x.png");
    }
    .viewshow::selection{
        background-color: #E6E7EA;
    }
    .viewshow .router-link-active{
        /* background-color: #E6E7EA; */
    }
    .viewshow:hover{
        color: black;
        /* font-family:"Times New Roman",bold,Georgia,Serif; */
    }
    .viewtitle{
        line-height: 30px;
        list-style:none;

    }
    a:-webkit-any-link {
        color:#7D7D7D;
        cursor: default;
        text-decoration: none;
    }
</style>

