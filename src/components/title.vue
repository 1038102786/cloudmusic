<template>
    <div class="titleeare">
        <!-- <img class="titleimage" src="../image/网易云音乐.png" alt=""> -->
        <div class="titlename">
            <img src="../image/网易云音乐.png" alt="">
            <p>网易云音乐</p>
 
        </div>
        <div class="searchbox">
            <input class="inputsearch" type="text" placeholder="搜索音乐，视频，歌词，电台" >
            <img src="../image/search (1).png" alt="">
            <!-- <i class="searchicon"></i> -->
        </div>
        <div class="righttools">
            <img src="../image/最小化.png" alt="">
            <img src="../image/全屏.png" alt="">
            <img src="../image/关闭.png" alt="">
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.titleeare{
    float: left;
    height: 100%;
}
/* .titleimage{
    padding: 0;
    margin:0;
    float: left;
    height: 120px;
    width: 190px;
} */
.titlename{
    margin-left: 20px;
    float: left;
}
.titlename img{
    margin-top: 15px;
    float: left;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 5px solid white;
    border-radius: 14px;
}
.titleeare p{
    float: left;
    color: white;
    font-size: 20px;
    font-family: fantasy;
    margin: 0;
    margin-top: 15px;
    margin-left: 10px;
}
.searchbox{
    float: left;
    height: 100%;
    width: 250px;
    display: flex;
    position: relative
}
.searchbox>img{
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-top: 18px;
    position:absolute;
    right: 6px;
    top: 3px;
}
.searchbox>img:hover{
    background-image:url("/image/search.png");
}
/* .searchicon{
    background-image: url("../image/search.png");
} */
.inputsearch{
    background-color: #A82828;
    height: 25px;
    width: 100%;
    border-radius: 15px;
    border: none;
    margin-top: 18px;
    margin-left: 30px;
    padding-left: 10px;
    color: white;
}

.inputsearch:focus{
    outline: none;
}

input::-webkit-input-placeholder {
    color: #C77373;
    margin-left: 10px;
}

.righttools{
    float:right;
    margin:15px;
}

.righttools>img{
    width: 16px;
    height: 16px;
    padding: 8px;
}

</style>