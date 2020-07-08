<template>
    <div class="listenshow">
        <div class="imgdiv">
            <img src="../image/muwu.jpg"> 
        </div>  
        <div class="name">
            <p class="songname">这是一首简单的小情歌</p>
            <p class="authername">苏打绿</p>
        </div>
        <div class="oper">
            <!-- <button class="share">分</button>
            <button class="like">喜</button> -->
            <img src="../image/收藏.png" alt="">
            <img src="../image/分享.png" alt="">
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scope>
.listenshow{
    padding: 0;
    margin: 0;
    border: 1px solid #E1E1E1;
    height:50px;
    width: 165px;
    font-size: 11px;
    float: left;
}
.imgdiv{
    float: left;
    width: 50px;
    height:50px;
    
}
.name{
    float: left;
    text-align:justify;
    height: 100%;
    overflow: hidden;
    max-width: 90px;
}
.name>p{
    overflow: hidden;
    white-space:nowrap;
}
.oper{
	float: right;
    height:100%;
}
.oper>img{
    display:block;
    width:15px;
    height: 15px;
    margin: auto;
    padding: 5px;
} 
</style>