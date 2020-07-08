<template>
    <div class="buttomeare">
        <audio id="buttomaudio" src="../sound/6-1.mp3" style="{display:false;}"></audio>
        <div class="control">
            <img class="last" @click="next(false)" src="../image/left-circle-fill.png" alt="">
            <img class="play" @click="play" src="../image/play-circle-fill.png" alt="">
            <img class="last" @click="next(true)" src="../image/right-circle-fill.png" alt="">
        </div>
        <div class="progress">
            <span class="starttime">{{progressvalue}}</span>
            <el-slider class="processbar" v-model="currentconds" :max="allseconds"></el-slider>
            <span class="overtime">{{progressmax}}</span>
        </div>
        <div class="tools">
            <img src="../image/喇叭.png" alt="">
            <el-slider class="volume" v-model="volume"></el-slider>
            <img src="../image/随机播放.png" @click="setRandom" alt="">
        </div>
    </div>
</template>


<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
var axios = require('../../http/api1')
@Component({})
export default class buttomeare extends Vue{
    private progressvalue:string='00:00';
    private progressmax:string='00:00';
    private allseconds:number=0;
    private currentconds:number=0;
    private volume:number=0;
    private interval:any;
    private soundList:any=["6-2.mp3","../sound/6-3.mp3","../sound/bc.mp3"];
    private currentIndex:number=0;
    private random:boolean=false;

/**
 * 待完成:
 * 1.图片点击切换
 * 2.音量控制
 * 3.left-listenshow信息同步
 */
    mounted(){
        axios.default.get('getsoundlist').then((response:any) => {
            if(response.data.errNo === 0){
               this.soundList=response.data.data;
            }
            console.log(this.soundList);
            this.iniData();
        })
    }

    private play():void{
        var audio:any = document.getElementById("buttomaudio");
        var play:any=document.getElementsByClassName("play");
        if(audio.paused){
            audio.play();
            console.log("audio.play");
            this.allseconds=audio.duration.toFixed(0);
            this.progressmax = (this.allseconds/60).toFixed(0)+":"+this.allseconds%60;
            console.log("allseconds",this.allseconds);

             this.interval = setInterval(()=>{
                 this.currentconds=audio.played.end(0).toFixed(0);
                 if(this.currentconds>60*60)
                 {
                     this.progressvalue =(this.currentconds/60/60).toFixed(0)+":"+ (this.currentconds/60).toFixed(0)+":"+this.currentconds%60;
                 }
                 else if(this.currentconds>60){
                     this.progressvalue = (this.currentconds/60).toFixed(0)+":"+this.currentconds%60;
                 }
                 else{
                     this.progressvalue = "00:"+this.currentconds%60;
                 }
                 
                 console.log("currentconds",this.currentconds);
            },500);
            play.setAttribute('src',"/image/poweroff-circle-fill.png");
        }else{
            clearInterval(this.interval);
            audio.pause();
            console.log("audio.stop");
            play.src="/image/play-circle-fill.png";
        }
        
    }

    private next(isnext:boolean):void{
        if(this.random)
        {
            this.currentIndex = Math.random() % 5;
        }
        else if(isnext){
            this.currentIndex = (this.currentIndex+1)%(this.soundList.length);
        }else{
            this.currentIndex = (this.currentIndex-1)%(this.soundList.length);
        }
        var audio:any = document.getElementById("buttomaudio");
        audio.src=this.soundList[this.currentIndex].url;
        console.log(this.currentIndex,this.soundList[this.currentIndex].url);
    }

    private iniData():void{
        var audio:any = document.getElementById("buttomaudio");
        audio.src=this.soundList[this.currentIndex].url;
        this.volume = audio.volume;

        console.log(this.currentIndex,this.soundList[this.currentIndex].url);
        console.log("volume",this.volume);
    }

    private setRandom():void{
        this.random = !this.random;
    }
}
</script>

<style scoped>
.progress{
    float: left;
    padding:0;
    margin-top: 15px;
    width:60%;
    text-align:justify;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
}
.progress span{
    padding-left: 20px;
    margin-top: 8px;
    float: left;
    width:25px;
}
.progress .processbar{
    float: left;
    width:80%;
    position: relative;
    left:30px;
    margin-left: 5px;
    margin-right: 20px;
}
/* .progress .overtime{
    float: left;
    margin-top: 8px;
    width:25px;
} */
.control{
    padding: 6px;
    float: left;
}
.last{
    margin: 6px;
    width:40px;
    height: 40px;
}
.play{
    width:45px;
    height: 45px;
}
.tools{
    padding-right: 30px;
    float: right;
}
.tools img{
    height: 25px;
    width: 25px;
    float: left;
    padding-top: 19px;
}
.tools .volume{
    width: 100px;
    float: left;
    margin: 14px;
    margin-left: 15px;
    margin-right: 15px;
}
</style>