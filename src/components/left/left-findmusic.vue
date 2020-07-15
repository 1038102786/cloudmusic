<template>

    <div class="leftfindmusic">
        <div class="titlemenu">
            <router-link class="router-link-item" to='/leftfindmusic/gexing'>个性推荐</router-link>
            <router-link class="router-link-item" to='/leftfindmusic/gedan'>歌单</router-link>
            <router-link class="router-link-item" to='/leftfindmusic/gexing'>主播电台</router-link>
            <router-link class="router-link-item" to='/leftfindmusic/gexing'>排行榜</router-link>
            <router-link class="router-link-item" to='/leftfindmusic/gexing'>歌手</router-link>
            <router-link class="router-link-item" to='/leftfindmusic/gexing'>最新音乐</router-link>
        </div>
  
        <div class="textmeun">
            <router-view></router-view>
        </div>
    </div>

</template>


<script>
export default {
    
}
</script>


<style scope>
.leftfindmusic{
    margin: 0;
    padding: 0;
}
.titlemenu{
    left: 12%;
    width:60%;
    height:40px;
    margin: auto;
    text-align: unset;
} 

.router-link-item{
    display: block;
    width: 70px;
    cursor:pointer;
    float: left;
    text-align: center;
    border-bottom-style:solid;
    border-color: #A82828;
}
.textmeun{
    display: block;
    width:100%;
    height:95%;
    border-top-style:solid;
    border-color: gray;
    border-width: 1px;
    box-sizing: border-box;
}
</style>