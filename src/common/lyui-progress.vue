<template>
    <div class="progress-main-box">
        <div class="lyui-progress progress-background-box">
            <div class="lyui-progress progress-range-box" :style='"width:"+left+"px"'>
                <span class="disc" style="{visibility:false;}"></span>
                <button class="progress-slider-box" @mousedown="slidermousedown()" @mousemove="slidermousemove()" @mouseup="sildermouseup()"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            widthtag:false,
            left:23,
            right:0,
            oxdiff:0,
            slider:Object(),
            rangebar:Object()
        }
    },
    // props:[
    //     {max:256},
    //     {value:16}
    // ]
    // mounted(){
    //     var obj=document.getElementsByClassName("progress-slider-box");
    //     obj.onmouseup=function(e){console.log("e---->",e);};
    // },
    mounted()
    {
        //this.slider = document.getElementsByClassName("progress-slider-box");
        //this.rangebar = document.getElementsByClassName("progress-range-box");
        // slider.addEventLister('mousemove',this.slidermousemove,false);
    },
    methods:{
        slidermousedown:()=>{
            this.widthtag = true;
            let event=window.event;
            this.oxdiff = event.pageX-this.left;
            console.log("down---->",this.oxdiff);
        },
        slidermousemove: function name() {
            if(this.widthtag){
                let event=window.event;
                console.log(event);
                console.log("move---->",event.pageX);
                let diff = event.pageX-this.oxdiff;
                if(diff<0){
                    this.left = 0;
                }
                if(diff>100){
                    this.left = 100;
                }
                console.log("left",this.left); 
            }
        },
        sildermouseup:()=>{
            this.widthtag = false;
        //    let event=window.event;
        //    let diff = event.pageX-this.oxdiff;
        //    if(diff<0){
        //        this.left = 0;
        //    }
        //    if(diff>100){
        //        this.left = 100;
        //    }
        //    console.log("left",this.left);
        }
    }
}
</script>

<style scoped>
.progress-main-box{
    padding: 0;
    margin: 0;
    
}
.lyui-progress{
    width:100px;
    height: 6px;
    left: 0;
    border-radius: 3px;
}
.progress-background-box{
    background: #E1E1E1;
    width: 100%;
}
.progress-range-box{
    background: #c62F2F;
}
.progress-slider-box{
    padding: 0;
    margin: 0;
    float: right;
    height: 12px;
    width: 12px;
    background: white;
    border: #E1E1E1 solid 1px;
    border-radius: 6px;
    margin-top:-3px;
}
input[type="button"]:focus{
    outline:none;
}
</style>







